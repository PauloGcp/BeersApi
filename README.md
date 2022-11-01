# Beers Api

## URL de acesso:

https://paulogcp.github.io/testePages/

(o link gerado pelo github pages não aceita a navegação através de uma rota direta como `https://paulogcp.github.io/list`. A navegação dentro da aplicação deve ser feita a partir dos botões designados à navegação entre as rotas, como o botão `Listar` e `Sobre`)

## Sobre o projeto:

A aplicação consiste em uma listagem de componentes (cards de cervejas) que são formados através dos dados consumidos da API `punkApi`.

# Ferramentas/ tecnologias utilizadas:
- React (redux, react-routes, redux-toolkit, react-paginate, etc.)
- Webpack - Babel
- Node
- Axios

# Scripts:

O projeto conta com 3 scripts principais:

`npm start` : roda a aplicação através do webpack

`npm run dev`: script criado para rodar a aplicação independente do webpack

`npm build` : faz o build da aplicação (o arquivo gerado a partir do build foi utilizado para fazer o deploy no github pages) 

# Como rodar o projeto:

`git clone git@github.com:PauloGcp/BeersApi.git` -> `npm install` -> `npm start` ou `npm run dev`
