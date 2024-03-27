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
import { ProductVariantDraft } from '../../../../product-variant';
import { productPriceMode } from '../../../constants';
import { ProductDraft } from '../../../index';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxTaxCategory = TaxCategoryDraft.presets.sampleDataB2B
  .standardTax()
  .build<TTaxCategoryDraft>();

const genericProductProductType = ProductTypeDraft.presets.sampleDataB2B
  .genericProduct()
  .build<TProductTypeDraft>();

const sparePartsCategory = CategoryDraft.presets.sampleDataB2B
  .spareParts()
  .build<TCategoryDraft>();

const pneumaticTire = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('pneumatic-tire')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Luftreifen')
        ['it-IT']('Pneumatico pneumatico')
        ['nl-NL']('Luchtband')
        ['fr-FR']('Pneu pneumatique')
        ['es-ES']('Neumático neumático')
        ['pt-PT']('Pneu pneumático')
        ['en-US']('Pneumatic Tire')
        ['en-GB']('Pneumatic Tire')
        ['en-AU']('Pneumatic Tire')
        ['en-NZ']('Pneumatic Tire')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Gummireifen für Lader und Lkw.')
        ['it-IT']('Pneumatico in gomma per caricatori e camion.')
        ['nl-NL']('Rubberen band voor laders en vrachtwagens.')
        ['fr-FR']('Pneu en caoutchouc pour chargeurs et camions.')
        ['es-ES']('Neumático de goma para cargadores y camiones.')
        ['pt-PT']('Pneu de borracha para carregadeiras e caminhões.')
        ['en-US']('Rubber tire for loaders and trucks.')
        ['en-GB']('Rubber tire for loaders and trucks.')
        ['en-AU']('Rubber tire for loaders and trucks.')
        ['en-NZ']('Rubber tire for loaders and trucks.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('pneumatic-tire')
        ['it-IT']('pneumatic-tire')
        ['nl-NL']('pneumatic-tire')
        ['fr-FR']('pneumatic-tire')
        ['es-ES']('pneumatic-tire')
        ['pt-PT']('pneumatic-tire')
        ['en-US']('pneumatic-tire')
        ['en-GB']('pneumatic-tire')
        ['en-AU']('pneumatic-tire')
        ['en-NZ']('pneumatic-tire')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(genericProductProductType.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxTaxCategory.key!)
    )
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.pneumaticTire01())
    .categories([
      KeyReferenceDraft.presets.category().key(sparePartsCategory.key!),
    ]);

export default pneumaticTire;
