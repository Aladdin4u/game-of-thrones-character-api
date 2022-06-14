const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000;

app.use(cors())

const houses = [
  {
  code: "ST",
  name: "stark",
  character: ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"]
  },
  {
  code: "LA",
  name: "lannister",
  character: ["Tywin", "Cersei", "Jaime", "Tyrion"]
  },
  {
  code: "BA",
  name: "baratheon",
  character: ["Robert", "Stannis", "Renly"]
  },
  {
  code: "TA",
  name: "targaryen",
  character: ["Aerys", "Daenerys", "Viserys"]
  }
]

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index')
    console.log('Homepage is running')
})

app.get('/api/houses/:name', (req, res) => {
    const name = req.params.name.toLowerCase()
    const house = houses.find(house => house.name === name)
    res.json(house)
    // console.log(house)
    if (house) {
        res.json(house)
    } else {
        res.status(404).json({
            "code": "unknown",
            "name": "unknown",
            "character": "unknown"
        })
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('server is running on port 8000')
})