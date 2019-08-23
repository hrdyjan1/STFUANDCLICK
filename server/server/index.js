import express from 'express';
import dbConfig from './config/db';
import middleware from './config/middleware';
import TeamRoutes from './team/routes';

const app = express();

dbConfig();
middleware(app);
app.use('/api', [TeamRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  }
  console.log(`App is listening on port ${PORT}`);
});
