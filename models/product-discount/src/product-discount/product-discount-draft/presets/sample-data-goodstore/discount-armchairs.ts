import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import { LocalizedString } from '@commercetools-test-data/commons';
import { ProductDiscountValueRelativeDraft } from '../../../../index';
import type { TProductDiscountDraftBuilder } from '../../../types';
import * as ProductDiscountDraft from '../../index';

const categoryTypeDraft = CategoryDraft.presets.sampleDataGoodStore
  .armchairs()
  .build<TCategoryDraft>();

const discountNewArrivals = (): TProductDiscountDraftBuilder =>
  ProductDiscountDraft.presets
    .empty()
    .value(ProductDiscountValueRelativeDraft.random().permyriad(1500))
    .predicate(`categories.key contains "${categoryTypeDraft.key}"`)
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('15% Off All Armchairs')
        ['en-GB']('15% Off All Armchairs')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US']('15% Off All Armchairs')
        ['en-GB']('15% Off All Armchairs')
    )
    .isActive(true)
    .sortOrder('0.67')
    .key('NewArrivals15pctOff');

export default discountNewArrivals;
