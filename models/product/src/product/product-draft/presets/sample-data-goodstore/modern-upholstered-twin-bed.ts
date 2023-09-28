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
import { ProductVariantDraft } from '../../../../product-variant/index';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const modernUpholsteredTwinBedProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .furniture()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataGoodstore
  .collections()
  .build<TCategoryDraft>();

const bedsDraft = CategoryDraft.presets.sampleDataGoodstore
  .beds()
  .build<TCategoryDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .bedroomFurniture()
  .build<TCategoryDraft>();

const theModernistDraft = CategoryDraft.presets.sampleDataGoodstore
  .theModernist()
  .build<TCategoryDraft>();

const modernUpholsteredTwinBed = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('modern-upholstered-twin-bed')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Modern Upholstered Twin Bed')
        ['de-DE']('Modernes gepolstertes Einzelbett')
        ['en-US']('Modern Upholstered Twin Bed')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('modern-upholstered-twin-bed')
        ['de-DE']('modernes-gepolstertes-einzelbett')
        ['en-US']('modern-upholstered-twin-bed')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(modernUpholsteredTwinBedProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.modernUpholsteredTwinBed01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodStore.modernUpholsteredTwinBed01(),
      ProductVariantDraft.presets.sampleDataGoodStore.modernUpholsteredTwinBed01(),
      ProductVariantDraft.presets.sampleDataGoodStore.modernUpholsteredTwinBed01(),
    ])
    .categories([
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(collectionsDraft.key!),
      KeyReference.presets.category().key(bedsDraft.key!),
      KeyReference.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReference.presets.category().key(theModernistDraft.key!),
    ]);

export default modernUpholsteredTwinBed;
