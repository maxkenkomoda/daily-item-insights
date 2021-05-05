import express from 'express'
import bodyParser from 'body-parser'
import { newUser, showUser } from './controllers/usersController'
import { newItem, showAllItems, showItem } from './controllers/itemsController'
import { createItemRecords } from './controllers/itemsRecordsController'


const app = express()
app.use(express.json())
app.use(bodyParser.json())

app.route('/')
  .get((req, res) => {
    res.send('welcome to daily item insights!')
  })
  .post(newUser)

app.route('/:user')
  .get(showUser)


app.route('/:user/items')
  .get(showAllItems)
  .post(newItem)

app.route('/:user/items/:id')
  .get(showItem)
  // .delete(deleteItem)
  // .patch(updateItem)

app.route('/:user/items/:id/record')
  .post(createItemRecords)


app.listen(3000)
