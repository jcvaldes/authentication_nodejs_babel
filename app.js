import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import db from './models'
const app = express()

// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const node_env = process.env.NODE_ENV || 'development'
const port = +process.env.PORT || 3000
//cors
app.use(cors())


app.get('/', (req, res) => {
  res.send('API resto Ok!')
})

//Conexion a DB por Sequelize
db.sequelize
  .sync()
  .then((data) => {
    console.log('DB connection has been established successfully: \x1b[32m%s\x1b[0m', 'online');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const server = app.listen(port, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log(
      `Express server corriendo en el port ${port}: \x1b[32m%s\x1b[0m`,
      'online'
    )
  }
})