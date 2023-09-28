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

const classicServingTrayProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const servingPlattersDraft = CategoryDraft.presets.sampleDataGoodStore
  .servingPlatters()
  .build<TCategoryDraft>();

const servewareDraft = CategoryDraft.presets.sampleDataGoodStore
  .serveware()
  .build<TCategoryDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataGoodStore
  .dinnerware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const classicServingTray = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('classic-serving-tray')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Classic Serving Tray')
        ['en-GB']('Classic Serving Tray')
        ['de-DE']('Klassisches Serviertablett')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('classic-serving-tray')
        ['en-GB']('classic-serving-tray')
        ['de-DE']('klassisches-serviertablett')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(classicServingTrayProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.classicServingTray01()
    )
    .categories([
      KeyReference.presets.category().key(servingPlattersDraft.key!),
      KeyReference.presets.category().key(servewareDraft.key!),
      KeyReference.presets.category().key(dinnerwareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default classicServingTray;
