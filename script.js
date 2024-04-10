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
    dataCheckIn: null,
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
    dataCheckIn: null,
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
    dataCheckIn: null,
  },
  {
    nome: "Rafaela Santos",
    email: "rafaela@gmail.com",
    dataInscricao: new Date(2024, 3, 5, 13, 0),
    dataCheckIn: null,
  },
];

let criaNovoParticipante = (participante) => {
  let dataInscricao = dayjs(Date.now()).to(participante.dataInscricao);  
  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn);
  
  // Verificar se o CheckIn é null 
  if(participante.dataCheckIn == null){
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `
  }
  
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

let adicionarParticipante = (event) => {
  event.preventDefault()

  // Pegar os dados do formulario que está sobre evento "onsubmit"
  let dadosDoFormulario = new FormData(event.target)

  // Objeto que irá receber as informações do forms
  let participante = {
    nome: dadosDoFormulario.get("nome"),
    email: dadosDoFormulario.get("email"),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  // Verifica se o participante existe
  let participanteExiste = participantes.find(
    // Forma quando ele tem que retorna direto um dado
    (p) => p.email == participante.email
  )

  if(participanteExiste) {
    alert("Email já existe")
    return
  }
  
  // Atualiza a lista com a nova informção e com as que já estavam
  // Conceito de "Spread" -> "...participantes"
  participantes = [participante, ...participantes] 
  atualizaLista(participantes)

  // Limpa os dados quando efetua o cadastro
  event.target.querySelector("[name='nome']").value = ""
  event.target.querySelector("[name='email']").value = ""
}

let fazerCheckIn = (event) => {
  // Confirma se realmente quer fazer o Check-in
  let mensagemConfirmacao = "Tem certeza que deseja fazer o check-in"

  if(confirm(mensagemConfirmacao) == false) {
    return
  }

  // Encontrar o participante dentro da lista
  const participante = participantes.find(
    (p) => p.email == event.target.dataset.email
  )

  // Atualizar o check-in do participante
  participante.dataCheckIn = new Date()
  atualizaLista(participantes)
}