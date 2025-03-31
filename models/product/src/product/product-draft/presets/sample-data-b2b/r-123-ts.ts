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
import { ProductVariantDraft } from '../../../../product-variant';
import { productPriceMode } from '../../../constants';
import { ProductDraft } from '../../../index';
import type { TProductDraft } from '../../../types';

const standardTaxTaxCategory = TaxCategoryDraft.presets.sampleDataB2B
  .standardTax()
  .build<TTaxCategoryDraft>();

const heavyEarthmovingAndConstructionEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyEarthmovingAndConstructionEquipment()
    .build<TProductTypeDraft>();

const surfaceMiningExcavatorsCategory = CategoryDraft.presets.sampleDataB2B
  .surfaceMiningExcavators()
  .build<TCategoryDraft>();

const r123Ts = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('r123-ts')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('R123 TS Oberflächenbergbaubagger')
        ['it-IT']('R123 TS Escavatore per Miniere di Superficie')
        ['nl-NL']('R123 TS Oppervlakte Mijnbouw Graafmachine')
        ['fr-FR']('R123 TS Excavateur minier de surface')
        ['en-AU']('R123 TS Surface Mining Excavator')
        ['es-ES']('R123 TS Excavadora minera de superficie')
        ['en-GB']('R123 TS Surface Mining Excavator')
        ['en-NZ']('R123 TS Surface Mining Excavator')
        ['pt-PT']('R123 TS Escavadeira para Mineração de Superfície')
        ['en-US']('R123 TS Surface Mining Excavator')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Leistungsstarker Oberflächenbergbaubagger für den Großbergbau konzipiert.')
        [
          'it-IT'
        ]('Potente escavatore per miniere di superficie progettato per operazioni di estrazione su larga scala.')
        [
          'nl-NL'
        ]('Krachtige oppervlakte mijnbouw graafmachine ontworpen voor grootschalige mijnbouwoperaties.')
        [
          'fr-FR'
        ]('Excavateur minier de surface puissant conçu pour les opérations minières à grande échelle.')
        [
          'en-AU'
        ]('Powerful surface mining excavator designed for large-scale mining operations.')
        [
          'es-ES'
        ]('Excavadora minera de superficie potente diseñada para operaciones mineras a gran escala.')
        [
          'en-GB'
        ]('Powerful surface mining excavator designed for large-scale mining operations.')
        [
          'en-NZ'
        ]('Powerful surface mining excavator designed for large-scale mining operations.')
        [
          'pt-PT'
        ]('Escavadeira potente para mineração de superfície projetada para operações de mineração em grande escala.')
        [
          'en-US'
        ]('Powerful surface mining excavator designed for large-scale mining operations.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('r123-ts')
        ['it-IT']('r123-ts')
        ['nl-NL']('r123-ts')
        ['fr-FR']('r123-ts')
        ['en-AU']('r123-ts')
        ['es-ES']('r123-ts')
        ['en-GB']('r123-ts')
        ['en-NZ']('r123-ts')
        ['pt-PT']('r123-ts')
        ['en-US']('r123-ts')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(heavyEarthmovingAndConstructionEquipmentProductType.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxTaxCategory.key!)
    )
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.r123Ts01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.r123Ts02(),
      ProductVariantDraft.presets.sampleDataB2B.r123Ts03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(surfaceMiningExcavatorsCategory.key!),
    ]);

export default r123Ts;
