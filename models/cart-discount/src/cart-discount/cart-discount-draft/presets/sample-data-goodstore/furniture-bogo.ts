import { LocalizedString } from '@commercetools-test-data/commons';
// TODO: Import when available
// import {
//   ProductTypeDraft,
//   TProductTypeDraft,
// } from '@commercetools-test-data/product-type';
import {
  CartDiscountMultiBuyLineItemsTargetDraft,
  CartDiscountValueRelativeDraft,
  selectionMode,
} from '../../../../index';
import { stackingMode } from '../../../constants';
import type { TCartDiscountDraftBuilder } from '../../../types';
import * as CartDiscountDraft from '../../index';

// TODO: Need product type draft to be created
// const productTypeDraft = ProductTypeDraft.presets.sampleDataGoodStore
//   .furniture()
//   .build<TProductTypeDraft>();

const furnitureBogo = (): TCartDiscountDraftBuilder =>
  CartDiscountDraft.presets
    .empty()
    .value(CartDiscountValueRelativeDraft.random().permyriad(10000))
    .cartPredicate('1 = 1')
    .target(
      CartDiscountMultiBuyLineItemsTargetDraft.random()
        // TODO: insert when available
        // .predicate(`productType.key = "${productTypeDraft.key}"`)
        .predicate(`productType.key = "placeholder"`)
        .triggerQuantity(2)
        .discountedQuantity(1)
        .selectionMode(selectionMode.Cheapest)
        .maxOccurrence(undefined)
    )
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Buy One Item of Furniture and Receive the Second for Free')
        ['en-GB']('Buy One Item of Furniture and Receive the Second for Free')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US'](
          'Two for one on all furniture items (discount on the cheapest item)'
        )
        ['en-GB'](
          'Two for one on all furniture items (discount on the cheapest item)'
        )
    )
    .stackingMode(stackingMode.Stacking)
    .isActive(true)
    .requiresDiscountCode(true)
    .sortOrder('0.15')
    .key('FurnitureBOGO');

export default furnitureBogo;
