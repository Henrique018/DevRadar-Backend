import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect(
  `mongodb+srv://${process.env.DATABASE}:${process.env.PASSWORD}@cluster0-1conc.mongodb.net/week10?retryWrites=true&w=majority`,
  {
    useFindAndModify: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
);

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
