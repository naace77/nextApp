const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");

var globalValue = require("../globalValue");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "userId",
        passwordField: "password"
      },
      async (userId, password, done) => {
        // console.log("local.js", userId, password);
        try {
          var con = globalValue.connectDB("InfraPortal");
          con.connect();
          var sql = `SELECT A.SUCODE, A.SUNAME, A.SUSCCODE, A.SUID, A.SULEVEL,A.SUSTCODE, B.SCDBNAME, B.SCHOSTIP FROM SYSUSER A 
                      JOIN SYSCOMPANY B ON A.SUSCCODE = B.SCCODE WHERE SUID = ? AND SUPW = ?`;
          var parm = [userId, password];
          con.query(sql, parm, function(err, rows, fields) {
            if (!err) {
              const user = rows[0];
              if (!user) {
                return done(null, false, {
                  reason: "아이디 또는 비밀번호를 확인해주세요."
                });
              }
              return done(null, user); //req.user에 저장됨
            }
          });
          con.end();
        } catch (e) {
          console.error(e);
          return done(e);
        }
      }
    )
  );
};
