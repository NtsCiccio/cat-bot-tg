const Telegraf = require("telegraf");
const axios = require("axios");
require("dotenv").config();
const apiCat = process.env.API_CAT;
let urlIncomigCat = "";

const bot = new Telegraf(process.env.TOKEN);
bot.start(ctx =>
  ctx.reply(
    "Hey you! yeah you, do you want some kitty pics?\n use the command /kittyme"
  )
);

bot.command("kittyme", ctx => {
  axios
    .get(apiCat)
    .then(response => {
      urlIncomigCat = response.data.file;
      const fileExtension = urlIncomigCat
        .split(".")
        .pop()
        .split(/\#|\?/)[0];

      if (
        fileExtension === "jpg" ||
        fileExtension === "png" ||
        fileExtension === "jpeg"
      ) {
        ctx.replyWithPhoto({ url: urlIncomigCat });
      }

      if (fileExtension === "gif") {
        ctx.replyWithAnimation({ url: urlIncomigCat });
      }
    })
    .catch(error => {
      ctx.reply(":( not cats for you, sorry");
      console.log(error);
    })
    .finally(function() {
      ctx.reply("Wait, I'm choosing the cutest cat");
    });
});

bot.startPolling();
