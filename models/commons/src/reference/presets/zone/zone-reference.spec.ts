import type { TReference } from '../../types';
import zoneReference from './zone-reference';

it('should build a zone reference', () => {
  const built = zoneReference().build<TReference<'zone'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'zone',
  });
});
