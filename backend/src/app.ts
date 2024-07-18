import 'dotenv/config';
import express from 'express';
import route from './routes/index';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use('/api', route);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
