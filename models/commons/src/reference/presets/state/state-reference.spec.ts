import type { TReference } from '../../types';
import stateReference from './state-reference';

it('should build a state reference', () => {
  const built = stateReference().build<TReference<'state'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'state',
  });
});
