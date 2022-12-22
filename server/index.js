const express = require("express")
const mongoose = require('mongoose');
const { Gratitude, Affirmation, Step, User } = require('./models/Logs')

const cors = require('cors');

const app= express();
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/journalDB", {
    useNewUrlParser: true, 
    useUnifiedTopology:true
})
    .then(() => console.log("Connected to DB"))
    .catch(console.error);




// API for getting all the records from the todo collection (Todo model) in the mern-todo database

app.get('/gratitudes', async (req, res) => { 

    Gratitude.find({}, (err, result) => {
        if (err) {
            console.log(err.message);
        } else {
            res.json(result);
        }
    });

});


app.get('/affirmations', async (req, res) => { 

    Affirmation.find({}, (err, result) => {
        if (err) {
            console.log(err.message);
        } else {
            res.json(result);
        }
    });

});


app.get('/steps', async (req, res) => { 

    Step.find({}, (err, result) => {
        if (err) {
            console.log(err.message);
        } else {
            res.json(result);
        }
    });

});

app.get('/users', async (req, res) => { 

    User.find({}, (err, result) => {
        if (err) {
            console.log(err.message);
        } else {
            res.json(result);
        }
    });

});


// app.post("/authenticate", async (req,res) => {
//     const email = req.body.email;
//     const password = req.body.password;

//     await User.findOne({email:email}, (err, foundUser){
//         if (err) {
//             console.log();
//         } else {
//             if (foundUser) {
//                 if (foundUser.password === password) {
//                     console.log("the check has passed!")
//                 }
//             }
//         }
//     })
// })













// API for creating the records in the todo collection (Todo model) in the mern-todo database


app.post('/gratitude/new', (req, res) => {
    const gratitude = new Gratitude ({
        gratitude: req.body.gratitude
    });
    gratitude.save();
    res.json(gratitude);
});





app.post('/affirmation/new', (req, res) => {
    const affirmation = new Affirmation ({
        affirmation: req.body.affirmation
    });
    affirmation.save();
    res.json(affirmation);
});


app.post('/step/new', (req, res) => {
    const step = new Step ({
        step: req.body.step
    });
    step.save();
    res.json(step);
});


app.post('/user/new', (req, res) => {
    const user = new User ({
        fname:  req.body.fname,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword
    });
    user.save();
    res.json(user);
    
});




// API for deleting the record in the todo collection (Todo model) in the mern-todo database

app.delete('/gratitude/delete/:id', async (req,res) => {
    const result = await Gratitude.findByIdAndDelete(req.params.id);
    res.json(result);

});


app.delete('/affirmation/delete/:id', async (req,res) => {

    const result = await Affirmation.findByIdAndDelete(req.params.id);

    res.json(result);

});


app.delete('/step/delete/:id', async (req,res) => {

    const result = await Step.findByIdAndDelete(req.params.id);

    res.json(result);

});


// API for updating the record in the todo collection (Todo model) in the mern-todo database
app.put("/gratitude/update/:id", async (req,res) => {
    const result = await Gratitude.findById(req.params.id);
    result.gratitude = req.body.gratitude;
    result.save();
    res.json(result);
})




app.put("/affirmation/update/:id", async (req,res) => {
    const result = await Affirmation.findById(req.params.id);
    result.affirmation = req.body.affirmation;
    result.save();
    res.json(result);
})




app.put("/step/update/:id", async (req,res) => {
    const NewStep = req.body.step;
    const result = await Step.findById(req.params.id);
    result.step = NewStep;
    result.save();
    res.json(result);
})




app.listen(3001, () => {
    console.log("Server runs on the port 3001");
});
