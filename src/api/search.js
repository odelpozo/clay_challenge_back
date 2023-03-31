const Filims = require("../models/filims");

getFilimsDBall = () => {
  return new Promise(async (resolve, reject) => {
    Filims.find({}, (err, docs) => {
      if (err) {
        reject(err);
      } else {
        resolve(docs);
      }
    });
    // .limit(limit * 1)
    // .skip((page - 1) * limit);
  });
};

getFilimDB = (req) => {
  return new Promise(async (resolve, reject) => {
    Filims.find({ _id: req }, (err, docs) => {
      if (err) {
        reject(err);
      } else {
        console.log(" docs:", docs); // validate log in Railway is test
        resolve(docs);
      }
    });
  });
};

saveFilimDB = (req) => {
  return new Promise(async (resolve, reject) => {
    let filim = new Filims();
    (filim["en-US"] = req["en-US"]),
      (filim["pt-BR"] = req["pt-BR"]),
      (filim["es-ES"] = req["es-ES"]),
      await filim
        .save()
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject();
        });
  });
};

updateFilimDB = (req) => {
  return new Promise(async (resolve, reject) => {
    const objectUpdate = {
      "en-US": {
        filim_title: req["en-US"].filim_title,
        filim_description: req["en-US"].filim_description,
        filim_director: req["en-US"].filim_director,
      },
      "pt-BR": {
        filim_title: req["pt-BR"].filim_title,
        filim_description: req["pt-BR"].filim_description,
        filim_director: req["pt-BR"].filim_director,
      },
      "es-ES": {
        filim_title: req["es-ES"].filim_title,
        filim_description: req["es-ES"].filim_description,
        filim_director: req["es-ES"].filim_director,
      },
    };

    await Filims.findByIdAndUpdate({ _id: req._id }, objectUpdate, {
      useFindAndModify: false,
    })
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject();
      });
  });
};

deleteFilimDB = (req) => {
  return new Promise(async (resolve, reject) => {
    await Filims.findByIdAndDelete({ _id: req })
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject();
      });
  });
};

module.exports = {
  getFilimDB,
  getFilimsDBall,
  saveFilimDB,
  updateFilimDB,
  deleteFilimDB,
};
