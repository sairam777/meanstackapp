var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://sairam:sairam@ds113680.mlab.com:13680/sairam')

router.get('/tasks', function(req, res) {
    db.tasks.find(function(err, tasks) {
        if (err) {
            res.send(err)
        } else
            res.json(tasks);

    });
});

//getting single id

router.get('/task/:id', function(req, res) {
    db.tasks.findOne({ _id: mongojs.ObjectId(req.params.id) }, function(err, task) {
        if (err) {
            res.send(err)
        } else
            res.json(task);

    });
});


//post data

router.post('/task', function(req, res) {
    var task = req.body;
    if (!task.name || !(task.email + '')) {
        res.status(400);
        res.json({
            "error": "Bad  data"
        });
    } else {
        db.tasks.save(task, function(err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }
});

//remove data

router.delete('/task/:id', function(req, res) {
    db.tasks.remove({ _id: mongojs.ObjectId(req.params.id) }, function(err, task) {
        if (err) {
            res.send(err)
        } else
            res.json(task);

    });
});


//update data

router.put('/task/:id', function(req, res) {
    var task = req.body;
    var updTask = {};

    if (task.name) {
        updTask.name = task.name;
    }

    if (task.email) {
        updTask.email = task.email;
    }

    if (!updTask) {
        res.send(400);
        res.json({
            "error": "Bad data"
        });

    } else {
        db.tasks.update({ _id: mongojs.ObjectId(req.params.id) }, updTask, {}, function(err, task) {
            if (err) {
                res.send(err)
            } else
                res.json(task);
        });
    }

});

module.exports = router;