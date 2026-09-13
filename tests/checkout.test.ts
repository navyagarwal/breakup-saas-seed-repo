import { describe, expect, it } from 'vitest';
import { calculateTotal } from '../src/checkout';

describe('calculateTotal', () => {
  it('adds line items', () => expect(calculateTotal([12, 8])).toBe(20));
});
