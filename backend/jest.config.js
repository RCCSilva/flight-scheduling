/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
  },
}
