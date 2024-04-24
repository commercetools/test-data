import { MoneyDraft, PriceTierDraft } from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../types';
import StandalonePriceDraft from '../builder';

const withTiers = (currencyCode: string): TStandalonePriceDraftBuilder => {
  return StandalonePriceDraft()
    .value(MoneyDraft.random().currencyCode(currencyCode))
    .tiers([
      PriceTierDraft.random().value(
        MoneyDraft.random().currencyCode(currencyCode)
      ),
      PriceTierDraft.random().value(
        MoneyDraft.random().currencyCode(currencyCode)
      ),
      PriceTierDraft.random().value(
        MoneyDraft.random().currencyCode(currencyCode)
      ),
    ]);
};

export default withTiers;
