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

const marquisTrayProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodStore
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const platesDraft = CategoryDraft.presets.sampleDataGoodStore
  .plates()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const servingPlattersDraft = CategoryDraft.presets.sampleDataGoodStore
  .servingPlatters()
  .build<TCategoryDraft>();

const servewareDraft = CategoryDraft.presets.sampleDataGoodStore
  .serveware()
  .build<TCategoryDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataGoodStore
  .dinnerware()
  .build<TCategoryDraft>();

const cheeseTraysDraft = CategoryDraft.presets.sampleDataGoodStore
  .cheeseTrays()
  .build<TCategoryDraft>();

const marquisTray = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('marquis-tray')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Marquis Tray')
        ['en-GB']('Marquis Tray')
        ['de-DE']('Marquis Tablett')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('marquis-tray')
        ['en-GB']('marquis-tray')
        ['de-DE']('marquis-tablett')
    )
    .productType(
      KeyReference.presets.productType().key(marquisTrayProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.marquisTray01()
    )
    .categories([
      KeyReference.presets.category().key(platesDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
      KeyReference.presets.category().key(servingPlattersDraft.key!),
      KeyReference.presets.category().key(servewareDraft.key!),
      KeyReference.presets.category().key(dinnerwareDraft.key!),
      KeyReference.presets.category().key(cheeseTraysDraft.key!),
    ]);

export default marquisTray;
