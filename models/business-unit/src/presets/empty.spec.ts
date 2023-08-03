import type { TBusinessUnitDraft } from '../types';
import empty from './empty';

it('should set all specified fields to undefined', () => {
  const emptyBusinessUnitDraft = empty().build<TBusinessUnitDraft>();
  expect(emptyBusinessUnitDraft).toMatchObject({
    key: undefined,
    // TODO
  });
});
