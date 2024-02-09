import type { TReferenceDraft } from '../../../types';
import subscriptionReference from './subscription-reference';

it('should build a subscription reference', () => {
  const built =
    subscriptionReference().build<TReferenceDraft<'subscription'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'subscription',
  });
});
