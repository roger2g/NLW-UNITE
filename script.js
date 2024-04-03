let participantes = [
    {
      nome: "Diego Fernandes",
      email: "diego@gmail.com",
      dataInscricao: new Date(2024, 2, 1, 19, 23),
      dataCheckIn: new Date(2024, 2, 1, 20, 20),
    },
    {
      nome: "Mayk Brito",
      email: "mayk@gmail.com",
      dataInscricao: new Date(2024, 1, 1, 19, 23),
      dataCheckIn: new Date(2024, 1, 5, 20, 20),
    },
    {
      nome: "Laura Santos",
      email: "laura@gmail.com",
      dataInscricao: new Date(2024, 0, 15, 14, 30),
      dataCheckIn: new Date(2024, 0, 15, 15, 0),
    },
    {
      nome: "José Silva",
      email: "jose@gmail.com",
      dataInscricao: new Date(2024, 3, 20, 10, 0),
      dataCheckIn: new Date(2024, 3, 20, 11, 30),
    },
    {
      nome: "Ana Oliveira",
      email: "ana@gmail.com",
      dataInscricao: new Date(2024, 2, 5, 8, 45),
      dataCheckIn: new Date(2024, 2, 5, 9, 15),
    },
    {
      nome: "Lucas Souza",
      email: "lucas@gmail.com",
      dataInscricao: new Date(2024, 3, 1, 17, 0),
      dataCheckIn: new Date(2024, 3, 1, 17, 30),
    },
    {
      nome: "Mariana Lima",
      email: "mariana@gmail.com",
      dataInscricao: new Date(2024, 0, 10, 11, 0),
      dataCheckIn: new Date(2024, 0, 10, 11, 30),
    },
    {
      nome: "Carlos Mendes",
      email: "carlos@gmail.com",
      dataInscricao: new Date(2024, 2, 10, 16, 0),
      dataCheckIn: new Date(2024, 2, 10, 16, 30),
    },
    {
      nome: "Fernanda Costa",
      email: "fernanda@gmail.com",
      dataInscricao: new Date(2024, 1, 20, 9, 0),
      dataCheckIn: new Date(2024, 1, 20, 9, 30),
    },
    {
      nome: "Rafaela Santos",
      email: "rafaela@gmail.com",
      dataInscricao: new Date(2024, 3, 5, 13, 0),
      dataCheckIn: new Date(2024, 3, 5, 13, 30),
    },
];

// Arrow fucntion 
let criaNovoParticipante = (participante) => {
  let dataInscricao = dayjs(Date.now()).to(participante.dataInscricao);  
  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn);
  return `
    <tr>
      <td>
        <strong>${participante.nome}</strong>
        <br>
        <small>${participante.email}</small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>
  `
}

let atualizaLista = (participantes) => {
    let output = ""

    for(let participante of participantes){
        output = output + criaNovoParticipante(participante)
    }

    document.querySelector('tbody').innerHTML = output 
}

atualizaLista(participantes)