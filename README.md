# <img src="https://avatars1.githubusercontent.com/u/42723118?s=200&v=4" alt="CA" width="24" /> Desafio Bravo

Você recebeu um arquivo de texto com os dados de vendas da empresa. Precisamos criar uma maneira para que estes dados sejam importados para um banco de dados.

Sua tarefa é criar uma interface web que aceite upload de arquivos, normalize os dados e armazene-os no banco de dados.

Sua aplicação web DEVE:

1. Aceitar (via um formulário) o upload de arquivos text, com dados separados por TAB testar o aplicativo usando o arquivo fornecido. A primeira linha do arquivo tem o nome das colunas. Você pode assumir que as colunas estarão sempre nesta ordem, e que sempre haverá uma linha de cabeçalho. Um arquivo de exemplo chamado 'dados.txt' está incluído neste repositório.
2. Interpretar ("parsear") o arquivo recebido, normalizar os dados, e salvar corretamente a informação em um banco de dados relacional.
3. Exibir todos os registros importados, bem como a receita bruta total dos registros contidos no arquivo enviado após o upload + parser.
4. Ter uma boa aparência e ser fácil de usar

Você pode usar qualquer linguagem de programação para o desafio. Abaixo a lista de linguagens que nós aqui do HU temos mais afinidade:
- JavaScript (NodeJS)
- Python
- Go
- Ruby
- C++
- PHP

Você pode usar qualquer _framework_. Se a sua escolha for por um _framework_ que resulte em _boilerplate code_, por favor assinale no README qual pedaço de código foi escrito por você. Quanto mais código feito por você, mais conteúdo teremos para avaliar.

## Requisitos
- Forkar esse desafio e criar o seu projeto (ou workspace) usando a sua versão desse repositório, tão logo acabe o desafio, submeta um *pull request*.
- O código precisa rodar em Windows, macOS ou Ubuntu
- Para executar seu código, deve ser preciso apenas rodar os seguintes comandos:
  - git clone $seu-fork
  - cd $seu-fork
  - comando para instalar dependências
  - comando para executar a aplicação
- A API precisa suportar um volume de 1000 requisições por segundo em um teste de estresse.



## Critério de avaliação

- **Organização do código**: Separação de módulos, view e model, back-end e front-end
- **Clareza**: O README explica de forma resumida qual é o problema e como pode rodar a aplicação?
- **Assertividade**: A aplicação está fazendo o que é esperado? Se tem algo faltando, o README explica o porquê?
- **Legibilidade do código** (incluindo comentários)
- **Segurança**: Existe alguma vulnerabilidade clara?
- **Cobertura de testes** (Não esperamos cobertura completa)
- **Histórico de commits** (estrutura e qualidade)
- **UX**: A interface é de fácil uso e auto-explicativa? A API é intuitiva?
- **Escolhas técnicas**: A escolha das bibliotecas, banco de dados, arquitetura, etc, é a melhor escolha para a aplicação?

## Dúvidas

Quaisquer dúvidas que você venha a ter, consulte as [_issues_](https://github.com/cybers-athletic/challenge-bravo/issues) para ver se alguém já não a fez e caso você não ache sua resposta, abra você mesmo uma nova issue!

Boa sorte! ;)

<p align="center">
  <img src="ca.jpg" alt="Challange accepted" />
</p>
