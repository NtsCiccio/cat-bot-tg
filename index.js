const Telegraf = require("telegraf");
const axios = require("axios");

const bot = new Telegraf("833287603:AAEc0a6F8Y3EJWhxsEoNHVhZwTeCd9Nw0MU");
const apiCat = "https://aws.random.cat/meow";
let urlIncomigCat = "";

bot.start(ctx =>
  ctx.reply("Hey tu! si dico proprio a te usa il comando /drugme")
);

bot.command("drugme", ctx => {
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
      ctx.reply(":( niente gatti è successo qualcosa di brutto");
      console.log(error);
    })
    .finally(function() {
      ctx.reply("Aspetta un'attimo...");
    });
});

bot.launch();
