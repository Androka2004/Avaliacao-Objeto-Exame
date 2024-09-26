class Exams {
  #weights
  #answers
  #exams = []

  // Construtor do objeto
  constructor(answers, weights = [2,2,2,2,2]){
    this.#weights = weights
    this.#answers = answers
  }

  // Função que calcula nota de uma lista de respostas e armazena a nota
  add(exam){
    let temp = 0
    // Compara a str naquele index do exame inserido, com a str de mesmo index no array de respostas corretas
    for (let i = 0; i < this.#answers.length; i++){
      if (exam[i] == this.#answers[i]){
        temp += this.#weights[i]
      }
    }
    this.#exams.push(temp)
  }

  //Retorna o array que armazena as notas salvas
  getExams(){
    return this.#exams
  }

  // Gera um array com as notas maiores do que a inserida
  gt(valor){
    let result = []
    // Percorre o Array de notas armazenadas para comparar com o valor vindo de fora
    for (const nota of this.#exams){
      if (nota >= valor){
        result.push(nota)
      }
    }
    return result.sort()
  }  

  // Gera array de notas menores
  lt(valor){
    let result = []
    for (const nota of this.#exams){
      if (nota <= valor){
        result.push(nota)
      }
    }
    return result.sort()
  }

  // Em vez de array, a variavel result só armazena 1 valor, que é a menor nota registrada
  min(){
    let result = 999
    for (const nota of this.#exams){
      if (nota < result){
        result = nota
      }
    }
    return result
  }

  // Retorna a maior nota registrada
  max(){
    let result = 0
    for (const nota of this.#exams){
      if (nota > result){
        result = nota
      }
    }
    return result
  }

  // Usa o método reduce para somar todos os valores do array de notas, depois divide pelo tamanho do mesmo array
  avg(){
    let sum = this.#exams.reduce((addition, value) => addition + value, 0);
    return sum / this.#exams.length
  }
}

export default Exams