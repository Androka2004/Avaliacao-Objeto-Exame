import Exams from './exame.js'

const prova = new Exams(['a','b','c','d','a'])

prova.add(['a','b','d','b','a'])
prova.add(['a','b','c','d','b'])
prova.add(['a','b','c','d','a'])
prova.add(['d','a','b','c','d'])
prova.add(['a','d','a','b','c'])

console.log('\nLista de notas registradas: ',prova.getExams())
console.log('\n\nNotas iguais ou maiores do que 7: ',prova.gt(7))
console.log('\nNotas Menores ou iguais a 7:', prova.lt(7))
console.log('\nMenor nota registrada: ', prova.min())
console.log('\nMaior nota registrada: ', prova.max())
console.log('\nMédia geral da turma: ', prova.avg())