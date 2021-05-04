import express from 'express'
import bodyParser from 'body-parser'
import { createUser, getUser } from './controllers/usersController'
import { createItem, deleteItem, getAllItems, getItem, updateItem } from './controllers/itemsController'
import { createItemRecords } from './controllers/itemsRecordsController'


const app = express()
app.use(express.json())
app.use(bodyParser.json())

app.route('/')
  .get((req, res) => {
    res.send('welcome to daily item insights!')
  })
  .post(createUser)

app.route('/:user')
  .get(getUser)

app.route(':user/items')
  .get(getAllItems)
  .post(createItem)

app.route(':user/items/:id')
  .get(getItem)
  .delete(deleteItem)
  .patch(updateItem)

app.route(':user/items/:id/record')
  .post(createItemRecords)


app.listen(3000)
