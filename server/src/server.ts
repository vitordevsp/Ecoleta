import express from 'express'
import cors from 'cors'
import path from 'path'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

// rota para as imagens dos items
routes.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333, () => console.log('> Rodando na porta: 3333'))
