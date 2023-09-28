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
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import * as ProductVariantDraft from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const meadowRugProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodStore
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .roomDecor()
  .build<TCategoryDraft>();

const rugsDraft = CategoryDraft.presets.sampleDataGoodStore
  .rugs()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeDecor()
  .build<TCategoryDraft>();

const meadowRug = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('meadow-rug')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Meadow Rug')
        ['de-DE']('Meadow Teppich')
        ['en-US']('Meadow Rug')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('meadow-rug')
        ['de-DE']('meadow-teppich')
        ['en-US']('meadow-rug')
    )
    .productType(
      KeyReference.presets.productType().key(meadowRugProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.meadowRug01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodStore.meadowRug02(),
      ProductVariantDraft.presets.sampleDataGoodStore.meadowRug03(),
    ])
    .categories([
      KeyReference.presets.category().key(roomDecorDraft.key!),
      KeyReference.presets.category().key(rugsDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default meadowRug;
