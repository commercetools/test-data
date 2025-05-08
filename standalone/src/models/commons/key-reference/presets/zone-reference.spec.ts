import type { TKeyReference } from '../types';
import zoneReference from './zone-reference';

it('should build zone reference', () => {
  const built = zoneReference().build<TKeyReference>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'zone',
  });
});
