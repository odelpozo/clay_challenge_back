const koaRouter = require("koa-router");
const { getFilimDB, getFilimsDBall, saveFilimDB } = require("../api/search");

const validateSchemaReplace = require("../route/middleware");

const router = new koaRouter({ prefix: "/api" });

router.get("/movies", async (ctx) => {
  const promises = [];
  promises.push(getFilimsDBall());
  const [resp] = await Promise.allSettled(promises);

  if (resp.status === "fulfilled") {
    ctx.response.status = 200;
    ctx.body = { ReadOfDataBsse: resp.value };
  } else {
    ctx.response.status = 500;
    ctx.body = {
      err: "the operation could not be executed",
    };
  }
});

router.get("/movie", async (ctx) => {
  const promises = [];
  const id = ctx.query.id;
  promises.push(getFilimDB(id));
  const [resp] = await Promise.allSettled(promises);

  if (resp.status === "fulfilled") {
    ctx.response.status = 200;
    ctx.body = { ReadOfDataBsse: resp.value };
  } else {
    ctx.response.status = 500;
    ctx.body = omdb.reason;
  }
});

router.post("/movie", async (ctx) => {
  const valid = await validateSchemaReplace(ctx.request.body);

  if (!valid) {
    ctx.response.status = 301;
    ctx.body = { error: "Reqquest invalid" };
    return;
  }
  const reqBody = ctx.request.body;
  await saveFilimDB(reqBody)
    .then(() => {
      ctx.response.status = 200;
      ctx.body = { ReadOfDataBase: reqBody };
    })
    .catch(() => {
      ctx.response.status = 401;
      ctx.body = {
        err: "the operation could not be executed",
      };
    });
});

router.put("/movie", async (ctx) => {
  const valid = await validateSchemaReplace(ctx.request.body);

  if (!valid) {
    ctx.response.status = 301;
    ctx.body = { error: "Reqquest invalid" };
    return;
  }

  const reqBody = ctx.request.body;
  await updateFilimDB(reqBody)
    .then(() => {
      ctx.response.status = 200;
      ctx.body = { ReadOfDataBase: reqBody };
    })
    .catch(() => {
      ctx.response.status = 401;
      ctx.body = {
        err: "the operation could not be executed",
      };
    });
});

router.delete("/movie", async (ctx) => {
  const idDelete = ctx.query.id;

  await deleteFilimDB(idDelete)
    .then(() => {
      ctx.response.status = 200;
      ctx.body = { ReadOfDataBase: idDelete };
    })
    .catch(() => {
      ctx.response.status = 401;
      ctx.body = {
        err: "the operation could not be executed",
      };
    });
});
module.exports = router;
