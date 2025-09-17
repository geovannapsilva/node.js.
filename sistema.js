// ===== IMPORTANDO MÓDULOS =====
// Linha 1: Importar o módulo 'os' (Operating System)
// Este módulo nos dá acesso a informações do sistema operacional
const os = require('os');

// Linha 2: Importar o módulo 'process'
// Este módulo nos dá informações sobre o processo Node.js atual
const process = require('process');


// ===== COLETANDO INFORMAÇÕES =====

// Linha 3: Descobrir qual sistema operacional está rodando
// os.platform() retorna: 'win32' (Windows), 'darwin' (Mac), 'linux' (Linux)
const sistemaOperacional = os.platform();

// Linha 4: Converter o nome técnico para algo mais amigável
let nomeSistema;
if (sistemaOperacional === 'win32') {
    nomeSistema = 'Windows';
} else if (sistemaOperacional === 'darwin') {
    nomeSistema = 'MacOS';
} else if (sistemaOperacional === 'linux') {
    nomeSistema = 'Linux';
} else {
    nomeSistema = 'Sistema Desconhecido';
}

// Linha 5: Descobrir quanta memória RAM o computador tem
// os.totalmem() retorna em bytes, então dividimos por 1024³ para ter GB
const memoriaBytes = os.totalmem();
const memoriaGB = (memoriaBytes / (1024 * 1024 * 1024)).toFixed(2);

// Linha 6: Descobrir quantos processadores (CPUs) existem
// os.cpus() retorna um array, então usamos .length para contar
const numeroCPUs = os.cpus().length;

// Linha 7: Calcular há quanto tempo o computador está ligado
// os.uptime() retorna em segundos, vamos converter para horas e minutos
const tempoLigadoSegundos = os.uptime();
const horas = Math.floor(tempoLigadoSegundos / 3600);
const minutos = Math.floor((tempoLigadoSegundos % 3600) / 60);

// Linha 8: Descobrir o nome do usuário logado
// os.userInfo().username nos dá o nome do usuário atual
const nomeUsuario = os.userInfo().username;


// ===== EXIBINDO OS RESULTADOS =====

// Linha 9: Mostrar um cabeçalho bonito
console.log('\n=== INFORMAÇÕES DO SISTEMA ===\n');

// Linha 10-14: Mostrar cada informação coletada
console.log('📦 Sistema Operacional:', nomeSistema);
console.log('🧠 Memória RAM Total:', memoriaGB, 'GB');
console.log('🧠 Núcleos de Processadores (CPUs):', numeroCPUs);
console.log('⏱️  Tempo Ligado:', horas, 'horas,', minutos, 'minutos');
console.log('👤 Usuário:', nomeUsuario);

// Linha 15: Mensagem final!
console.log('\n✅ Análise concluída com sucesso!!');

