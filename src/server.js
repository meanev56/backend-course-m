import express from "express";

import movieRoutes from "./routes/movieRoutes";

const app = express();


const PORT = 5001;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});