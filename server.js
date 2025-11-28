import express from 'express'

const app = express()
app.use(express.json())

const usuarios = [  {
    nome: "Ricardo",
    matricula: "2510138",
    nomeDaMae: "Segredo",
    Sexo: 1,
    Turno: 3
  },
  {
    nome: "Tiruleibe",
    matricula: "7777999",
    nomeDaMae: "Tralaleiro",
    Sexo: 1,
    Turno: 2
  }]

app.post('/alunos',(req, res)=> {
    console.log(req.body)
    usuarios.push(req.body)
    res.status(201).send(req.body)
})

app.get('/alunos',(req, res)=> {
    res.status(200).json(usuarios)
})

app.delete('/alunos', (req,res)=> {
    const deleteMatricula = req.body.matricula
    const usuariod = usuarios.findIndex(aluno => aluno.matricula==deleteMatricula)
    res.status(200).json(usuarios[usuariod].nome)
    usuarios.splice(InputDeviceInfo, usuariod)

})
    




app.listen(3000)



/*
app.put('/alunos')

*/