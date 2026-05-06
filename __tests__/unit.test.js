// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('isPhoneNumber accepts (555) 555-5555', () => {
  expect(isPhoneNumber('(555) 555-5555')).toBe(true);
});
test('isPhoneNumber accepts 555-555-5555', () => {
  expect(isPhoneNumber('555-555-5555')).toBe(true);
});
test('isPhoneNumber rejects abcd', () => {
  expect(isPhoneNumber('abcd')).toBe(false);
});
test('isPhoneNumber rejects 12345', () => {
  expect(isPhoneNumber('12345')).toBe(false);
});

// isEmail
test('isEmail accepts theo@ucsd.edu', () => {
  expect(isEmail('theo@ucsd.edu')).toBe(true);
});
test('isEmail accepts user_1@host.io', () => {
  expect(isEmail('user_1@host.io')).toBe(true);
});
test('isEmail rejects no-at-sign.com', () => {
  expect(isEmail('no-at-sign.com')).toBe(false);
});
test('isEmail rejects test@gmail (no TLD)', () => {
  expect(isEmail('test@gmail')).toBe(false);
});

// isStrongPassword
test('isStrongPassword accepts Pass1234', () => {
  expect(isStrongPassword('Pass1234')).toBe(true);
});
test('isStrongPassword accepts abcd', () => {
  expect(isStrongPassword('abcd')).toBe(true);
});
test('isStrongPassword rejects 1abcd (starts with digit)', () => {
  expect(isStrongPassword('1abcd')).toBe(false);
});
test('isStrongPassword rejects abc (too short)', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

// isDate
test('isDate accepts 5/5/2026', () => {
  expect(isDate('5/5/2026')).toBe(true);
});
test('isDate accepts 12/25/2024', () => {
  expect(isDate('12/25/2024')).toBe(true);
});
test('isDate rejects 5/5/26 (2-digit year)', () => {
  expect(isDate('5/5/26')).toBe(false);
});
test('isDate rejects May 5, 2026', () => {
  expect(isDate('May 5, 2026')).toBe(false);
});

// isHexColor
test('isHexColor accepts #fff', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('isHexColor accepts #1A2B3C', () => {
  expect(isHexColor('#1A2B3C')).toBe(true);
});
test('isHexColor rejects #ggg (non-hex chars)', () => {
  expect(isHexColor('#ggg')).toBe(false);
});
test('isHexColor rejects #12345 (5 chars)', () => {
  expect(isHexColor('#12345')).toBe(false);
});
