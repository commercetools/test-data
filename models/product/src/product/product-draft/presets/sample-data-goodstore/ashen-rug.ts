import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@commercetools-test-data/product-type';
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const vatStandardEuDraft = TaxCategoryDraft.presets.sampleDataGoodstore
  .vatStandardEu()
  .build<TTaxCategoryDraft>();

const ashenRugProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodstore
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const rugsDraft = CategoryDraft.presets.sampleDataGoodstore
  .rugs()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataGoodstore
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodstore
  .homeDecor()
  .build<TCategoryDraft>();

const ashenRug = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('ashen-rug')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Ashen Rug')
        ['de-DE']('Ashen Teppich')
        ['en-US']('Ashen Rug')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('ashen-rug')
        ['de-DE']('ashen-teppich')
        ['en-US']('ashen-rug')
    )
    .productType(
      KeyReference.presets.productType().key(ashenRugProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(ProductVariantDraft.presets.sampleDataGoodstore.ashenRug01())
    .categories([
      KeyReference.presets.category().key(rugsDraft.key!),
      KeyReference.presets.category().key(roomDecorDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default ashenRug;