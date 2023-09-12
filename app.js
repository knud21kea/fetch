import express from 'express';
import path from "path";

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/quiz/html/quiz.html"))
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});
