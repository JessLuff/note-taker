
const noteData = require('../db/db.json');

// ROUTING

module.exports = (app) => {

  app.get('/api/notes', (req, res) => {
    res.json(noteData);
  });

  app.post('/api/notes', (req, res) => {
    console.log(req.body.title);

      noteData.push(req.body);
      res.json(noteData);
  });

  /*
  app.post('/api/notes/${id}', (req, res) => {
    // Empty out the arrays of data
    noteData.length = 0;

    res.json({ ok: true });
  }); */
};
