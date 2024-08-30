import type { Config } from "jest";
import { configureNextJestPreview } from "jest-preview";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const config: Config = {
  // All imported modules in your tests should be mocked automatically
  // automock: false,

  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["**/app/**/*.{ts,tsx,js,jsx}"],
  coverageDirectory: "coverage",
  moduleDirectories: ["node_modules", "<rootDir>/"],
  setupFilesAfterEnv: ["<rootDir>/test-utils/jest.setup.ts"],
  testEnvironment: "jsdom",
};

export default configureNextJestPreview(createJestConfig(config));
