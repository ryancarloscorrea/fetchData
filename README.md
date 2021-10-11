# fetchData
Repositório referente a atividade da matéria de Técnicas avançadas de desenvolvimento de software.

## Instalação
Requisito: Node.js instalado e configurado.
Clone o projeto em sua máquina. Vá até a pasta do projeto e dê o comando `npm install`.
Para executar, dê o comando `node fetch_API_test.js`.

## Componente
A função getData() do arquivo fetch_api.js é um componente pois é usado para o fetch 
de dados de 4 API's. Essa função é chamada (reaproveitada) no arquivo fetch_API_test.js
com as seguintes API'S: GIT HUB, API STACK EXCHANGE, NEWS, URLhaus.
Para o coletor ser reaproveitado, a função recebe os seguintes parâmetros:

**url:** url para o fetch dos dados

**fileName:** nome do arquivo para salvar o csv

**keyToConvertCsv:** nome da chave (do retorno da pi) que se deseja salvar os dados na tabela.
