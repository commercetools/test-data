import type { TZoneDraft } from '../../../types';
import empty from './empty';

it('should set all specified fields to undefined', () => {
  const emptyZoneDraft = empty().build<TZoneDraft>();
  expect(emptyZoneDraft).toMatchObject({
    key: undefined,
    description: undefined,
    locations: undefined,
  });
});
