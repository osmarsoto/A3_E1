
## 📚 API REST com Node.js e Express

## 📌 Descrição
Projeto desenvolvido como exercício da disciplina **Sistemas Distribuídos Mobile**.  
Objetivo: criar uma **API REST** simples utilizando **Node.js** e **Express**, simulando operações básicas de cadastro de produtos.

## 🧠 Ficha-Resumo da Pesquisa
Tema: Desenvolvimento de API REST

API REST é uma arquitetura baseada em recursos e métodos HTTP, onde cada recurso é representado por uma URL.

Utilizamos Node.js e Express.js para construir o servidor e disponibilizar endpoints.

📐 Padrão de Projeto adotado: 
Controller-Service-Repository (adaptado)

Controller: Gerencia rotas e respostas HTTP.

Service: (não implementado aqui, mas sugerido) — Concentraria as regras de negócio.

Repository: Simulado usando arrays em memória para armazenar e manipular produtos.

📝 A separação de responsabilidades melhora a organização e facilita a escalabilidade do projeto.


---

## 🚀 Tecnologias Utilizadas
- **Node.js** — Ambiente de execução JavaScript no servidor.
- **Express.js** — Framework para criação de rotas HTTP.
- **Nodemon** — Utilitário para reiniciar o servidor automaticamente em desenvolvimento.

---

## 🛠️ Como rodar o projeto

 bash
#Clonar o repositório
git clone https://github.com/adaltofadergs/2025_1_SistemasDistribuidosMobile_sexta.git

#Navegar até a pasta da aula
cd 2025_1_SistemasDistribuidosMobile_sexta/Aula07-REST

#Instalar as dependências
npm install

#Rodar o servidor
npm run dev

## 📚 Rotas Disponíveis
Produtos

Método	Rota	Descrição
GET	/produtos	Listar todos os produtos
POST	/produtos	Cadastrar um novo produto
PUT	/produtos/:id	Atualizar produto existente
DELETE	/produtos/:id	Deletar produto existente

## 📂 Estrutura básica
/api/produtos.js — Arquivo principal com rotas e manipulação dos dados em memória.

## 💡 Melhorias Futuras
Implementar camadas separadas de Service e Repository.

Persistência dos dados em banco de dados real (MongoDB ou PostgreSQL).

Adicionar autenticação (JWT) e validação de dados.

Escrever testes automatizados (unitários e de integração).

