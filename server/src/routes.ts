import express from 'express'
import path from 'path'

const routes = express.Router()

// rota para as imagens dos items
routes.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

export default routes
