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

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const naturaRugProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodstore
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

const naturaRug = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('natura-rug')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Natura Rug')
        ['de-DE']('Natura Teppich')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('natura-rug')
        ['de-DE']('natura-teppich')
    )
    .productType(
      KeyReference.presets.productType().key(naturaRugProductTypeDraft.key!)
    )
    .publish(false)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.naturaRug01()
    )
    .categories([
      KeyReference.presets.category().key(rugsDraft.key!),
      KeyReference.presets.category().key(roomDecorDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default naturaRug;
