20130730-node-handson
=====================

Sample source for 20130730 node hands-on

## Install node

```
$ git clone git://github.com/creationix/nvm.git ~/.nvm
$ . ~/.nvm/nvm.sh
```

```
$ nvm install v0.10.15
```

## Install express, node-dev

```
$ npm install -g express node-dev coffee-script
```

## Create express project

```
### jade
$ express 20130730-hands-on

### ejs
$ express 20130730-hands-on -e

### hogan
$ express 20130730-hands-on --hogan

### Other template (e.g. handlebars)
$ express 20130730-hands-on

### less
$ express 20130730-hands-on -c less

### stylus
$ express 20130730-hands-on -c stylus
```

## Install dependencies

```
$ cd 20130730-hands-on

### If you choose other template
$ vi package.json

### Replace "jade" into "handlebars" and add "consolidate"
{
  "name": "application-name",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node app"
  },
  "dependencies": {
    "express": "3.1.0",
    "less-middleware": "*",
    "handlebars": "*",
    "consolidate": "*"
  }
}
```

## Run server

```
$ node-dev app.js
```

## Libraries

- Utils
    - [coffee-script](http://coffeescript.org/)
    - [iced-coffee-script](http://maxtaco.github.io/coffee-script/)
    - [q](https://github.com/kriskowal/q)
    - [async](https://github.com/caolan/async)
    - [consolidate](https://github.com/visionmedia/consolidate.js/)
- HTTP client
    - [request](https://github.com/mikeal/request)
- WebSocket
    - [socket.io](http://socket.io/)
- DB
    - [mongoose](http://mongoosejs.com/)
    - [redis](https://github.com/mranney/node_redis)
    - [sqlite](https://github.com/developmentseed/node-sqlite3)
- Server
    - [node-dev](https://github.com/fgnass/node-dev)
- frameworks
    - [Sails.js](http://sailsjs.org/)
    - [Mojito](http://developer.yahoo.com/cocktails/mojito/)
    - [Derby](http://derbyjs.com/)
    - [Compound](http://compoundjs.com/)
