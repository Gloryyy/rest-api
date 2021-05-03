import express from "express";
import mongoose from "mongoose";
import routes from "./src/routes/todoRoutes";

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/todoDB", {
  useMongoClient: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.get("/", (req, res) =>
  res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
