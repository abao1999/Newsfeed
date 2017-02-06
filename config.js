// Replace here with your MongoDB server address    mongodb://heroku_tk0chw45:gm03dj8anroks12mp36qh7jj8r@ds143559.mlab.com:43559/heroku_tk0chw45
exports.database = process.env.MONGODB_URI || process.env.MONGOLAB_URI;
exports.port = process.env.PORT;
exports.cookieSecret = "1lksdoi38r8h4sle83vn939578fjsldin8";
//9a62df3075e2ab7bb554c2e2607af0dd

exports.urlRegex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
exports.emailRegex = new RegExp("^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$");

exports.cacheTime = 60 * 60 * 1000; // 1 hour in milliseconds
exports.maxItems = 5;
