const mongoose = require("mongoose");

const FilimSchema = new mongoose.Schema(
  {
    "es-ES": {
      filim_title: { type: String, required: true },
      filim_description: { type: String, required: true },
      filim_director: { type: String, required: true },
    },
    "en-US": {
      filim_title: { type: String, required: true },
      filim_description: { type: String, required: true },
      filim_director: { type: String, required: true },
    },
    "pt-BR": {
      filim_title: { type: String, required: true },
      filim_description: { type: String, required: true },
      filim_director: { type: String, required: true },
    },
  },
  { strict: true },
  { versionKey: false }
);

module.exports = mongoose.model("films", FilimSchema);
