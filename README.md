## Como Executar:

Abra o terminal na pasta do seu projeto.
Execute o comando: node index.js
Sua API Node.js será iniciada, e a cada 5 minutos, a tarefa agendada buscará os dados da API de origem e tentará salvá-los na API de destino. Você poderá ver os logs de execução no seu terminal.

### Considerações Importantes:

Método HTTP para Salvar: Certifique-se de que a API de destino espera uma requisição POST (como no exemplo) ou outro método HTTP (PUT, PATCH, etc.) e ajuste a função saveData() conforme necessário.
Formato dos Dados: Verifique o formato dos dados que a API de origem retorna e o formato que a API de destino espera receber. Pode ser necessário realizar alguma transformação nos dados dentro das funções fetchData() ou saveData() antes de enviá-los.
Tratamento de Erros: O tratamento de erros no código é básico. Em um ambiente de produção, você precisaria implementar um tratamento de erros mais robusto, incluindo logging adequado e possíveis mecanismos de retry.
Segurança: Se as suas APIs envolvem dados sensíveis ou requerem autenticação, implemente as medidas de segurança apropriadas (por exemplo, envio de tokens de autenticação nas requisições).
Escalabilidade: Para aplicações maiores, considere usar um sistema de filas (como RabbitMQ ou Kafka) para desacoplar a busca e o salvamento de dados, tornando o sistema mais resiliente e escalável.
