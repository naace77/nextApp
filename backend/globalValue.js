const mysql = require("mysql");
exports.USER_LIST = null;
exports.SCHostIp = "14.63.172.72";
exports.connectDB = dbName => {
  var dbUser = this.USER_LIST.filter(item => item.CUDBName === dbName)[0];
  var user = dbUser.CUUser;
  var password = dbUser.CUPassword;
  // console.log(dbUser, user, password);
  var connection = mysql.createConnection({
    host: "14.63.172.72",
    post: 3306,
    user: user,
    password: password,
    database: dbName,
    timezone: "utc",
    dateStrings: ["DATE", "DATETIME"] //timezone 설정
  });
  return connection;
};
