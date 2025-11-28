import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

//const prisma = new PrismaClient()

const app = express()
app.use(express.json())

//const usuarios = []

app.post('/alunos', async (req, res)=> {
    //console.log(req.body)
    const novoAluno = await Prisma.user.create({
        data: {
            nome:   req.body.nome,
            matricula:  req.body.matricula,
            nomeDaMae:  req.body.nomeDaMae,
            sexo:   req.body.sexo,     
            turno:  req.body.turno        
        }
    })
    //usuarios.push(req.body)
    res.status(201).send(req.body)
})

app.get('/alunos', async (req, res)=> {
    const alunos = await Prisma.pAlunos.findMany()
    res.status(200).json(alunos)
})

app.listen(3000)



/*
app.delete('/alunos')
app.put('/alunos')
*/