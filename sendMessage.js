const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
require('dotenv').config()

const MENSAGENS_FILE_PATH = './mensagens.json';

const client = new Client({
  authStrategy: new LocalAuth()
})

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('authenticated', (session) => console.log(`Autenticado`))

client.on('ready', () => {
  console.log('O LoveNotes está pronto Não esquece da estrelinha no repo ⭐ by: Anderson Teala ☕👨🏻‍💻');
  enviarMensagemAleatoria(); // Iniciar o envio de mensagens aleatórias
});

client.initialize();

let arrayMensagensBonitas = [];

if (fs.existsSync(MENSAGENS_FILE_PATH)) {
  arrayMensagensBonitas = require(MENSAGENS_FILE_PATH);
}

let mensagensEnviadas = [];

const enviarMensagemAleatoria = () => {
  setInterval(() => {
    // Verificar se todas as mensagens foram enviadas
    if (mensagensEnviadas.length === arrayMensagensBonitas.length) {
      console.log("Todas as mensagens foram enviadas.");
      return;
    }

    let mensagemAleatoria;

    do {
      const indiceAleatorio = Math.floor(Math.random() * arrayMensagensBonitas.length);
      mensagemAleatoria = arrayMensagensBonitas[indiceAleatorio];
    } while (mensagensEnviadas.includes(mensagemAleatoria)); // Verificar se a mensagem já foi enviada

    mensagensEnviadas.push(mensagemAleatoria); // Adicionar a mensagem enviada ao array

    try {
      // Enviar a mensagem para o número desejado
      client.sendMessage(process.env.PHONE_NUMBER, mensagemAleatoria);
      console.log(`Mensagem enviada: ${mensagemAleatoria}`);
    } catch (error) {
      console.log(error);
    }
  }, process.env.TIME_INTERVAL);
};