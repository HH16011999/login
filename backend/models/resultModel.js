import db from "../config/database.js";

export const getResultByUId = (uid, result) => {
  db.query("SELECT * FROM results WHERE user_id = ?", [uid], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    } 
    result(null, results[0]);
  });
}