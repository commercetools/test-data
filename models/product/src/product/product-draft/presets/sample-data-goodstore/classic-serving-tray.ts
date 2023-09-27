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

const classicServingTrayProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const servingPlattersDraft = CategoryDraft.presets.sampleDataGoodstore
  .servingPlatters()
  .build<TCategoryDraft>();

const servewareDraft = CategoryDraft.presets.sampleDataGoodstore
  .serveware()
  .build<TCategoryDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataGoodstore
  .dinnerware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodstore
  .kitchen()
  .build<TCategoryDraft>();

const classicServingTray = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('classic-serving-tray')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Classic Serving Tray')
        ['de-DE']('Klassisches Serviertablett')
        ['en-US']('Classic Serving Tray')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('classic-serving-tray')
        ['de-DE']('klassisches-serviertablett')
        ['en-US']('classic-serving-tray')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(classicServingTrayProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.classicServingTray01()
    )
    .categories([
      KeyReference.presets.category().key(servingPlattersDraft.key!),
      KeyReference.presets.category().key(servewareDraft.key!),
      KeyReference.presets.category().key(dinnerwareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default classicServingTray;