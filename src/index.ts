import express from 'express';
import 'express-async-errors';
import { NotFoundError } from './errors/not-found-error';
import errorHandler from './middlewares/error-handler';
import authRoutes from './routes/auth';
import productsRoutes from './routes/products';
import swaggerUi from "swagger-ui-express";
const https = require("https");
const fs = require("fs");
const cors = require('cors');
const port = process.env.PORT || 8080;

// let's initialize our express app
const app = express();

// let's parse our incoming request with JSON payload using the express.json() middleware
app.use(express.json());


  

// const options = {
//   cert: fs.readFileSync("/home/ec2-user/Backend/cert.pem"),
//   key: fs.readFileSync("/home/ec2-user/Backend/key.pem")
// };

app.use(cors({
  origin: '*'
}));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);
// add our routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/product', productsRoutes);

// catch all route
app.all('*', async () => {
  throw new NotFoundError();
});

// add our error handler middleware
app.use(errorHandler);

// listen to our express app
app.listen(port, () => {
  console.log(`Our Application is up and running on port ${port}`);
});

// https.createServer(options, app).listen(8080);