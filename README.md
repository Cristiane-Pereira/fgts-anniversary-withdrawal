<h1 style="color: #36f;">Projeto Smile Co</h1>

O projeto **Smile Co** tem como objetivo proporcionar uma experiência simples e eficiente para o cálculo do valor do saque-aniversário do Fundo de Garantia do Tempo de Serviço (FGTS). Com base em informações fornecidas pelo usuário, como o saldo do FGTS e o mês de aniversário, a aplicação calcula o valor que o usuário pode sacar, facilitando o acesso à informação de forma rápida e prática.

## **Funcionalidades**
A aplicação possui as seguintes funcionalidades principais:

**Página Inicial:** [http://localhost:3000/initial](http://localhost:3000/initial) - Um formulário onde o usuário pode inserir seu nome, telefone, saldo do FGTS e mês de aniversário.

**Página de Resultados:** [http://localhost:3000/result](http://localhost:3000/result) - Após preencher o formulário, o usuário é redirecionado para uma página de resultados com o valor do saque-aniversário calculado, com base nas regras específicas para o saque.


## **Regras de Cálculo (Regra de Negócio)**
O valor do saque-aniversário é calculado conforme a faixa de saldo do FGTS do trabalhador na data do seu aniversário:

- Até R$ 500: saque de 50% do saldo;
- De R$ 500,01 até R$ 1.000: saque de 40% do saldo + R$ 50;
- De R$ 1.000,01 até R$ 5.000: saque de 30% do saldo + R$ 150;
- De R$ 5.000,01 até R$ 10.000: saque de 20% do saldo + R$ 650;
- De R$ 10.000,01 até R$ 15.000: saque de 15% do saldo + R$ 1.150;
- De R$ 15.000,01 até R$ 20.000: saque de 10% do saldo + R$ 1.900;
- Acima de R$ 20.000,01: saque de 5% do saldo + R$ 2.900;


## **Tecnologias Utilizadas para o Desenvolvimento**

- NextJS;
- ReactJS;
- React Bootstrap;
- React MediaQuery
- JavaScript;


## **Tecnologias Utilizadas para Desenvolver os Testes Unitários**

- Jest;
- Testing Library;

**Obs:** (Para rodar os testes localmente, basta abrir o terminal na raiz do projeto e executar o comando: <code>npm test</code>);



## **Requisitos Funcionais**

- Página Inicial com formulário para o usuário preencher os dados necessários para o cálculo;
- Página de Resultado com cálculo do saque-aniversário que o usuário vai poder sacar;
- Foi implementada uma validação nos campos do formulário, com destaque para o campo de telefone, utilizando a validação API da [Twilio](https://www.twilio.com/docs) para garantir que o número informado seja válido. Além disso, os campos de nome, saldo do FGTS e mês de aniversário foram configurados como obrigatórios, garantindo que o usuário preencha todas as informações essenciais. Esses dados são então armazenados e gerenciados globalmente por meio do useContext, possibilitando o acesso e manipulação dos dados em toda a aplicação, e permitindo a exibição na página de resultados, de forma dinâmica;
- Para a construção da interface e garantir a responsividade da aplicação, foi adotada a biblioteca **React Bootstrap**. Ela oferece uma coleção de componentes prontos e altamente personalizáveis, baseados no framework Bootstrap, permitindo uma integração ágil e eficiente com o React. A biblioteca inclui funcionalidades como grid system, botões, formulários entre outros, que simplificam a criação de layouts flexíveis e adaptáveis. Combinada ao uso de **Media Queries**, ela possibilita uma adaptação otimizada da aplicação a diferentes tamanhos de tela, proporcionando uma experiência de usuário consistente e fluida em dispositivos móveis, tablets e desktops.
- Para a construção e validação do formulário, foi utilizado o **Formik** em conjunto com **Yup** . O Formik gerencia o estado dos campos, o processo de submissão e a exibição das mensagens de erro, enquanto o Yup é responsável pela validação dos dados de maneira eficiente e declarativa;


## **Requisitos Não Funcionais**
- Suporte para os navegadores Chrome, Firefox e Edge;
- Responsividade em múltiplos dispositivos, incluindo Web, Mobile e Desktop, garantindo uma adaptação dinâmica do layout conforme o tamanho da tela;


## **Como Rodar o Projeto Localmente**

### Requisitos necessários:
Antes de executar o projeto, verifique se o **Node.js** está instalado em sua máquina. Caso contrário, faça o download clicando [aqui](https://nodejs.org/pt/download).

Após a instalação, abra o terminal e execute os seguintes comandos: <code>node -v</code> e, em seguida, <code>npm -v</code>. Esses comandos retornarão as versões instaladas do **Node.js** e do npm, permitindo que você verifique se a instalação foi concluída com sucesso.

Com o **Node.js** instalado, siga os passos abaixo para configurar o projeto localmente:

### 1. Clone o repositório:
Abra o terminal e execute o comando abaixo para clonar o repositório:

<code>git clone &lt;URL_DO_REPOSITORIO&gt;</code> <small style="color: #DC3545;">(A URL do repositório pode ser obtida diretamente na página do GitHub, clicando em "Code" e copiando o link).</small>

### 2. Acesse a pasta do projeto:
Após clonar o repositório, navegue até a pasta do projeto com o seguinte comando:

<code>cd fgts-anniversary-withdrawal</code>

### 3. Instale as dependências do projeto:
Dentro da pasta do projeto, instale as dependências necessárias executando o comando:

<code>npm install ou npm i</code> <small style="color: #DC3545;">(As dependências deste projeto foram gerenciadas e instaladas usando o **NPM**).</small>

### 4. Abra o projeto na sua IDE preferida:
Após a instalação das dependências, abra o projeto na sua IDE de preferência para facilitar o desenvolvimento.

### 5. Execute o projeto:
Para rodar o projeto localmente, no terminal, execute o seguinte comando:

<code>npm run dev</code>

Isso iniciará o servidor de desenvolvimento local na porta [http://localhost:3000](http://localhost:3000) e você poderá acessar o projeto **Smile Co** no seu navegador.

