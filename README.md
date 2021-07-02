# cat-bot-tg

cat-bot-tg is a [telegram](https://telegram.org/) bot that aims to send photos/gif of cats

## Technologies and other things I used

- [Nodejs](https://nodejs.org/en/)
- [Telegraf.js](https://telegraf.js.org/)
- [Axios](https://github.com/axios/axios)
- [ And this api to retrieve random cats](https://cataas.com/#/)
- [Node Version Manager (for linux and mac users)](https://github.com/nvm-sh/nvm)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Requirements

Node >= v16.3.0

## Installation

First clone this project

> git clone https://github.com/NtsCiccio/cat-bot-tg.git

if are on linux or OSX i advise you to use [nvm](https://github.com/nvm-sh/nvm)

> nvm use

After cloning move to the destination folder and type

> npm ci

## Run the project

> npm run start

## Configuration

In the root folder create a file called .env
<br/> <br/>
example:

```
BOT_TOKEN = token here
API = https://cataas.com/cat
```
p.s if you want to use this api leave this line unchanged otherwise put the api you prefer.
## Contributing

Pull requests are welcome.
