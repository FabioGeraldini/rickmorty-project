# Rick and Morty - Portal de Personagens

Projeto acadêmico de desenvolvimento Front-End que consome dados da API pública Rick and Morty para exibir informações sobre personagens da série.

## Demo Online

Acesse o projeto: [https://fabiogeraldini.github.io/rickmorty-project/](https://fabiogeraldini.github.io/rickmorty-project/)

## Sobre o Projeto

Este projeto foi desenvolvido como trabalho acadêmico para a disciplina de Desenvolvimento Web Front-End. O objetivo é demonstrar o consumo de APIs públicas e a manipulação dinâmica do DOM utilizando JavaScript puro.

### Funcionalidades

 Listagem de personagens com cards dinâmicos  
 Sistema de busca por nome  
 Filtros por status (Vivo, Morto, Desconhecido)  
 Paginação de resultados  
 Design responsivo  
 Interface temática Rick and Morty  

## Tecnologias Utilizadas

- **HTML5** - Estruturação da página
- **CSS3** - Estilização e layout responsivo
- **JavaScript (ES6+)** - Lógica e consumo de API
- **Rick and Morty API** - Fonte de dados

## Estrutura do Projeto

```
rickmorty-project/
│
├── index.html          # Página principal
├── style.css           # Estilos e design
├── script.js           # Lógica JavaScript
├── README.md           # Documentação
└── assets/             # Recursos adicionais
    └── images/
```

## Como Executar Localmente

1. Clone este repositório:
```bash
git clone https://github.com/FabioGeraldini/rickmorty-project.git
```

2. Navegue até a pasta do projeto:
```bash
cd rickmorty-project
```

3. Abra o arquivo `index.html` no navegador ou use uma extensão como Live Server no VSCode.

## API Utilizada

**Rick and Morty API**  
- Documentação: https://rickandmortyapi.com/documentation
- Endpoint base: `https://rickandmortyapi.com/api/character`
- Método: GET
- Autenticação: Não requerida

### Endpoints Utilizados

- `GET /character` - Lista todos os personagens
- `GET /character?page={número}` - Paginação
- `GET /character?name={nome}` - Busca por nome
- `GET /character?status={status}` - Filtro por status

## Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados conceitos de:

- Consumo de APIs RESTful com Fetch API
- Programação assíncrona (async/await)
- Manipulação do DOM com JavaScript
- Criação dinâmica de elementos HTML
- Tratamento de erros em requisições HTTP
- Design responsivo com CSS Grid e Flexbox
- Boas práticas de desenvolvimento front-end

## Requisitos Atendidos

 Estrutura HTML semântica  
 Estilização com CSS puro (sem frameworks)  
 JavaScript para consumo de API  
 Cards criados dinamicamente (não estáticos no HTML)  
 Sistema de busca e filtros  
 Paginação funcional  
 Layout responsivo  
 Publicação no GitHub Pages  

## Autor

**Fabio Geraldini**  
- GitHub: [@FabioGeraldini](https://github.com/FabioGeraldini)

## Licença

Este projeto foi desenvolvido para fins educacionais.

## Agradecimentos

- [Rick and Morty API](https://rickandmortyapi.com/) pela API gratuita e bem documentada
- Instituição de ensino pelo projeto desafiador
- Comunidade de desenvolvedores pelas referências e inspirações

---
