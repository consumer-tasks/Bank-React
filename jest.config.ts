export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 95,
      functions: 95,
      lines: 95,
    },
  },
  setupFilesAfterEnv: [
    './tests/setup-tests.ts',
  ],
  globals: {
    "ts-jest": {
      tsConfig: "./tsconfig.jest.json",
    },
    statements: 0,
    branches: 0,
    functions: 0,
    lines: 0,
  },
  testPathIgnorePatterns: ["/node_modules/", "/tests/e2e/"],
  modulePathIgnorePatterns: ["<rootDir>/.*/__mocks__"],
  moduleNameMapper: {
    "~modules/(.*)": "<rootDir>/src/modules/$1",
    "src/(.*)": "<rootDir>/src/$1",
    "tests/(.*)": "<rootDir>/tests/$1",
  },
};
