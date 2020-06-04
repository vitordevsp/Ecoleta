import { Request, Response } from 'express'
import knex from '../database/connection'

class PointsController {
    async show(req: Request, res: Response) {
        const { id } = req.params

        const point = await knex('points').where('id', id).first()

        if (!point) {
            return res.status(400).json({ message: 'Point not found.' })
        }

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title')

        return res.json({ point, items })
    }

    async create(req: Request, res: Response) {
        const { name, email, whatsapp, latitude, longitude, city, uf, items } = req.body

        // caso um insert falhe o outro não executa, pois os dois estão vinculados
        // const trx = await knex.transaction()

        const point = {
            image: 'image-fake',
            name, email, whatsapp, latitude, longitude, city, uf,
        }

        const insertedIds = await knex('points').insert(point)

        const point_id = insertedIds[0]

        const pointItems = items.map((item_id: number) => ({
            item_id,
            point_id
        }))

        await knex('point_items').insert(pointItems)

        return res.json({ id: point_id, ...point })
    }
}

export default PointsController