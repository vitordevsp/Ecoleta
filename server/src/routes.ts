import express from 'express'
import path from 'path'
import Knex from './database/connection'

const routes = express.Router()

// rota para as imagens dos items
routes.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

// items 
routes.get('/items', async (req, res) => {
    const items = await Knex('items').select('*')

    const serializedItems = items.map(item => ({
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`
    }))

    return res.json(serializedItems)
})

export default routes
