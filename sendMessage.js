const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
require('dotenv').config();

const MENSAGENS_FILE_PATH = './mensagens.json';

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('authenticated', (session) => console.log(`Autenticado`));

client.on('ready', () => {
  console.log('O LoveNotes está pronto. Não esqueça da estrelinha no repo ⭐ by: Anderson Teala ☕👨🏻‍💻');
  enviarMensagem(); // Enviar a mensagem para os números especificados
});

client.initialize();

let MensagensBonitas = ['Sua mensagem fixa aqui'];

const phoneNumbers = process.env.PHONE_NUMBERS.split(',');

const enviarMensagem = () => {
  phoneNumbers.forEach(async (phoneNumber) => {
    try {
      // Enviar a mensagem para o número desejado
      await client.sendMessage(phoneNumber, MensagensBonitas[0]); // Envie a única mensagem definida
      console.log(`Mensagem enviada para ${phoneNumber}: ${MensagensBonitas[0]}`);
    } catch (error) {
      console.log(`Erro ao enviar mensagem para ${phoneNumber}:`, error);
    }
  });
};
