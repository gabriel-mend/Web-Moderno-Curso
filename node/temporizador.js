const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 8 * * 2', function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})
setTimeout(function() {
    tarefa1cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 7)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa2!', new Date().getSeconds())
})