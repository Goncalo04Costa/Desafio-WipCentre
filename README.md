# Desafio-WipCentre
![WipCentre]([files/Users/jzhang/Desktop/Isolated.png](https://github.com/Goncalo04Costa/Desafio-WipCentre/blob/main/wipcentre.webp))

## Estimativa de Tempo e Planeamento do Desafio React "Create Articles"

---

### Objetivos do desafio
A biblioteca escolhida para este desafio foi:
  - Shadcn ui

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

### Estimativa de Tempo

| Tarefa                              | Tempo Estimado (horas) | Comentários                                        |
|-----------------------------------|-----------------------|---------------------------------------------------|
| Pesquisa e escolha da biblioteca   | 3                     | Avaliar Shadcn ui e decidir uso                   |
| Setup do projeto React             | 2                     | Criação do projeto, instalação dependências       |
| Implementar mocks das APIs         | 2                     | Configuração com axios-mock-adapter                |
| Implementar dropdowns dependentes  | 7                     | Dropdowns pesquisáveis e dependentes               |
| Campos de texto e numéricos        | 3                     | Inputs com validação e limitação                   |
| Implementar botão "Verify"         | 3                     | Construção do código conforme formato              |
| Implementar botão "Gravar"         | 4                     | Preparar JSON e log de dados                        |
| Estilização com Shadcn ui          | 3                     | Aplicar estilos e responsividade                    |
| Testes e ajustes finais            | 5                     | Testar funcionalidades, corrigir bugs              |
| Documentação                       | 3                     | Criar README, comentários no código                 |


---

### Plano para 5 dias

| Dia  | Objetivos principais                              |
|-------|-------------------------------------------------|
| 1     | Setup, pesquisa biblioteca, mocks APIs           |
| 2     | Implementar dropdowns dependentes e inputs       |
| 3     | Botões Verify e Gravar + lógica                    |
| 4     | Estilização UI e testes iniciais                   |
| 5     | Testes finais, ajustes, documentação               |

---


Gonçalo Costa

13 de junho de 2025
