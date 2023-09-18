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

const opalKingBedProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodstore
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .bedroomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .furniture()
  .build<TCategoryDraft>();

const bedsDraft = CategoryDraft.presets.sampleDataGoodstore
  .beds()
  .build<TCategoryDraft>();

const opalKingBed = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('opal-king-bed')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Opal King Bed')
        ['de-DE']('Opal Kingsize-Bett')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('opal-king-bed')
        ['de-DE']('opal-kingsize-bett')
    )
    .productType(
      KeyReference.presets.productType().key(opalKingBedProductTypeDraft.key!)
    )
    .publish(false)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.opalKingBed01()
    )
    .categories([
      KeyReference.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(bedsDraft.key!),
    ]);

export default opalKingBed;
