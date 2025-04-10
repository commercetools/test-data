import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@commercetools-test-data/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import { productPriceMode } from '../../../constants';
import type { TProductDraft } from '../../../types';
import { ProductDraft } from '../../index';

const standardTaxTaxCategory = TaxCategoryDraft.presets.sampleDataB2B
  .standardTax()
  .build<TTaxCategoryDraft>();

const genericProductProductType = ProductTypeDraft.presets.sampleDataB2B
  .genericProduct()
  .build<TProductTypeDraft>();

const sparePartsCategory = CategoryDraft.presets.sampleDataB2B
  .spareParts()
  .build<TCategoryDraft>();

const pinAndBushingKit = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('pin-and-bushing-kit')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Stift- und Buchsensatz')
        ['it-IT']('Kit di perni e boccole')
        ['nl-NL']('Pen- en bussenset')
        ['fr-FR']('Kit de goupilles et de bagues')
        ['es-ES']('Kit de pasadores y casquillos')
        ['pt-PT']('Kit de pinos e buchas')
        ['en-US']('Pin and Bushing Kit')
        ['en-GB']('Pin and Bushing Kit')
        ['en-AU']('Pin and Bushing Kit')
        ['en-NZ']('Pin and Bushing Kit')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Für Gelenke in Armen und Schaufeln von Baggern und Ladern.')
        ['it-IT']('Per giunti su bracci e benne di escavatori e caricatrici.')
        [
          'nl-NL'
        ]('Voor gewrichten in armen en bakken van graafmachines en laders.')
        [
          'fr-FR'
        ]('Pour les articulations des bras et des godets des excavatrices et des chargeurs.')
        [
          'es-ES'
        ]('Para articulaciones en brazos y cucharones de excavadoras y cargadoras.')
        [
          'pt-PT'
        ]('Para articulações em braços e baldes de escavadeiras e carregadeiras.')
        ['en-US']('For joints in arms and buckets of excavators and loaders.')
        ['en-GB']('For joints in arms and buckets of excavators and loaders.')
        ['en-AU']('For joints in arms and buckets of excavators and loaders.')
        ['en-NZ']('For joints in arms and buckets of excavators and loaders.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('pin-and-bushing-kit')
        ['it-IT']('pin-and-bushing-kit')
        ['nl-NL']('pin-and-bushing-kit')
        ['fr-FR']('pin-and-bushing-kit')
        ['es-ES']('pin-and-bushing-kit')
        ['pt-PT']('pin-and-bushing-kit')
        ['en-US']('pin-and-bushing-kit')
        ['en-GB']('pin-and-bushing-kit')
        ['en-AU']('pin-and-bushing-kit')
        ['en-NZ']('pin-and-bushing-kit')
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
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2B.pinAndBushingKit01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(sparePartsCategory.key!),
    ]);

export default pinAndBushingKit;
