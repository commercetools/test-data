import { TStandalonePriceDraft } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyDraft = empty().build<TStandalonePriceDraft>();
  expect(emptyDraft).toMatchObject({
    country: undefined,
    customerGroup: undefined,
    channel: undefined,
    validFrom: undefined,
    validUntil: undefined,
    tiers: undefined,
    discounted: undefined,
    staged: undefined,
    active: undefined,
    custom: undefined,
  });
});
