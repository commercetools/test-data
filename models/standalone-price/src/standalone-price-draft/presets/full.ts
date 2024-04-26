import { MoneyDraft, PriceTierDraft } from '@commercetools-test-data/commons';
import type { TStandalonePriceDraftBuilder } from '../../types';
import StandalonePriceDraft from '../builder';

/**
 * This preset generates a standalone price draft with a unified currency across all properties.
 *
 * It includes:
 * - Three random price tiers.
 * - A random staged price.
 *
 * Note:
 * Due to a implementation restriction on the transformer, the default build will not include a unified currency.
 *
 * @returns {TStandalonePriceDraftBuilder} A standalone price draft builder.
 *
 * @example
 * const standalonePriceDraft = StandalonePriceDraft.presets.full().build();
 */
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
