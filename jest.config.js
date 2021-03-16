module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest',
    '^.+\\.svg$': '<rootDir>/svgTransform.js'
  },
  moduleNameMapper: {
    "\\.(css|sass)$": "identity-obj-proxy",
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ]
};
