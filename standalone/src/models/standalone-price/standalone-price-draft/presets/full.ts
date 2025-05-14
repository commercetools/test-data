import { MoneyDraft, PriceTierDraft } from '@/models/commons';
import * as StagedPriceDraft from '../../staged-price-draft';
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
 * @param {Object} [options] - Optional parameters to customize the price draft.
 * @param {string} [options.currency] - Set manually the provided currency code for all money values if provided.
 * @returns {TStandalonePriceDraftBuilder} A standalone price draft builder.
 *
 * @example
 * const standalonePriceDraft = StandalonePriceDraft.presets.full().buildGraphql();
 * const standalonePriceDraft = StandalonePriceDraft.presets.full({currency: 'EUR'}).buildGraphql();
 */
const full = (options?: {
  currency?: string;
}): TStandalonePriceDraftBuilder => {
  const draftValue = MoneyDraft.random();

  if (options?.currency) {
    draftValue.currencyCode(options.currency);
  }

  return StandalonePriceDraft()
    .value(draftValue)
    .tiers([
      PriceTierDraft.random(),
      PriceTierDraft.random(),
      PriceTierDraft.random(),
    ])
    .staged(StagedPriceDraft.random());
};

export default full;
