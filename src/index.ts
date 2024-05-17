import express from 'express';
import dotenv from 'dotenv';
import { json } from 'body-parser';
import router from './routes/router';
import bodyParser from 'body-parser';
import path from 'path';
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(json());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
