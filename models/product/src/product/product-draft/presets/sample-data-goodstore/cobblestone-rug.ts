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

const vatStandardEuDraft = TaxCategoryDraft.presets.sampleDataGoodStore
  .vatStandardEu()
  .build<TTaxCategoryDraft>();

const cobblestoneRugProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const rugsDraft = CategoryDraft.presets.sampleDataGoodStore
  .rugs()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeDecor()
  .build<TCategoryDraft>();

const cobblestoneRug = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('cobblestone-rug')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Cobblestone Rug')
        ['de-DE']('Kopfsteinpflaster')
        ['en-US']('Cobblestone Rug')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('cobblestone-rug')
        ['de-DE']('kopfsteinpflaster')
        ['en-US']('cobblestone-rug')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(cobblestoneRugProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.cobblestoneRug01()
    )
    .categories([
      KeyReference.presets.category().key(rugsDraft.key!),
      KeyReference.presets.category().key(roomDecorDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default cobblestoneRug;
