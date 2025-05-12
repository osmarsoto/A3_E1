# API REST com Node.js - Padrão Controller-Service-Repository

## 📘 Ficha-Resumo

### 🎯 Tema
Padrões de Projeto no Desenvolvimento de APIs REST com Node.js

### 🧩 Padrão Escolhido: Controller-Service-Repository

### 📚 O que são Padrões de Projeto?
Padrões de projeto são soluções reutilizáveis para problemas comuns no desenvolvimento de software. No contexto de APIs, eles ajudam a manter o código mais organizado, escalável e fácil de manter.

### 🧱 Sobre o Padrão Controller-Service-Repository

**Controller**: Gerencia as requisições e respostas HTTP.  
**Service**: Contém a lógica de negócio da aplicação.  
**Repository**: Lida com o armazenamento e recuperação de dados (mesmo que apenas em memória neste projeto).

### ✅ Vantagens
- Separação de responsabilidades
- Código limpo e organizado
- Facilidade para testar e manter

### 🗂 Estrutura de Pastas
```
project/
├── controllers/
│   ├── clienteController.js
│   └── produtoController.js
├── services/
│   ├── clienteService.js
│   └── produtoService.js
├── repositories/
│   ├── clienteRepository.js
│   └── produtoRepository.js
├── routes/
│   ├── clienteRoutes.js
│   └── produtoRoutes.js
├── app.js
├── server.js
└── README.md (este arquivo)
```

### 📌 Funcionalidades Implementadas
- GET e POST para `/produtos`
- GET e POST para `/clientes`
- Simulação de banco de dados com arrays em memória

### ▶ Como Executar
```bash
npm install
node server.js
```
Acesse em: [http://localhost:8001](http://localhost:8001)

---

