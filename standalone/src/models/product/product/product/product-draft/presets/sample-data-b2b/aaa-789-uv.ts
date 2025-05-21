import { TBuilder } from '@/core';
import { CategoryDraft, TCategoryDraft } from '@/models/category';
import { KeyReferenceDraft, LocalizedStringDraft } from '@/models/commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@/models/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@/models/tax-category';
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import { productPriceMode } from '../../../constants';
import type { TProductDraft } from '../../../types';
import { ProductDraft } from '../../index';

const standardTaxTaxCategory = TaxCategoryDraft.presets.sampleDataB2B
  .standardTax()
  .build<TTaxCategoryDraft>();

const heavyLiftingAndSpecializedEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyLiftingAndSpecializedEquipment()
    .build<TProductTypeDraft>();

const explorationDrillsCategory = CategoryDraft.presets.sampleDataB2B
  .explorationDrills()
  .build<TCategoryDraft>();

const aaa789Uv = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('aaa789-uv')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('AAA789 UV Erkundungsbohrer')
        ['it-IT']('AAA789 UV Trapano per Esplorazione')
        ['nl-NL']('AAA789 UV Exploratieboor')
        ['fr-FR']("AAA789 UV Forage d'exploration")
        ['en-AU']('AAA789 UV Exploration Drill')
        ['es-ES']('AAA789 UV Perforadora de exploración')
        ['en-GB']('AAA789 UV Exploration Drill')
        ['en-NZ']('AAA789 UV Exploration Drill')
        ['pt-PT']('AAA789 UV Perfuratriz de Exploração')
        ['en-US']('AAA789 UV Exploration Drill')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Fortgeschrittener Erkundungsbohrer mit präzisen Bohrfähigkeiten für geotechnische Untersuchungen.')
        [
          'it-IT'
        ]('Trapano avanzato per esplorazione con capacità di trapanazione di precisione per indagini geotecniche.')
        [
          'nl-NL'
        ]('Geavanceerde exploratieboor met precisieboorcapaciteiten voor geotechnisch onderzoek.')
        [
          'fr-FR'
        ]("Forage d'exploration avancé avec des capacités de forage de précision pour des investigations géotechniques.")
        [
          'en-AU'
        ]('Advanced exploration drill with precision drilling capabilities for geotechnical investigations.')
        [
          'es-ES'
        ]('Perforadora de exploración avanzada con capacidades de perforación de precisión para investigaciones geotécnicas.')
        [
          'en-GB'
        ]('Advanced exploration drill with precision drilling capabilities for geotechnical investigations.')
        [
          'en-NZ'
        ]('Advanced exploration drill with precision drilling capabilities for geotechnical investigations.')
        [
          'pt-PT'
        ]('Perfuratriz de exploração avançada com capacidades de perfuração de precisão para investigações geotécnicas.')
        [
          'en-US'
        ]('Advanced exploration drill with precision drilling capabilities for geotechnical investigations.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('aaa789-uv')
        ['it-IT']('aaa789-uv')
        ['nl-NL']('aaa789-uv')
        ['fr-FR']('aaa789-uv')
        ['en-AU']('aaa789-uv')
        ['es-ES']('aaa789-uv')
        ['en-GB']('aaa789-uv')
        ['en-NZ']('aaa789-uv')
        ['pt-PT']('aaa789-uv')
        ['en-US']('aaa789-uv')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(heavyLiftingAndSpecializedEquipmentProductType.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxTaxCategory.key!)
    )
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.aaa789Uv01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.aaa789Uv02(),
      ProductVariantDraft.presets.sampleDataB2B.aaa789Uv03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(explorationDrillsCategory.key!),
    ]);

export default aaa789Uv;
