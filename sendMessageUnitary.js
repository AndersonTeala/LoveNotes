const { create } = require('whatsapp-node');

const client = create();

const numbers = process.env.PHONE_NUMBERS.split(',');
const message = process.env.MESSAGE;

for (const number of numbers) {
  client.sendMessage(number, message);
}
