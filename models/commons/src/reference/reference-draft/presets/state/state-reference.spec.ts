import type { TReferenceDraft } from '../../../types';
import stateReference from './state-reference';

it('should build a state reference', () => {
  const built = stateReference().build<TReferenceDraft<'state'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'state',
  });
});
