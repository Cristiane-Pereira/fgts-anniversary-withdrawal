module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],  // Adicionando jsx e tsx
  rootDir: '.',  // Definindo a raiz do diretório
  testMatch: [
    '<rootDir>/src/**/*.(spec|test).js',  // Aceita .spec.js ou .test.js
    '<rootDir>/src/**/*.(spec|test).jsx', // Aceita também .spec.jsx ou .test.jsx
    '<rootDir>/src/app/components/**/*.test.js', // Verifica se o caminho está correto
    '<rootDir>/src/app/components/**/*.test.jsx', // Aceita arquivos de teste JSX
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',  // Usando babel-jest para arquivos JS/JSX
    '^.+\\.tsx?$': 'babel-jest',  // Usando babel-jest para arquivos TS/TSX
  },
  verbose: true,  // Exibe informações detalhadas dos testes no console
  collectCoverageFrom: ['**/*.js', '**/*.jsx'],  // Coletando cobertura de arquivos JS e JSX
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',  // Ignorando node_modules
    '<rootDir>/dist/',  // Ignorando dist
    '<rootDir>/.stryker-tmp/',  // Ignorando arquivos temporários do Stryker
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',  // Mapeando caminhos para src
    '^@modules/app(.*)$': '<rootDir>/src/modules/$1',  // Mapeando para módulos específicos
    '^@common/filters(.*)$': '<rootDir>/src/common/$1',  // Mapeando filtros comuns
  },
  coveragePathIgnorePatterns: [
    '.*\\.(interface|module|schema|entity|dto|enum|d).js',  // Ignorando arquivos específicos de lógica de negócio
    '.*\\.e2e-spec.js',  // Ignorando testes E2E
    'index.js',  // Ignorando index.js
    'main.js',  // Ignorando main.js
  ],
  coverageDirectory: './coverage',  // Onde os relatórios de cobertura serão armazenados
  testEnvironment: 'jsdom',  // Ambiente correto para testes com React
  roots: ['<rootDir>/src'],  // Diretório raiz dos testes
};
