# comicute
Project Phase 2 Second Week Blandford Fox  

### Members
* Ahyana Rizky Pratama
* Dharmadi Tanamas
* Septian Adhi Tama
* Toni Chen

### Routes
Endpoint | Http | Description
---------|------|------------
|`http://localhost:3000/api/` |GET | Get database content |
|`http://localhost:3000/api/`|POST| Add new document to database|
|`http://localhost:3000/api/`|PUT | Update database document|
|`http://localhost:3000/api/`|DELETE | Delete database document|

### package.json - SERVER SIDE
```src
{
  "name": "server",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "nodemon ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "cors": "^2.8.1",
    "debug": "~2.2.0",
    "dotenv": "^2.0.0",
    "express": "~4.13.4",
    "express-session": "^1.14.2",
    "jade": "~1.11.0",
    "mongodb": "^2.2.11",
    "mongoose": "^4.6.5",
    "morgan": "~1.7.0",
    "multer": "^1.2.0",
    "passport": "^0.3.2",
    "passport-local": "^1.0.0",
    "passport-local-mongoose": "^4.0.0",
    "serve-favicon": "~2.3.0"
  },
  "devDependencies": {
    "nodemon": "^1.11.0"
  }
}

```

### bower.json - CLIENT SIDE
```src

{
  "name": "comicute-client",
  "homepage": "https://github.com/blanford-fox-2016/comicute",
  "authors": [
    "Ahyana Rizky Pratama <ahyana.rizky@gmail.com>"
  ],
  "description": "client side of comicute",
  "main": "index.html",
  "keywords": [
    "client",
    "comicute"
  ],
  "license": "MIT",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "devDependencies": {
    "bootstrap": "^3.3.7"
  }
}
```

### Tree View Directory
```src
.
├── client
│   ├── bower_components
│   ├── bower.json
│   ├── index.html
│   └── src
├── LICENSE
├── README.md
└── server
    ├── app.js
    ├── bin
    ├── controller
    ├── node_modules
    ├── package.json
    ├── public
    ├── routes
    └── views

10 directories, 6 files
```
