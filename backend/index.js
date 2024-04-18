const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const studentRoutes = require('./routes/studentRoutes');

const app = express();

// mongo connect 
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`Sunucu http://localhost:${process.env.PORT} adresinde çalışıyor`);
      });
})
.catch((error)=>{
console.log(error)
})

app.use(cors());
app.use(express.json());

app.use('/students', studentRoutes);



