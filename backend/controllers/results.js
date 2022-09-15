import {getResultByUId} from "../models/resultModel.js"

export const showResultByUserId = (req, res) => {
  getResultByUId(req.params.uid, (err, results) => {
    if (err) {
      res.send(err);
      return;
    }
    res.json(results)
  });
}
