import express from "express";
import mongoose from "mongoose";
import Pokemon from "./model/Pokemon.js";

const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://sarfeher:Toyotacorolla20201.8@sarfeher.hft4jys.mongodb.net/pokemon")



app.get('/api/pokemon/:id', async (req, res) =>{
    const pokemon = await Pokemon.findById(req.params.id);

    res.json(pokemon)
})

app.get("api/ranch", (res,req)=>{
    const pokemon = Pokemon.find({})

})







app.get('/api/fight', async (req, res) =>{
    const pokeArray = await Pokemon.find({});
  /*   res.json(pokeArray); */
    res.status(200).json(pokeArray)
});
app.post('/api/pokemon/fight/add',async (req, res)=>{
    const name = req.body.name;
    const nickname = "";
    const front = req.body.front;
    const back = req.body.back;
    const hp = req.body.hp;
    const attack = req.body.attack;
    const defence = req.body.defence;
    const xp = req.body.xp;
    const newPoke = new Pokemon({
        name,
        nickname,
        front,
        back,
        hp,
        attack,
        defence,
        xp,
    });
    await newPoke.save()
   res.status(500).json({success: false})
})
app.patch('/api/pokemon/fight/exp',(req, res)=>{
    const extraXP = req.body.extraXP;
    Pokemon.findOneAndUpdate(
        { _id: req.body._id },
        { xp: xp + extraXP },
        { new: true, runValidators: true },  
        )
})



app.get('/api/pokemon/:id', async (req, res) =>{
   
    const pokemon = await Pokemon.findById(req.params.id);
    res.status(200).json(pokemon)
})

app.patch('/api/pokemon/:id', async (req, res) => {
    const pokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.status(200).json(pokemon)
})


app.listen(3000, () => {
    console.log('Im in! Open this link: http://127.0.0.1:3000');
})