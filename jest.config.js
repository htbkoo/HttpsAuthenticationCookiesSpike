module.exports = {
    "preset": 'ts-jest',
    "testEnvironment": 'jsdom',
    "testPathIgnorePatterns": ["/node_modules/", "/build/.*", "/\.next/.*"],
    "setupFiles": ["./src/test/setupTests.ts"],
};