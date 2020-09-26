const index = (req, res) => {
  res.render("", { title: "Exerciser" });
};

const auth = (req, red) => {};

module.exports = { index, auth };
