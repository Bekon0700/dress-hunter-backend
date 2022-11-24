const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const userRouter = require('./routes/userRoute')
const productRouter = require('./routes/productRoute')

const app = express()

app.use(cors())

app.use(express.json({ limit: '10kb' }))
app.use(morgan('dev'))


app.get('/', (req, res) => {
    res.send('Server is running, ok &#128528')
})

app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);


module.exports = app