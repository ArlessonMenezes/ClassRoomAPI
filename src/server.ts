import 'express-async-errors';
import express from 'express';

import { AppDataSource } from './database/data-source';
import routes from './routes';
import { ErrorMiddleware } from './middlewares/error';

const app = express();

AppDataSource.initialize()
  .then(() => console.log("Application connected in database"))
  .catch(err => console.log(err))
  
  app.use(express.json());
  
  app.use(routes);

  app.use(ErrorMiddleware);

  app.listen(process.env.PORT)
