import { LocalizedString, Money } from '@commercetools-test-data/commons';
import {
  ProductTypeDraft,
  TProductTypeDraft,
} from '@commercetools-test-data/product-type';
import { ProductDiscountValueAbsoluteDraft } from '../../../../index';
import type { TProductDiscountDraftBuilder } from '../../../types';
import * as ProductDiscountDraft from '../../index';

const productTypeDraft = ProductTypeDraft.presets.sampleDataGoodStore
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const discountFurnitureAndDecor = (): TProductDiscountDraftBuilder =>
  ProductDiscountDraft.presets
    .empty()
    .value(
      ProductDiscountValueAbsoluteDraft.random().money([
        Money.random().currencyCode('USD').centAmount(1000),
      ])
    )
    .predicate(`productType.key = "${productTypeDraft.key}"`)
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('10 USD Off All Furniture & Decor')
        ['en-GB']('10 USD Off All Furniture & Decor')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US']('10 USD Off All Furniture & Decor')
        ['en-GB']('10 USD Off All Furniture & Decor')
    )
    .isActive(true)
    .sortOrder('0.2')
    .key('FurnitureDecor10USDOff');

export default discountFurnitureAndDecor;
