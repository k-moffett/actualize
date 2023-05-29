import express from 'express';
import cors from 'cors';

const app = express();
const port = 8080;
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(cors(options)); /* NEW */
app.use(express.json());

app.get('/', (req, res) => {
    res.send({ message: 'Hello!' });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
