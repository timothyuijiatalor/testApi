"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express = require("express");
var app = express();
app.use(express.json());
app.use(express.static('assets/')); // makes certain folders public so that they can be directly accessed from browser
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    return next();
});
app.get('/test', function (req, res, next) { return res.send('ok'); });
var port = 9000;
app.listen(port, function () { return console.log("Server is listening on port " + port); });
//# sourceMappingURL=index.js.map