import express from 'express'
import bodyParser from 'body-parser'
import { newUser, showUser } from './controllers/usersController'
import { newItem, newItemsRecord, showAllItems, showItem } from './controllers/itemsController'


const app = express()
app.use(express.json())
app.use(bodyParser.json())

app.route('/')
  .get((req, res) => {
    res.send('welcome to daily item insights!')
  })


app.route('/:user')
  .get(showUser)
  .post(newUser)


app.route('/:user/items')
  .get(showAllItems)
  .post(newItem)

app.route('/:user/items/:id')
  .get(showItem)
  .post(newItemsRecord)
  // .delete(deleteItem)
  // .patch(updateItem)



app.listen(3000)
