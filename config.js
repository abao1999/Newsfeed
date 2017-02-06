// Replace here with your MongoDB server address     process.env.MONGODB_URI || process.env.MONGOLAB_URI
exports.database = "mongodb://heroku_r3zjhrhj:om6b06jthargk5if7uun2o7i93@ds061228.mlab.com:61228/heroku_r3zjhrhj";
exports.port = process.env.PORT;
exports.cookieSecret = "1lksdoi38r8h4sle83vn939578fjsldin8";

exports.urlRegex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
exports.emailRegex = new RegExp("^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$");

exports.cacheTime = 60 * 60 * 1000; // 1 hour in milliseconds
exports.maxItems = 5;
