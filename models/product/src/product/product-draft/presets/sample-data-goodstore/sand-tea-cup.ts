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

const sandTeaCupProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodStore
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const glasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .glassware()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .barAndGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const sandTeaCup = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('sand-tea-cup')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Sand Tea Cup')
        ['en-GB']('Sand Tea Cup')
        ['de-DE']('Sand-Teetasse')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('sand-tea-cup')
        ['en-GB']('sand-tea-cup')
        ['de-DE']('sand-teetasse')
    )
    .productType(
      KeyReference.presets.productType().key(sandTeaCupProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.sandTeaCup01()
    )
    .categories([
      KeyReference.presets.category().key(glasswareDraft.key!),
      KeyReference.presets.category().key(barAndGlasswareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default sandTeaCup;
