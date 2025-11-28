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
    let novoUsuarios = usuarios
    if(usuariod != -1){
        usuarios.splice(usuariod, 1)
    }
    
    res.status(200).json(usuarios)

})
    
app.put('/alunos',(req,res)=>{
    const atualizaMatricula = req.body.matricula
    const usuarioAt = usuarios.findIndex(aluno => aluno.matricula==atualizaMatricula)
    
    if(usuarioAt != -1){
      usuarios[usuarioAt].nome = req.body.nome
      usuarios[usuarioAt].nomeDaMae = req.body.nomeDaMae
      usuarios[usuarioAt].Sexo = req.body.Sexo
      usuarios[usuarioAt].Turno = req.body.Turno
    }
  
    res.status(200).json(usuarios)

})



app.listen(3000)
