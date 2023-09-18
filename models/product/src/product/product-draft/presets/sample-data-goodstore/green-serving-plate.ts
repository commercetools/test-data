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

const greenServingPlateProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataGoodstore
  .dinnerware()
  .build<TCategoryDraft>();

const platesDraft = CategoryDraft.presets.sampleDataGoodstore
  .plates()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodstore
  .kitchen()
  .build<TCategoryDraft>();

const servingPlattersDraft = CategoryDraft.presets.sampleDataGoodstore
  .servingPlatters()
  .build<TCategoryDraft>();

const greenServingPlate = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('green-serving-plate')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Green Serving Plate')
        ['de-DE']('Grüne Servierplatte')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('green-serving-plate')
        ['de-DE']('grne-servierplatte')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(greenServingPlateProductTypeDraft.key!)
    )
    .publish(false)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.greenServingPlate01()
    )
    .categories([
      KeyReference.presets.category().key(dinnerwareDraft.key!),
      KeyReference.presets.category().key(platesDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
      KeyReference.presets.category().key(servingPlattersDraft.key!),
    ]);

export default greenServingPlate;
