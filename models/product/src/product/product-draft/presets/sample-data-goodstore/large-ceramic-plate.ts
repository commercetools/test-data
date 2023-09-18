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

const euDraft = TaxCategoryDraft.presets.sampleDataGoodstore
  .eu()
  .build<TTaxCategoryDraft>();

const largeCeramicPlateProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodstore
  .kitchen()
  .build<TCategoryDraft>();

const platesDraft = CategoryDraft.presets.sampleDataGoodstore
  .plates()
  .build<TCategoryDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataGoodstore
  .dinnerware()
  .build<TCategoryDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataGoodstore
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
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('large-ceramic-plate')
        ['de-DE']('groe-keramikplatte')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(largeCeramicPlateProductTypeDraft.key!)
    )
    .publish(false)
    .taxCategory(KeyReference.presets.taxCategory().key(euDraft.key!))
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.largeCeramicPlate01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodstore.largeCeramicPlate01(),
    ])
    .categories([
      KeyReference.presets.category().key(kitchenDraft.key!),
      KeyReference.presets.category().key(platesDraft.key!),
      KeyReference.presets.category().key(dinnerwareDraft.key!),
      KeyReference.presets.category().key(newArrivalsDraft.key!),
    ]);

export default largeCeramicPlate;
