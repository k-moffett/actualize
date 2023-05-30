import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const port = 8080;
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
    origin: allowedOrigins
};

dotenv.config({ path: `${path.dirname(__filename)}/.env.local`  });

app.use(cors(options));
app.use(express.json());

app.get('/', (req, res) => {
    res.send({ message: 'Hello!' });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`, process.env);
});
