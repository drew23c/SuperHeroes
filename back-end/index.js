const app = require('express')()
const cors = require('cors')
const {superheroes} = require('./superhero')
const port = 3100;

app.use(cors())
app.get('/',(req,res)=>{
    let instuctions ={
        'Welcome':'This is a superhero API',
        'Routes':{
            '/allHeroes' : 'All of the superhereos',
            '/superhero/:hero' : 'Display the hero',
            '/:name/:alias/:power/:symbol' : 'submit a superhero'    
        },
    }
    res.json(instuctions)
})
app.get('/allHeroes', (req,res) =>{
    res.json(superheroes)
})
app.get('/superhero/:symbol', (req,res)=>{
    let {symbol} = req.params
    superheroes.push(symbol)
    res.json({'added hero': symbol})
})
app.listen(port)