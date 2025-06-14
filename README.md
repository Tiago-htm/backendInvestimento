#INSTRUÇÕES PARA RODAR A APLICAÇÃO

 ### 1° Passo: Instalação do Banco

    Instale o PostgreSQL em seu computador.
    (https://www.postgresql.org/download/)

    Após a instalação, crie um banco chamado Investimento.

    Utilize o comando abaixo para criação da tabela:
      CREATE TYPE tipo_investimento AS ENUM ('Ação','Fundo Imobiliário','Fundo de Renda Fixa','Tesouro Direto','CDB','Outro');CREATE TABLE investimento (id SERIAL PRIMARY KEY,nome VARCHAR(100) NOT NULL,tipo tipo_investimento NOT             NULL,valor_investido NUMERIC(15, 2) NOT NULL,CONSTRAINT checar_valor CHECK (valor_investido > 0),data_investimento DATE NOT NULL,CONSTRAINT checar_data CHECK (data_investimento <= CURRENT_DATE));
     
    
### 2° Passo: Clone o Repositório:
    - Execute no terminal o comando (git clone  https://github.com/Tiago-htm/backendInvestimento.git) no seu computador
    - Verifique se a pasta do projeto está em seu computador.
    - Navegue até a pasta do projeto e abra-a em um editor de código.

### 3° Passo: Alterar as configuração com o banco
    - Navegue até a pasta config e selecione o arquivo database.js.
    - Modifique as credenciais de conexão com o banco para as suas credenciais.

### 4° Passo: Executando a aplicação
    - Execute no terminal o comando npm install para baixar as dependências.
    - Após a instalação das dependências, execute o comando npm start para iniciar a aplicação.
    - Após a mensagem "Servidor Rodando", sua aplicação estará funcionando.

## Vizualizando o projeto: 
  - Para visualizar o projeto no navegador, rode-o juntamente com o frontend:
    (https://github.com/Tiago-htm/frontendInvestimento)
  
