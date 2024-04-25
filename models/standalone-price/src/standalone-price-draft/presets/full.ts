import { MoneyDraft, PriceTierDraft } from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../types';
import StandalonePriceDraft from '../builder';

const full = (): TStandalonePriceDraftBuilder => {
  return StandalonePriceDraft()
    .tiers([
      PriceTierDraft.random(),
      PriceTierDraft.random(),
      PriceTierDraft.random(),
    ])
    .staged(MoneyDraft.random());
};

export default full;
