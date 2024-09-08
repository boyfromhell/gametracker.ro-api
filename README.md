<h1 align="center">
    GameTracker API
</h1>

<h4 align="center">
  Get information about your favorite server without enter ingame
</h4>
<p align="center">
  <img alt="GitHub" src="https://img.shields.io/github/license/vitogd/gamedig-api.svg">
</p>

<p align="center">
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

---

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16](https://nodejs.org/]) or
higher + [Yarn v1.13](https://yarnpkg.com/) or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/boyfromhell/gametracker.ro-api gametracker.ro-api

# Go into the repository
$ cd gametracker.ro-api

$ cp .env.example .env

# Install dependencies
$ npm install

# Run the api
$ npm run start
```

The default port is 3000, you can change it editing the .env file:

```js
const port = process.env.PORT || 3000; // change the 3000 to your favorite port
```

## How to get the information?

Base URL: `localhost:3000/`

| Method | Endpoint | Params          | Return             |
|--------|----------|-----------------|--------------------|
| GET    | `/info/` | `game, ip:port` | server info object |

[List of supported games](/games)

The param port is optional depending of the game.

## Example usage:

GET `localhost:3000/info/cs16/93.114.82.21:27015`

Return:

```json
{
  "info": {
    "name": "*  NORD.LALEAGANE.RO  #NeverSleep",
    "map": "de_kabul32",
    "password": false,
    "raw": {
      "protocol": 48,
      "folder": "cstrike",
      "game": "Counter-Strike",
      "appId": 10,
      "numplayers": 32,
      "numbots": 0,
      "listentype": "d",
      "environment": "l",
      "secure": 1,
      "version": "1.1.2.7/Stdio"
    },
    "maxplayers": 32,
    "players": {
      32
      items
    },
    "bots": {
      2
      items
    },
    "connect": "93.114.82.21:27015",
    "ping": 18
  }
}
```

## :memo: License

This project is under the MIT license. See
the [LICENSE](https://github.com/boyfromhell/gametracker.ro-api/blob/master/LICENSE.md)
for more information.

---

Author: [IchBin](https://www.gametracker.ro)
