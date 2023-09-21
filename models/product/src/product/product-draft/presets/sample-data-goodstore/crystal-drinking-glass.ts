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

const crystalDrinkingGlassProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const glasswareDraft = CategoryDraft.presets.sampleDataGoodstore
  .glassware()
  .build<TCategoryDraft>();

const barGlasswareDraft = CategoryDraft.presets.sampleDataGoodstore
  .barGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodstore
  .kitchen()
  .build<TCategoryDraft>();

const crystalDrinkingGlass = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('crystal-drinking-glass')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Crystal Drinking Glass')
        ['de-DE']('Kristall-Trinkglas')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('crystal-drinking-glass')
        ['de-DE']('kristall-trinkglas')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(crystalDrinkingGlassProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.crystalDrinkingGlass01()
    )
    .categories([
      KeyReference.presets.category().key(glasswareDraft.key!),
      KeyReference.presets.category().key(barGlasswareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default crystalDrinkingGlass;
