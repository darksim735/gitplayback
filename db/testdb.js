// Wrote to testing looking for error

var fs = require("fs");
var chokidar = require('chokidar');

// var sqlite3 = require("sqlite3").verbose();
// var db = new sqlite3.Database(file);

var models = require('./models'),
    Author = models.Author,
    Keyframe = models.Keyframe,
    Repo = models.Repo;

console.log("something ran");

  // Watches from db for now as root
  // Fix for later - whole gitplayback directory
  chokidar.watch(__dirname, {ignored: '*.db', ignoreInitial: true}).on('all', function(event, path) {
    // console.log(event, path);
    readFile(event, path); 
  });

function readFile (event, filepath) {
  fs.readFile(filepath, "utf-8", function(err, text) {

    // fyi: if I understand correctly, sequelize will pluralize the model to become the table name. We can shut this off if you guys prefer.
    Keyframe
      .create({
        filename: filepath,
        text_state: text,
        event_type: event,
        last_commit: "test commit text",
        prev_keyframe: "prev keyframe placeholder",
        next_keyframe: "next keyframe placeholder",
        branch_name: "git branch placeholder"
      })
      .then(function(keyframe) {
        console.log("keyframe create successful: ");
      }).catch(function(err) {
        console.log("keyframe create error: ", err);
      });

  });


// No crappy logs!!! *smiley*