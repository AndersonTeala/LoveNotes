const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const path = require('path');
const { MessageMedia } = require('whatsapp-web.js');
require('dotenv').config();

const MENSAGENS_FILE_PATH = './mensagens.json';
const IMAGES_FOLDER_PATH = './images';

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('authenticated', (session) => console.log(`Autenticado`));

client.on('ready', () => {
  console.log('O LoveNotes está pronto. Não esqueça da estrelinha no repo ⭐ by: Anderson Teala ☕👨🏻‍💻');
  enviarMensagemComImagemAleatoria(); // Iniciar o envio de mensagens com imagens aleatórias
});

client.initialize();

let arrayMensagensBonitas = [];
let arrayImagens = [];

if (fs.existsSync(MENSAGENS_FILE_PATH)) {
  arrayMensagensBonitas = require(MENSAGENS_FILE_PATH);
}

if (fs.existsSync(IMAGES_FOLDER_PATH)) {
  arrayImagens = fs.readdirSync(IMAGES_FOLDER_PATH);
}

let mensagensEnviadas = [];

const enviarMensagemComImagemAleatoria = () => {
  setInterval(() => {
    // Verificar se todas as mensagens foram enviadas
    if (mensagensEnviadas.length === arrayMensagensBonitas.length) {
      console.log('Todas as mensagens foram enviadas.');
      return;
    }

    let mensagemAleatoria;
    let imagemAleatoria;

    do {
      const indiceMensagemAleatoria = Math.floor(Math.random() * arrayMensagensBonitas.length);
      mensagemAleatoria = arrayMensagensBonitas[indiceMensagemAleatoria];
    } while (mensagensEnviadas.includes(mensagemAleatoria));

    mensagensEnviadas.push(mensagemAleatoria);

    try {
      // Enviar a mensagem para o número desejado
      let media = null;

      // Verificar se há imagens disponíveis
      if (arrayImagens.length > 0) {
        const indiceImagemAleatoria = Math.floor(Math.random() * arrayImagens.length);
        imagemAleatoria = arrayImagens[indiceImagemAleatoria];
        const imagePath = path.join(IMAGES_FOLDER_PATH, imagemAleatoria);
        media = MessageMedia.fromFilePath(imagePath);
      }

      client.sendMessage(process.env.PHONE_NUMBER, mensagemAleatoria, { media });
      console.log(`Mensagem enviada: ${mensagemAleatoria}`);
      if (imagemAleatoria) {
        console.log(`Imagem enviada: ${imagemAleatoria}`);
      }
    } catch (error) {
      console.log(error);
    }
  }, process.env.TIME_INTERVAL);
};
