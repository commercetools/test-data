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

const largeCeramicPlateProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const platesDraft = CategoryDraft.presets.sampleDataGoodStore
  .plates()
  .build<TCategoryDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataGoodStore
  .dinnerware()
  .build<TCategoryDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataGoodStore
  .newArrivals()
  .build<TCategoryDraft>();

const largeCeramicPlate = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('large-ceramic-plate')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Large Ceramic Plate')
        ['de-DE']('Große Keramikplatte')
        ['en-US']('Large Ceramic Plate')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('large-ceramic-plate')
        ['de-DE']('groe-keramikplatte')
        ['en-US']('large-ceramic-plate')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(largeCeramicPlateProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.largeCeramicPlate01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodStore.largeCeramicPlate01(),
    ])
    .categories([
      KeyReference.presets.category().key(kitchenDraft.key!),
      KeyReference.presets.category().key(platesDraft.key!),
      KeyReference.presets.category().key(dinnerwareDraft.key!),
      KeyReference.presets.category().key(newArrivalsDraft.key!),
    ]);

export default largeCeramicPlate;
