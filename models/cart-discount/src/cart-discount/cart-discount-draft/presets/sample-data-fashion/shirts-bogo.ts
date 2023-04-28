import { LocalizedString } from '@commercetools-test-data/commons';
import {
  ProductTypeDraft,
  TProductTypeDraft,
} from '@commercetools-test-data/product-type';
import * as CartDiscountDraft from '../..';
import {
  CartDiscountMultiBuyLineItemsTargetDraft,
  CartDiscountValueRelativeDraft,
  selectionMode,
} from '../../../..';
import { stackingMode } from '../../../constants';
import { TCartDiscountDraftBuilder } from '../../../types';

const productTypeDraft = ProductTypeDraft.presets.sampleDataFashion
  .shirts()
  .build<TProductTypeDraft>();

const shirtsBogo = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .value(CartDiscountValueRelativeDraft.random().permyriad(10000))
    .cartPredicate('1 = 1')
    .target(
      CartDiscountMultiBuyLineItemsTargetDraft.random()
        .predicate(`productType.key = "${productTypeDraft.key}"`)
        .triggerQuantity(2)
        .discountedQuantity(1)
        .selectionMode(selectionMode.Cheapest)
        .maxOccurrence(undefined)
    )
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Buy One Shirt and Get Second Free')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US']('Two for one on all Shirts (discount on the cheapest item)')
    )
    .stackingMode(stackingMode.Stacking)
    .isActive(true)
    .requiresDiscountCode(true)
    .sortOrder('0.2')
    .key('ShirtsBOGO');

export default shirtsBogo;
