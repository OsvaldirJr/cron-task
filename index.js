const express = require('express');
const cron = require('node-cron');
const axios = require('axios');

const app = express();
const port = 3000; // Escolha a porta que desejar

// URL da API de origem dos dados
const sourceApiUrl = 'SUA_URL_DA_API_DE_ORIGEM';
// URL da API de destino onde os dados serão salvos
const destinationApiUrl = 'SUA_URL_DA_API_DE_DESTINO';

// Função para buscar dados da API de origem
async function fetchData() {
  try {
    const response = await axios.get(sourceApiUrl);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API de origem:', error.message);
    return null;
  }
}

// Função para salvar dados na API de destino
async function saveData(data) {
  if (data) {
    try {
      const response = await axios.post(destinationApiUrl, data);
      console.log('Dados salvos com sucesso na API de destino:', response.data);
    } catch (error) {
      console.error('Erro ao salvar dados na API de destino:', error.message);
    }
  }
}

// Agendamento da tarefa para executar a cada 5 minutos
cron.schedule('*/5 * * * *', async () => {
  console.log('Executando tarefa de busca e salvamento de dados...');
  const data = await fetchData();
  await saveData(data);
});

app.get('/', (req, res) => {
  res.send('API de busca e salvamento de dados em execução!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});