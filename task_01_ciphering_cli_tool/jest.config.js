module.exports = {
    verbose: true,
    testPathIgnorePatterns: ['/node_modules/'],
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.js',
        '!./*.*',
        '!**/index.js',
        './index.js',
        '!./coverage/**/*.*',
        '!./__tests__/**/*.*',
        '!**/node_modules/**'
    ],
    coverageThreshold: {
        global: {
            branches: 85,
            lines: 70
        }
    }
};
