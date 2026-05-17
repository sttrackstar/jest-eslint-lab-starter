const { capitalizeWords, filterActiveUsers, logAction } = require('../index')


describe('capitalizeWords function', () => {

  // Normal cases
  test('capitalizes each word in a sentence', () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });

  // Edge cases
  test('returns empty string when input is empty', () => {
    expect(capitalizeWords("")).toBe("");
  });

  test('handles strings with special characters', () => {
    expect(capitalizeWords("hello-world")).toBe("Hello-World");
  });

  test('handles single word strings', () => {
    expect(capitalizeWords("hello")).toBe("Hello");
  });

});

describe('filterActiveUsers function', () => {

  test('filters active users from a mixed array', () => {
    const users = [
      { name: "Alice", isActive: true },
      { name: "Bob", isActive: false },
      { name: "Charlie", isActive: true }
    ];

    const result = filterActiveUsers(users);

    expect(result).toEqual([
      { name: "Alice", isActive: true },
      { name: "Charlie", isActive: true }
    ]);
  });

  test('returns empty array when all users are inactive', () => {
    const users = [
      { name: "Alice", isActive: false },
      { name: "Bob", isActive: false }
    ];

    const result = filterActiveUsers(users);

    expect(result).toEqual([]);
  });

  test('returns empty array when input is empty', () => {
    const result = filterActiveUsers([]);

    expect(result).toEqual([]);
  });

});

describe('logAction function', () => {

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2024-11-27T12:00:00.000Z"));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('logs action with correct format', () => {
    const result = logAction("login", "Alice");

    expect(result).toBe(
      "User Alice performed login at 2026-05-16T18:00:00.000Z"
    );
  });

  test('works with different user and action', () => {
    const result = logAction("logout", "Bob");

    expect(result).toBe(
      "User Bob performed logout at 2026-05-16T18:00:00.000Z"
    );
  });

});