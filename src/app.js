import "express-async-errors";
import "dotenv/config";
import express from "express";
import notFound from "./middlewares/not-found.middlewares.js";
import errorHandler from "./middlewares/error-handler.middlewares.js";
import { stripeController } from "./controllers/stripe.controller.js";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/create-payment-intent", stripeController);

app.use(notFound);

app.use(errorHandler);

export default app;
