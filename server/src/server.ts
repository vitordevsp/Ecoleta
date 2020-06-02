import express from 'express'

const app = express()

app.get('/users', (req, res) => {
    res.json(['vitor', 'diego', 'thomas', 'bruno2'])
})

app.listen(3333, () => console.log('> Rodando na porta: 3333'))
