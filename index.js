let participantes =  [
  {
  nome:'Bruno Kerschner',
  email:'bkdev@gmail.com',
  dataInscricao: new Date(2024, 11, 22, 19, 20),
  dataCheckIn: null,
  },
  {
    nome: 'Maria Silva',
    email: 'maria.silva@example.com',
    dataInscricao: new Date(2024, 3, 10, 14, 30),
    dataCheckIn: new Date(2024, 3, 15, 10, 45),
  },
  {
    nome: 'João Souza',
    email: 'joao.souza@example.com',
    dataInscricao: new Date(2024, 2, 5, 10, 0),
    dataCheckIn: new Date(2024, 2, 10, 9, 15),
  },
  {
    nome: 'Ana Santos',
    email: 'ana.santos@example.com',
    dataInscricao: new Date(2024, 4, 18, 16, 45),
    dataCheckIn: new Date(2024, 4, 23, 13, 20),
  },
  {
    nome: 'Pedro Oliveira',
    email: 'pedro.oliveira@example.com',
    dataInscricao: new Date(2024, 6, 3, 11, 10),
    dataCheckIn: null,
  },
  {
    nome: 'Carla Mendes',
    email: 'carla.mendes@example.com',
    dataInscricao: new Date(2024, 8, 9, 9, 5),
    dataCheckIn: new Date(2024, 8, 14, 14, 30),
  },
  {
    nome: 'Luiz Costa',
    email: 'luiz.costa@example.com',
    dataInscricao: new Date(2024, 7, 15, 13, 20),
    dataCheckIn: null,
  },
  {
    nome: 'Fernanda Lima',
    email: 'fernanda.lima@example.com',
    dataInscricao: new Date(2024, 10, 29, 17, 50),
    dataCheckIn: new Date(2024, 11, 3, 9, 45),
  },
  {
    nome: 'Ricardo Almeida',
    email: 'ricardo.almeida@example.com',
    dataInscricao: new Date(2024, 1, 7, 8, 15),
    dataCheckIn: null,
  },
  {
    nome: 'Camila Gonçalves',
    email: 'camila.goncalves@example.com',
    dataInscricao: new Date(2024, 0, 23, 12, 40),
    dataCheckIn: null,
  }
]

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to (participante.dataInscricao)
  let dataCheckIn = dayjs(Date.now()).to (participante.dataCheckIn)

  if(participante.dataCheckIn == null){
    dataCheckIn = `
      <button 
      data-email="${participante.email}"
      onclick="fazerCheckIn(event)">
      Confirmar Check-In
      </button>
    `
  }

  return `
    <tr>
      <td>
        <strong>
        ${participante.nome}
        </strog> 
        <br>
        <small>
        ${participante.email}
        </small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>
  `
}


const atualizarLista = (participantes) => {
  let output = ""
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }
  //substituir informação html
  document.querySelector('tbody').innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
   nome:dadosDoFormulario.get("nome"),
   email:dadosDoFormulario.get("email"),
   dataInscricao: new Date(),
   dataCheckIn: null
  }

 participantes = [participante, ...participantes]
 atualizarLista(participantes)

 event.target.querySelector('[name="nome"]').value = ""
 event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })
  participante.dataCheckIn = new Date()

  atualizarLista(participantes)
}