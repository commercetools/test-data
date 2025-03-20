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

const hydraulicHose = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('hydraulic-hose')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Hydraulikschlauch')
        ['it-IT']('Tubo idraulico')
        ['nl-NL']('Hydraulische slang')
        ['fr-FR']('Tuyau hydraulique')
        ['es-ES']('Manguera hidráulica')
        ['pt-PT']('Mangueira hidráulica')
        ['en-US']('Hydraulic Hose')
        ['en-GB']('Hydraulic Hose')
        ['en-AU']('Hydraulic Hose')
        ['en-NZ']('Hydraulic Hose')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Flexibler Schlauch zum Übertragen von Hydraulikflüssigkeit zwischen Komponenten.')
        [
          'it-IT'
        ]('Tubo flessibile per convogliare il fluido idraulico tra i componenti.')
        [
          'nl-NL'
        ]('Flexibele slang voor het overbrengen van hydraulische vloeistof tussen componenten.')
        [
          'fr-FR'
        ]('Tuyau flexible pour transporter le fluide hydraulique entre les composants.')
        [
          'es-ES'
        ]('Manguera flexible para transportar fluido hidráulico entre componentes.')
        [
          'pt-PT'
        ]('Mangueira flexível para conduzir fluido hidráulico entre componentes.')
        ['en-US']('Flexible hose to convey hydraulic fluid between components.')
        ['en-GB']('Flexible hose to convey hydraulic fluid between components.')
        ['en-AU']('Flexible hose to convey hydraulic fluid between components.')
        ['en-NZ']('Flexible hose to convey hydraulic fluid between components.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('hydraulic-hose')
        ['it-IT']('hydraulic-hose')
        ['nl-NL']('hydraulic-hose')
        ['fr-FR']('hydraulic-hose')
        ['es-ES']('hydraulic-hose')
        ['pt-PT']('hydraulic-hose')
        ['en-US']('hydraulic-hose')
        ['en-GB']('hydraulic-hose')
        ['en-AU']('hydraulic-hose')
        ['en-NZ']('hydraulic-hose')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.hydraulicHose01())
    .categories([
      KeyReferenceDraft.presets.category().key(sparePartsCategory.key!),
    ]);

export default hydraulicHose;
