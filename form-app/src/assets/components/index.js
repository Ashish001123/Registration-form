
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();


app.use(cors());

app.use(bodyParser.json()); 

app.post("/saveData", (req, res) => {
    try {
        console.log("Received data:", req.body);
        
        let data2 = req.body;
        console.log("Data to save:", data2);
        res.status(200).send({message : "ok"});
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).send({message : "Server error"});
    }
});

app.listen(5001, () => {
    console.log("The server is running on port 5001");
});
