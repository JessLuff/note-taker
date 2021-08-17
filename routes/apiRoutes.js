


// ROUTING

module.exports = (app, fs) => {

  var uniqid = require('uniqid');

  const noteData = require('../db/db.json');

  app.get('/api/notes', (req, res) => {
    fs.readFile(noteData, 'utf8', (err, notes) =>{

      if (err) {
        throw err;
      }
      //res.send(JSON.parse(notes));
      res.json(noteData);
    })
  });

  app.post('/api/notes', (req, res) => {

    var id = uniqid;
    fs.writeFile(noteData, [req.body, id], 'utf8', err =>{

      if (err) {
        throw err;
      }
      //res.send(JSON.parse(noteData));
      res.json(noteData);
    })
  });

  /*
  app.post('/api/notes/${id}', (req, res) => {
    // Empty out the arrays of data
    noteData.length = 0;

    res.json({ ok: true });
  }); */
};
