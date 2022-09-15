import { getUserById, hasUserByEmail, getUserByEmail, insertUser } from "../models/userModel.js";

export const showUserById = (req, res) => {
  getUserById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
      return;
    }
    res.json(results)
  });
}

export const showUserByEmail = (req, res) => {
  const email = req.query.email
  hasUserByEmail(email, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
}
export const loginUser = (req, res) => {
  const { email, password } = req.body;
  hasUserByEmail(email, (err, results) => {
    if (err) {
      res.send(err);
      return;
    }
    if (Object.values(results)[0] == 0) {
      res.json({ hasUser: false });
      return
    }
    getUserByEmail(email, (uerr, uresults) => {
      if (uerr) {
        res.send(uerr);
        return;
      }
      if(password != uresults.password){
        res.json({ hasUser: true, rPass: false });
        return;
      }
      res.json({ hasUser: true, rPass: true, user: uresults })
    })
  });
}
export const createUser = (req, res) => {
  const { email, password } = req.body;
  const data = {
    email: email,
    password: password,
  }
  insertUser(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
}