# bot-cat-tg

bot-cat-tg is a [telegram](https://telegram.org/) bot that aims to send photos of random cats

## Technologies and other things I used

- [Nodejs](https://nodejs.org/en/)
- [Telegraf.js](https://telegraf.js.org/)
- [Axios](https://github.com/axios/axios)
- [ And this api to retrieve random cats](https://aws.random.cat/meow)
- [Node Version Manager](https://github.com/nvm-sh/nvm)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [expressjs](https://expressjs.com/it/) **more details in [Explanations](#explanations)**

## Requirements

Node >= 10.16.0

## Installation

First clone this project

> git clone https://github.com/M-remondi/bot-cat-tg.git

if you use nvm

> nvm use

After cloning move to the destination folder and type

> npm install

## Run the project locally

> npm run start

## Configuration

In the root folder create a file called .env
<br/> <br/>
example:

```
BOT_TOKEN = token here
API = api here
```

## Contributing

Pull requests are welcome.
Please open an issue first to discuss what you would like to change.

## Contributors

- my friend
  - Shiby she Corrected my grammar mistakes (grammar nazi :heart:)
  - Daniele he always bears me [github](https://github.com/DAnt93)

## Explanations

I use expressjs only for deploy the bot on heroku thaks to [this issue](https://github.com/telegraf/telegraf/issues/363#issuecomment-446361074) i figured out the problem
