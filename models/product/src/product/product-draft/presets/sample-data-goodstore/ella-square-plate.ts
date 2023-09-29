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

const ellaSquarePlateProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
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

const ellaSquarePlate = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('ella-square-plate')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Ella Square Plate')
        ['en-GB']('Ella Square Plate')
        ['de-DE']('Quadratischer Teller "Ella"')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('ella-square-plate')
        ['en-GB']('ella-square-plate')
        ['de-DE']('ella-quadratische-platte')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(ellaSquarePlateProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.ellaSquarePlate01()
    )
    .categories([
      KeyReference.presets.category().key(platesDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
      KeyReference.presets.category().key(servingPlattersDraft.key!),
      KeyReference.presets.category().key(servewareDraft.key!),
      KeyReference.presets.category().key(dinnerwareDraft.key!),
    ]);

export default ellaSquarePlate;
