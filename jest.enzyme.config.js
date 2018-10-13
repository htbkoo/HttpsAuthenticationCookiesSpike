module.exports = {
    "displayName": "Enzyme Tests",
    "testMatch": [
        '**/*.(test|spec).(tsx|jsx)'
    ],
    "preset": 'ts-jest',
    "testEnvironment": 'jsdom',
    "testPathIgnorePatterns": ["/node_modules/", "/build/.*", "/\.next/.*"],
    "setupFiles": ["./src/test/setupTests.ts"],
};