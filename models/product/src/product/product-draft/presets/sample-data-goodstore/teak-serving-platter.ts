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

const teakServingPlatterProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const cheeseTraysDraft = CategoryDraft.presets.sampleDataGoodStore
  .cheeseTrays()
  .build<TCategoryDraft>();

const servingPlattersDraft = CategoryDraft.presets.sampleDataGoodStore
  .servingPlatters()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const servewareDraft = CategoryDraft.presets.sampleDataGoodStore
  .serveware()
  .build<TCategoryDraft>();

const teakServingPlatter = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('teak-serving-platter')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Teak Serving Platter')
        ['de-DE']('Servierplatte aus Teakholz')
        ['en-US']('Teak Serving Platter')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('teak-serving-platter')
        ['de-DE']('servierplatte-aus-teakholz')
        ['en-US']('teak-serving-platter')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(teakServingPlatterProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.teakServingPlatter01()
    )
    .categories([
      KeyReference.presets.category().key(cheeseTraysDraft.key!),
      KeyReference.presets.category().key(servingPlattersDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
      KeyReference.presets.category().key(servewareDraft.key!),
    ]);

export default teakServingPlatter;
