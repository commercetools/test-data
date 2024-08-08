import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
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

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const squareBambooCoasterProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .kitchen()
  .build<TCategoryDraft>();

const barAccessoriesDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .barAccessories()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .barAndGlassware()
  .build<TCategoryDraft>();

const squareBambooCoaster = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('square-bamboo-coaster')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Square Bamboo Coaster')
        ['en-GB']('Square Bamboo Coaster')
        ['de-DE']('Quadratischer Untersetzer aus Bambus')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Der quadratische Untersetzer aus Bambus besteht aus einer kleinen Matte mit großer Wirkung, da sie Oberflächen vor Wasserflecken oder Beschädigungen durch Trinkgläser oder Tassen schützt. Er besteht aus natürlichem Bambusmaterial und hat eine glatte Oberfläche. Der Untersetzer hat eine quadratische Form mit leicht abgerundeten Kanten und misst etwa 3,5 Zoll x 3,5 Zoll. Seine leichte und strapazierfähige Beschaffenheit macht ihn zu einer beliebten Wahl für legere und formelle Anlässe gleichermaßen.')
        [
          'en-GB'
        ]('A square bamboo coaster is a small mat used to protect surfaces from water stains or damage caused by drinking glasses or mugs. It is made of natural bamboo material and has a smooth surface. The coaster is square in shape with slightly rounded edges, and measures approximately 3.5 inches by 3.5 inches. Its lightweight and durable nature make it a popular choice for casual and formal occasions alike.')
        [
          'en-US'
        ]('A square bamboo coaster is a small mat used to protect surfaces from water stains or damage caused by drinking glasses or mugs. It is made of natural bamboo material and has a smooth surface. The coaster is square in shape with slightly rounded edges, and measures approximately 3.5 inches by 3.5 inches. Its lightweight and durable nature make it a popular choice for casual and formal occasions alike.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('square-bamboo-coaster')
        ['en-GB']('square-bamboo-coaster')
        ['de-DE']('quadratischer-untersetzer-aus-bambus')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(squareBambooCoasterProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.squareBambooCoaster01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
      KeyReferenceDraft.presets.category().key(barAccessoriesDraft.key!),
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
    ]);

export default squareBambooCoaster;
