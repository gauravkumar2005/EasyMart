import express from "express";

const app = express();

//Routes
app.get('/', (req, res) => {
    res.send('EasyMart Backend Running');
});

//Middleware
app.use((req, res) => {
   console.log("request received");
   let code ="<h1>Fruits</h1>";
   res.send(code);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
});

