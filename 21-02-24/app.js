const express = require("express");
const fs = require("fs");

const app = express();

const allArticlesJson = JSON.parse(fs.readFileSync("./data.json"));

app.use(express.static("public"));

//Index:
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//All articles
app.get("/api/v1/articles", (req, res) => {
  res.status(200).json({
    status: "success",
    count: allArticlesJson.length,
    data: {
      article: allArticlesJson,
    },
  });
});

//Selection of Specific Fields : title, price
app.get("/api/v2/articles", (req, res) => {
  const fields = allArticlesJson.map((el) => {
    const { title, price } = el;
    return { title, price };
  });

  res.status(200).json({
    status: "success",
    count: allArticlesJson.length,
    data: {
      article: fields,
    },
  });
});

//Routes Id / id is optional:
app.get("/api/v1/articles/:id?", (req, res) => {
  let id = +req.params.id;
  let matchId = allArticlesJson.find((el) => el.id === id);

  if (!matchId) {
    res.status(404).send(`Id: ${id} not found`);
  }

  res.status(200).json({
    status: "success",
    data: {
      article: matchId,
    },
  });
});

//Filter-search:
app.get("/api/v3/articles", (req, res) => {
  const { search } = req.query;

  const matchSearch = allArticlesJson.filter((el) =>
    el.title.toLowerCase().startsWith(search.toLowerCase())
  );

  if (matchSearch.length === 0) {
    return res.status(404).json({
      status: "error",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      article: matchSearch,
    },
  });
  console.log(search);
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log("start server");
});
