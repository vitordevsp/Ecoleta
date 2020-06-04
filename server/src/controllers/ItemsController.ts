import { Request, Response } from 'express'
import knex from '../database/connection'

class ItemsController {
    async index(req: Request, res: Response) {
        const items = await knex('items').select('*')

        const serializedItems = items.map(item => {
            const { id, title, image } = item
            const image_url = `http://localhost:3333/uploads/${image}`

            return { id, title, image_url }
        })

        return res.json(serializedItems)
    }
}

export default ItemsController