import type { TKeyReferenceDraft } from '../../types';
import zoneReference from './zone-reference';

it('should build zone reference', () => {
  const built = zoneReference().build<TKeyReferenceDraft>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'zone',
  });
});
