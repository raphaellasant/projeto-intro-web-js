const cursos = [
    {
        curso: "HTML e CSS",
        descricao: "?",
        duracao: "1 mês",
        valor: 500
    },
    {
        curso: "JavaScript",
        descricao: "?",
        duracao: "2 meses",
        valor: 900
    },

    {
        curso: "APIs REST",
        descricao: "?",
        duracao: "6 meses",
        valor: 2000
    }
]

///////////////////////////

const turmas = [
    {
        turma: "Hipática",
        curso: "HC1",
        início: "30/11/2022",
        termino: "30/01/2023",
        numeroDeAlunos: 150,
        periodo: "noturno",
        concluida: "false"
    },
    {
        turma: "Sibila",
        curso: "JavaScript",
        início: "30/10/2022",
        termino: "30/12/2023",
        numeroDeAlunos: 200,
        periodo: "integral",
        concluida: "false"

    },
    {
        turma: "Curie",
        curso: "HTML e CSS",
        início: "15/09/2022",
        termino: "15/10/2022",
        numeroDeAlunos: 180,
        periodo: "noturno",
        concluida: "true"

    },
    {
        turma: "Zhenyi",
        curso: "HTML e CSS",
        início: "01/11/2022",
        termino: "01/01/2023",
        numeroDeAlunos: 80,
        periodo: "integral",
        concluida: "false"
    },
    {
        turma: "Clarke",
        curso: "HTML e CSS",
        início: "04/07/2022",
        termino: "04/09/2022",
        numeroDeAlunos: 200,
        periodo: "noturno",
        concluida: "true"

    },
    {
        turma: "Elion",
        curso: "APIsRest",
        início: "12/01/2022",
        termino: "16/06/2022",
        numeroDeAlunos: 200,
        periodo: "noturno",
        concluida: "true"
    },
    {
        turma: "Burnell",
        curso: "APIsRest",
        início: "18/10/2022",
        termino: "18/04/2023",
        numeroDeAlunos: 90,
        periodo: "integral",
        concluida: "false"
    }
]

const estudantes = [
    {
        aluno: "Chris Evans",
        curso: "JavaScript",
        turma: "Hipática",
        formaDePagamento: 9*100,
        desconto:"false"
    },
    {
        aluno: "Halle Berry",
        curso: "APIsRest",
        turma: "Burnell",
        formaDePagamento: 4*500,
        desconto:"false"
    },
    {
        aluno: "Lashana Lynch",
        curso: "HTML e CSS",
        turma: "Zhenyi",
        formaDePagamento: 1,
        desconto:"true"
    }
]
const parcelarCursoDesconto = (carrinhoCursos, parcela) => {
    let valorTotal = 0
    let valorComDesconto = 0
    let desconto20 = 0.2
    let valorParcela = 0
}
    if (carrinhoCursos.length >= 1) {
        switch (carrinhoCursos.length) {
            case 3:
                valorComDesconto = 0.15
                break

            case 2:
                valorComDesconto = 0.10
                break

            default:
                valorComDesconto = 0
                break
        }
for (let valor of carrinhoCursos) {
            valorTotal = valorTotal + valor
        }
    }
    if (parcela <= 2 && carrinhoCursos.length === 3) {
        valorTotal -= valorTotal * (valorComDesconto + desconto20)
        valorParcela = valorTotal / parcela
    
        console.log(`O valor do pagamento é de R${valorTotal}, obteve 15% de desconto por 3 crsos e mais 20% por pagaento avista ou parecelado em até 2x no total de 35%. o valor parcelado fica em  ${parcela} x de R$ ${valorParcela.toFixed}`)
    
    } else if(parcela >= 2 && carrinhoCursos.length === 1){
        valorTotal -= valorTotal * desconto20
        valorParcela = valorTotal / parcela
    
    
        console.log(`O pagamento é de R${valorTotal},00 parcelado em R${parcela}x de R${valorParcela.toFixed(2)}`)

    } else {
        valorParcela = valorTotal / parcela
        console.log(`O pagamento é de R${valorTotal},00 parcelado em R${parcela}x de R${valorParcela.toFixed(2)}`)
    }


parcelarCursoDesconto (carrinhoCursos, 1)
console.log(parcelarCursos, 1)
console.log(parcelarCursoDesconto);

const relatorioEstudante = (nomeEstudante) => {
    const estudante = buscarEstudante(nomeEstudante)
    return `Aluno: ${estudante.estudante}\n Turma:${estudante.turma}\n Curso: ${estudante.curso}\n Valor Total: ${estudante.valor}\n valor parcela ${estudante.Parcelas}\n N° Parcelas ${estudante.nParcelas}`

}
console.log(relatorioEstudante('Lashana Lynch'))


const descontar = (prompt("Escolha uma forma de pagamento:\n 1- Na compra de 3 cursos: 15% de desconto;\n 2- Na compra de 2 cursos: 10% de desconto; \n 3- Para pagamentos a vista e parcelado em 2x, é concedido mais 20% de desconto. "))

switch (descontar) {
    case 1:
        console.log("desconto de 15% adiquirido")
        break
    case 2:
        console.log("desconto de 10% adiquirido")
        break
    case 3:
        console.log("desconto de 20% adiquirido")
        break
        defoult:
        console.log("Escolha uma das opções de pagamentos disponíveis.")
}



  