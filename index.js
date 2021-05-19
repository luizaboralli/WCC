const configExpress = require('./config/configExpress');

app = configExpress(); //versões antigas do node precisa declarar o app como variavel

app.listen(3000, () => console.log('servidor rodando na porta 3000'));

