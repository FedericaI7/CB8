const auth = (req, res, next) => {
  const { user } = req.query;
  console.log(req.query);
  if (user === "admin") {
    res.send(`Benvenuto ${user} sei collegato nella tua pagina admin`);
  } else {
    res.send(
      `Mi dispiace, ${user}, ma non hai accesso alla pagina admin, devi registrarti`
    );
  }

  next();
};

module.exports = auth;
