import express from 'express'
import path from 'path'
import knex from './database/connection'

const routes = express.Router()

// rota para as imagens dos items
routes.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

// items 
routes.get('/items', async (req, res) => {
    const items = await knex('items').select('*')

    const serializedItems = items.map(item => {
        const { id, title, image } = item
        const image_url = `http://localhost:3333/uploads/${image}`

        return { id, title, image_url }
    })

    return res.json(serializedItems)
})

// points
routes.post('/points', async (req, res) => {
    const { name, email, whatsapp, latitude, longitude, city, uf, items } = req.body

    // caso um insert falhe o outro não executa, pois os dois estão vinculados
    const trx = await knex.transaction()

    const insertedIds = await trx('points').insert({
        image: 'image-fake',
        name, email, whatsapp, latitude, longitude, city, uf,
    })

    const point_id = insertedIds[0]

    const pointItems = items.map((item_id: number) => ({
        item_id,
        point_id
    }))

    await trx('point_items').insert(pointItems)

    return res.json({ success: true })
})

export default routes
