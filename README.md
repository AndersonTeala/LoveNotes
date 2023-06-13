# LoveNotes

LoveNotes é um script em Node.js que automatiza o envio de mensagens pelo WhatsApp. Com uma lista de mensagens pré-definidas, o script seleciona aleatoriamente uma mensagem que ainda não foi enviada e a envia para um número de telefone específico. Desenvolvido para o dia dos namorados, uma ideia rápida para passar o dia enviando mensagens para minha esposa.

## Funcionalidades

- Personalização do número de envio.
- Personalização do intervalo de envio das mensagens.
- Envio automatizado de mensagens pelo WhatsApp.
- Envio automatizado de mensagens junto com imagens pelo WhatsApp.
- Seleção aleatória de mensagens não enviadas.

## Como usar

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório: `git clone https://github.com/AndersonTeala/LoveNotes.git`
3. Acesse o diretório do projeto: `cd lovenotes`
4. Instale as dependências: `npm install`

### Enviar somente mensagens (sendMessage.js)

5. Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente necessárias, como `PHONE_NUMBER` e `TIME_INTERVAL`.
6. Adicione suas mensagens ao arquivo `mensagens.json`.
7. Execute o script: `node sendMessage.js`
8. Abra o WhatsApp em seu dispositivo móvel e faça login escaneando o código QR gerado.
9. Aguarde o envio automático das mensagens.

### Enviar mensagens com imagens (sendMessageAndImage.js)

5. Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente necessárias, como `PHONE_NUMBER` e `TIME_INTERVAL`.
6. Adicione suas mensagens ao arquivo `mensagens.json`.
7. Coloque suas imagens na pasta `images`.
8. Execute o script: `node sendMessageAndImage.js`
9. Abra o WhatsApp em seu dispositivo móvel e faça login escaneando o código QR gerado.
10. Aguarde o envio automático das mensagens com imagens.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests com melhorias, correções de bugs ou novas funcionalidades.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).
