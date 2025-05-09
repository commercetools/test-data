import type { TKeyReference } from '../types';
import businessUnitReference from './business-unit-reference';

it('should build a businessUnit reference', () => {
  const built = businessUnitReference().build<TKeyReference>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'business-unit',
  });
});
