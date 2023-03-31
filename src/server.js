const koa = require("koa");
const app = new koa();
const bodyParser = require("koa-bodyparser");
const json = require("koa-json");
const connectDB = require("./mongo/database");
const searchMovies = require("./route/filims.routes");

const cors = require("@koa/cors");

app.use(cors());
app.use(json());
app.use(bodyParser());

app.use(searchMovies.routes()).use(searchMovies.allowedMethods());

app.listen(6000, () => {
  console.log("Server listener port 6000");
  connectDB();
});
