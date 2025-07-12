# Desafio-WipCentre

## Estimativa de Tempo e Planeamento do Desafio React "Create Articles"

---

### Objetivos do desafio
- Escolher biblioteca de UI para React:
  - MUI (Material-UI)
  - CoreUI
  - Shadcn ui

- Fazer previsão de tempo para desenvolvimento

- Criar a página React com os seguintes requisitos:
  - Campo "nº pares": inteiro, max 999
  - Dropdowns pesquisáveis e dependentes para Cliente, Marca, Cor/Sortimento, Tamanho, Certificação, Unidade, Sust. Comp
  - Outros campos texto livre e campos numéricos (pesos e medidas) com validação numérica
  - Ao clicar em "Verify", gerar código no formato:  
    `PK<Pares><Cliente><Marca><Cor><Tamanho><Certificacao>`  
    Exemplo: `PK00201509900104201`
  - Botão "Gravar": preparar JSON com estrutura similar ao inicial, incluindo todos os campos preenchidos, excluindo o campo `success`
  - Dropdowns filtráveis por texto

---

### Requisitos da Página "Create Articles" - Tabela 

| Campo             | Tipo             | Validação / Restrições                  | Observações                           |
|-------------------|------------------|---------------------------------------|-------------------------------------|
| nº pares          | Inteiro          | Máximo 999, valor livre                | Input numérico                      |
| Cliente           | Dropdown         | Pesquisa, depende do pedido inicial    | Dados via mock API                  |
| Marca             | Dropdown         | Pesquisa, depende do Cliente           | Dados via mock API                  |
| Cor/Sortimento    | Dropdown         | Pesquisa, depende da Marca             | Dados via mock API                  |
| Tamanho           | Dropdown         | Pesquisa                              | Dados via mock API                  |
| Certificação      | Dropdown         | Pesquisa                             | Dados via mock API                  |
| Unidade           | Dropdown         | Pesquisa                             | Dados via mock API                  |
| Sust. Comp        | Dropdown         | Pesquisa                             | Dados via mock API                  |
| Outros campos     | Texto livre      | Texto livre                          | Sem restrições específicas          |
| Campos numéricos  | Número           | Aceitar somente números               | Para pesos e medidas                |

---

| Botões            | Funcionalidade                                         |
|-------------------|-------------------------------------------------------|
| Verify            | Gera código no campo Código no formato:                |
|                   | `PK<Pares><Cliente><Marca><Cor><Tamanho><Certificação>`|
| Gravar            | Prepara JSON com todos os valores preenchidos, excluindo o campo `success` |

---

| Dropdowns         | Características                                       |
|-------------------|------------------------------------------------------|
| Todos             | Devem permitir filtragem por texto digitado           |
| Cliente → Marca   | Marca depende do Cliente selecionado                  |
| Marca → Cor       | Cor depende da Marca selecionada                       |

---


