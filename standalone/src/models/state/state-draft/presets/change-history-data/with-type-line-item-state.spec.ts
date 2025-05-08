import type { TState } from '../../../types';
import withTypeLineItemState from './with-type-line-item-state';

describe('State with type of LineItemState and role of Return', () => {
  it('should return a State containing a type of LineItemState and role of Return', () => {
    const typeLineItemState = withTypeLineItemState().build<TState>();

    expect(typeLineItemState).toEqual(
      expect.objectContaining({
        type: 'LineItemState',
        roles: ['Return'],
      })
    );
  });
});
