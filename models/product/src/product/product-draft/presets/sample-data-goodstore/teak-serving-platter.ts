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

const teakServingPlatterProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const cheeseTraysDraft = CategoryDraft.presets.sampleDataGoodstore
  .cheeseTrays()
  .build<TCategoryDraft>();

const servingPlattersDraft = CategoryDraft.presets.sampleDataGoodstore
  .servingPlatters()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodstore
  .kitchen()
  .build<TCategoryDraft>();

const servewareDraft = CategoryDraft.presets.sampleDataGoodstore
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
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('teak-serving-platter')
        ['de-DE']('servierplatte-aus-teakholz')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(teakServingPlatterProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.teakServingPlatter01()
    )
    .categories([
      KeyReference.presets.category().key(cheeseTraysDraft.key!),
      KeyReference.presets.category().key(servingPlattersDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
      KeyReference.presets.category().key(servewareDraft.key!),
    ]);

export default teakServingPlatter;
