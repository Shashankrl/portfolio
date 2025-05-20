import { describe, it, expect } from 'vitest';
import { formatDate, truncateText } from './formatters';

describe('Formatter Utilities', () => {
  describe('formatDate', () => {
    it('should format a date correctly', () => {
      const testDate = new Date(2024, 0, 1); // January 1, 2024
      expect(formatDate(testDate)).toBe('January 1, 2024');
    });

    it('should handle different dates', () => {
      const testDate = new Date(2023, 11, 25); // December 25, 2023
      expect(formatDate(testDate)).toBe('December 25, 2023');
    });
  });

  describe('truncateText', () => {
    it('should not truncate text shorter than maxLength', () => {
      const text = 'Hello World';
      expect(truncateText(text, 20)).toBe('Hello World');
    });

    it('should truncate text longer than maxLength', () => {
      const text = 'This is a very long text that should be truncated';
      expect(truncateText(text, 10)).toBe('This is a ...');
    });

    it('should handle exact length text', () => {
      const text = 'Exact 10';
      expect(truncateText(text, 8)).toBe('Exact 10');
    });

    it('should handle empty strings', () => {
      expect(truncateText('', 10)).toBe('');
    });
  });
});