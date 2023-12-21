const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const fs = require("fs");
require("dotenv").config();

const MENSAGENS_FILE_PATH = "./mensagens.json";

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("authenticated", (session) => console.log(`Autenticado`));

client.on("ready", () => {
  console.log(
    "O LoveNotes está pronto. Não esqueça da estrelinha no repo ⭐ by: Anderson Teala ☕👨🏻‍💻"
  );
  enviarMensagem();
});

client.initialize();

let menssage = "Sua mensagem fixa aqui!";
const phones = "5511920181383,5511984627070";
const phoneNumbers = phones.split(",");

const enviarMensagem = () => {
  phoneNumbers.forEach(async (phoneNumber) => {
    try {
      await client.enviarMensagem(phoneNumber, menssage); 
      console.log(
        `Mensagem enviada para ${phoneNumber}: ${menssage}`
      );
    } catch (error) {
      console.log(`Erro ao enviar mensagem para ${phoneNumber}:`, error);
    }
  });
};
