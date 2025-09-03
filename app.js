import express from "express";
import bodyParser from "body-parser";

import assignmentsRouter from "./routes/assignments.mjs";
import accountsRouter from "./routes/accounts.mjs";

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("Hello Teacher!!");
});


app.use('/assignments',assignmentsRouter)
app.use('/accounts',accountsRouter)


app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
