import db from "../config/database.js";

export const getUserById = (id, result) => {
  db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
}

export const getUserByEmail = (email, result) => {
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
}

export const hasUserByEmail = (email, result) => {
  db.query("SELECT EXISTS(SELECT 1 FROM users WHERE email = ?)", [email], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
}