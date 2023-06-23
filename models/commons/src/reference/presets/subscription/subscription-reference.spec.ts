import type { TReference } from '../../types';
import subscriptionReference from './subscription-reference';

it('should build a subscription reference', () => {
  const built = subscriptionReference().build<TReference<'subscription'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'subscription',
  });
});
