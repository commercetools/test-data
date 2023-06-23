import type { TReference } from '../../types';
import businessUnitReference from './business-unit-reference';

it('should build an business-unit reference', () => {
  const built = businessUnitReference().build<TReference<'business-unit'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'business-unit',
  });
});
