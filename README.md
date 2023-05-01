# Web Scrap

O Web Scrap é um software fullstack desenvolvido com TypeScript e React para o front-end, e JavaScript, Node.js e Sequelize com banco de dados MySQL para o back-end. O objetivo do projeto é fazer web scraping de produtos em lojas online, utilizando o Puppeteer.

Como o projeto é voltado para aprendizado, a coleta dos dados é feita em modo de fila, sem uso de cluster para reduzir o tempo de scraping. No entanto, para melhorar a experiência do usuário, foi implementada uma lógica em que todas as pesquisas realizadas pelos usuários são armazenadas no banco de dados. Quando um usuário repete a mesma pesquisa, os resultados são exibidos instantaneamente, sem precisar refazer o scraping.

Na interface do usuário, o usuário pode selecionar a loja desejada (Buscapé, Mercado Livre ou ambas) e pesquisar por um produto específico. O resultado da pesquisa é exibido em cards, com informações como o nome do produto, o preço e o link para o produto.

Como o projeto está em fase de aprendizado, ainda não foi implementada a utilização de cluster, porém, a intenção é aprimorar essa funcionalidade no futuro. O Web Scrap é um ótimo projeto para quem deseja aprofundar seus conhecimentos em web scraping e desenvolvimento fullstack.

<br>

## Sobre o web-scraping

Com o aumento de dados disponíveis na internet, o web scraping se tornou uma técnica valiosa para coletar informações de sites da web de maneira automatizada. O web scraping é a prática de coletar dados de páginas da web e extrair as informações relevantes para análise e uso posterior.

Uma das ferramentas mais utilizadas para web scraping é o Puppeteer, que é uma biblioteca Node.js desenvolvida pelo Google. O Puppeteer permite automatizar tarefas em navegadores web e extrair informações de maneira programática.

Com o Puppeteer, é possível simular interações do usuário em um navegador, como clicar em botões, preencher formulários e navegar por páginas da web. Isso permite que sejam coletadas informações que, de outra forma, seriam difíceis ou impossíveis de obter.

Em resumo, o web scraping é uma técnica poderosa para coletar dados da web, e o Puppeteer é uma ferramenta útil para automatizar essa tarefa. No projeto, o Puppeteer foi utilizado para coletar dados de um site e extrair as informações necessárias para a criação de um banco de dados.

<br>

## Estilização

Para a estilização, utilizei o framework Tailwind de forma estratégica para deixar o site estilizado e responsivo em pouco tempo. O Tailwind é um framework CSS utilitário que permite criar estilos customizados rapidamente, sendo essencial para atender às demandas de prazo do projeto.

Os campos de input, por sua vez, foram estilizados utilizando o Material UI, conjunto de componentes React pré-construídos que foram personalizados para atender às necessidades específicas do projeto. Neles, implementei máscaras para CPF, telefones e datas, permitindo que o preenchimento desses campos seja feito automaticamente, evitando erros comuns de digitação e tornando a experiência do usuário mais ágil e intuitiva.

Além disso, utilizei o CSS nativo em alguns casos para complementar o estilo dos componentes.

Com a combinação dessas ferramentas, foi possível criar uma interface web responsiva, atraente e funcional em um curto período de tempo.

<br>
<br>

<details>
  <summary><strong>INSTALAÇÃO DO SOFTWARE WEB SCRAP</strong></summary><br />

## Instalação 
  
<br>

- Clone o repositório `git@github.com:Rafael-Souza-97/web-scrap.git`:

```bash
git clone git@github.com:Rafael-Souza-97/web-scrap.git
```

<br>

- Entre na pasta do repositório que você acabou de clonar:

```bash
cd web-scrap
```

<br>

- Instale as depëndencias com `npm install`:

```bash
npm install
```

- Instale as depëndencias do Front-end, com `npm install`:
> Entre na pasta frontend.

```bash
cd frontend
```

> Instale as dependências.

```bash
npm install
```

- Instale as depëndencias do Back-end, com `npm install`:
> Entre na pasta backend.

```bash
cd ..
```

```bash
cd backend
```

> Instale as dependências.

```bash
npm install
```

<hr>
<br>

### Executando a aplicação:

- Execute a aplicação com  com `npm run dev` na pasta frontend e backend do projeto:
> Executará a aplicação em modo de desenvolvimento.
 
```bash
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173/) no seu navegador para visualiza-lo.

<hr>
<br>

</details>

<br>

## Autor

- [Rafael Souza](https://github.com/Rafael-Souza-97)

## Referências

 - [Mercado Livre](https://www.mercadolivre.com.br/)
 - [Buscapé](https://www.buscape.com.br/)

## Tecnologias e Ferramentas

- Linguagem: [Typescript](https://www.typescriptlang.org/) e [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- Framework de Front-end: [React](https://pt-br.reactjs.org/)
- Cliente HTTP: [Axios](https://axios-http.com/ptbr/docs/intro)
- Plataforma de desenvolvimento: [Node](https://nodejs.org/en/)
- Padrão de arquitetura de API: [API RESTful](https://blog.betrybe.com/desenvolvimento-web/api-rest-tudo-sobre/)
- Padrão de arquitetura do Software: [Model-Service-Controller](https://www.devmedia.com.br/introducao-ao-padrao-mvc/29308) 
- Framework de arquitetura de APIwork web: [Express](https://expressjs.com/)
- Banco de dados: [MySQL](https://www.mysql.com/)
- Ferramenta de modelagem de banco de dados: [MySQL Workbench](https://www.mysql.com/products/workbench/)
- ORM: [Sequelize](https://sequelize.org/)
- Cliente de teste de API: [Thunder Client](https://www.thunderclient.com/)
- Biblioteca de automação de navegador: [Puppeteer](https://pptr.dev/)
- Linter de código: [ESLint](https://eslint.org/)
- Editor de código: [Visual Studio Code](https://code.visualstudio.com/)
- Sistema de controle de versão: [Git](https://git-scm.com/) e [GitHub](https://github.com/)
- Sistema operacional: [Linux - Ubuntu](https://ubuntu.com/)

## Estilização

- Framework CSS: [Tailwind](https://tailwindcss.com/)
- Biblioteca de componentes: [Material UI](https://mui.com/)
- Linguagem de Estilização: [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

<br>

## Preview

https://user-images.githubusercontent.com/99055008/235547084-e34bf760-2c9f-4055-b08a-73345ec32f1e.mp4

<hr>
