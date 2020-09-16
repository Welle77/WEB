const createNice = async (col) => {
  let personDocument = {
    name: { first: "Alan", last: "Turing" },
    birth: new Date(1912, 5, 23), // June 23, 1912
    death: new Date(1954, 5, 7), // June 7, 1954
    contribs: ["Turing machine", "Turing test", "Turingery"],
    views: 1250000,
  };

  // Insert a single document, wait for promise so we can read it back
  return await col.insertOne(personDocument);
};

module.exports = { createNice };
