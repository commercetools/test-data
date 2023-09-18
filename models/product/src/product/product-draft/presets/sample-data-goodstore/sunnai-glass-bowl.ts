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

const sunnaiGlassBowlProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .productSets()
    .build<TProductTypeDraft>();

const bowlsDraft = CategoryDraft.presets.sampleDataGoodstore
  .bowls()
  .build<TCategoryDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataGoodstore
  .dinnerware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodstore
  .kitchen()
  .build<TCategoryDraft>();

const bakewareDraft = CategoryDraft.presets.sampleDataGoodstore
  .bakeware()
  .build<TCategoryDraft>();

const sunnaiGlassBowl = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('sunnai-glass-bowl')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Sunnai Glass Bowl')
        ['de-DE']('Sunnai Glaskugel')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('sunnai-glass-bowl')
        ['de-DE']('sunnai-glaskugel')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(sunnaiGlassBowlProductTypeDraft.key!)
    )
    .publish(false)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.sunnaiGlassBowl01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodstore.sunnaiGlassBowl01(),
    ])
    .categories([
      KeyReference.presets.category().key(bowlsDraft.key!),
      KeyReference.presets.category().key(dinnerwareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
      KeyReference.presets.category().key(bakewareDraft.key!),
    ]);

export default sunnaiGlassBowl;
