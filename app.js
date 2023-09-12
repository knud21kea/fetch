import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/quiz/html/index.html")
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});
