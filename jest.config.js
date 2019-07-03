module.exports = {
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'elm'],
  preset: 'ts-jest',
  roots: [
    '<rootDir>/tests/ts',
  ],
  testEnvironment: 'jsdom',
};
