import { LocalizedStringDraft } from '../../../../../commons';
import {
  ProductTypeDraft,
  TProductTypeDraft,
} from '../../../../../product-type';
import {
  CartDiscountMultiBuyLineItemsTargetDraft,
  CartDiscountValueRelativeDraft,
  selectionMode,
} from '../../../../index';
import { stackingMode } from '../../../constants';
import type { TCartDiscountDraftBuilder } from '../../../types';
import * as CartDiscountDraft from '../../index';

const productTypeDraft = ProductTypeDraft.presets.sampleDataB2CLifestyle
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const furnitureBogo = (): TCartDiscountDraftBuilder =>
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
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Buy One Item of Furniture and Receive the Second for Free')
        ['en-GB']('Buy One Item of Furniture and Receive the Second for Free')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-US'
        ]('Two for one on all furniture items (discount on the cheapest item)')
        [
          'en-GB'
        ]('Two for one on all furniture items (discount on the cheapest item)')
    )
    .stackingMode(stackingMode.Stacking)
    .isActive(true)
    .requiresDiscountCode(true)
    .sortOrder('0.15')
    .key('FurnitureBOGO');

export default furnitureBogo;
