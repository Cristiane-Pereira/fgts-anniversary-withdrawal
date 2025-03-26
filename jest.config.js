module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  rootDir: '.',
  testMatch: [
    '<rootDir>/src/**/*.(spec|test).js',
    '<rootDir>/src/**/*.(spec|test).jsx',
    '<rootDir>/src/app/components/**/*.test.js',
    '<rootDir>/src/app/components/**/*.test.jsx',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/jest.babel-transform.js', // Usando um transformador customizado
  },
  verbose: true,
  collectCoverageFrom: ['**/*.js', '**/*.jsx'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/.stryker-tmp/',
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^@modules/app(.*)$': '<rootDir>/src/modules/$1',
    '^@common/filters(.*)$': '<rootDir>/src/common/$1',
  },
  coveragePathIgnorePatterns: [
    '.*\\.(interface|module|schema|entity|dto|enum|d).js',
    '.*\\.e2e-spec.js',
    'index.js',
    'main.js',
  ],
  coverageDirectory: './coverage',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
};
