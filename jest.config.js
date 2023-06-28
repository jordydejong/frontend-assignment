const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  collectCoverageFrom: [
    "src/components/**/*.tsx",
  ],
  coverageThreshold: {
    global: {
          "statements": 80,
          "branches": 80,
          "functions": 80,
          "lines": 80
      }
  }
};
module.exports = createJestConfig(customJestConfig);
