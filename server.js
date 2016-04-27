var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var Storage = function() { // constructor
    this.items = [];
    this.id = 0;
};

Storage.prototype.add = function(name) { // created a method .add
    var item = {name: name, id: this.id};
    this.items.push(item);
    this.id += 1;
    return item;
};
// create prototype that deletes items from array
// this.items.splice(index of item that we wish to delete(must be dynamic), how many items we want deleted from array)


Storage.prototype.delete = function (id){ //created a delete method
    for (var arrayIndex in this.items) { //created a for in loop that loops through the this.items array
        if (id === this.items[arrayIndex].id){
            this.items.splice(arrayIndex, 1);
        }
        //console.log(this.items[arrayIndex].id); //logging the id arrayIndex of the object in the this.items array
    }
};

for (var i = 0; i < this.items.length; i++)


var storage = new Storage();
storage.add('Broad beans');
storage.add('Tomatoes');
storage.add('Peppers');
storage.add('Cologne');

storage.delete(2);
console.log(storage);

var app = express();
app.use(express.static('public'));

app.get('/items', function(req, res) {
    res.json(storage.items);
});
app.post('/items', jsonParser, function(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    var item = storage.add(req.body.name);
    res.status(201).json(item);
});

/* app.delete('/items/:id', jsonParser, function(req, res) {

    var itemID = req.params.id;
    if(!req.)
});
*/

app.listen(process.env.PORT || 8080);
