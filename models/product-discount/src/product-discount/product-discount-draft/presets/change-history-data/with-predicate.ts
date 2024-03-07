import * as ProductDiscountValueAbsoluteDraft from '../../../../product-discount-value-absolute';
import * as ProductDiscountValueExternalDraft from '../../../../product-discount-value-external';
import * as ProductDiscountValueRelativeDraft from '../../../../product-discount-value-relative';
import type { TProductDiscountDraftBuilder } from '../../../types';
import * as ProductDiscountDraft from '../../index';

const withPredicate = (): TProductDiscountDraftBuilder => {
  const valueOptions = [
    ProductDiscountValueAbsoluteDraft.draftPresets.changeHistoryData.withUsdCurrencyCode(),
    ProductDiscountValueRelativeDraft.random(),
    ProductDiscountValueExternalDraft.random(),
  ];

  const randomIndex = Math.floor(Math.random() * valueOptions.length);
  const randomValue = valueOptions[randomIndex];

  return ProductDiscountDraft.random()
    .predicate('sku = "this-should-never-match-an-e2e"')
    .value(randomValue);
};

export default withPredicate;
