# comicute
Project Phase 2 Second Week Blandford Fox. Comicute is a special place for comic or cartoon artist and enthusiast. Share your comics and artworks at Comicute!

### Members
* Ahyana Rizky Pratama
* Dharmadi Tanamas
* Septian Adhi Tama
* Toni Chen

### Routes
Default host and route is `http://localhost:3000`
Endpoint | Http | Description
---------|------|------------
|`/api/user` | GET | Get all user documents from database |
|`/api/user`| POST | Add a new user document to database |
|`/api/user/:id`| PUT | Update a user document from database |
|`/api/user/:id`| DELETE | Delete a user document form database |
|`/api/comic` | GET | Get database content |
|`/api/comic`| POST| Add new document to database|
|`/api/comic/:id`| PUT | Update database document|
|`/api/comic/:id`| DELETE | Delete database document|
|`/auth/login`| POST | User login |
|`/auth/register`| POST | User registration |

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
### License
MIT License

Copyright (c) 2016 Hacktiv8: Blanford Fox 2016

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
