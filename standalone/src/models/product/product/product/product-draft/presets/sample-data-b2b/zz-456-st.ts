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

const zz456St = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('zz456-st')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('ZZ456 ST Erkundungsbohrer')
        ['it-IT']('ZZ456 ST Trapano per Esplorazione')
        ['nl-NL']('ZZ456 ST Exploratieboor')
        ['fr-FR']("ZZ456 ST Forage d'exploration")
        ['en-AU']('ZZ456 ST Exploration Drill')
        ['es-ES']('ZZ456 ST Perforadora de exploración')
        ['en-GB']('ZZ456 ST Exploration Drill')
        ['en-NZ']('ZZ456 ST Exploration Drill')
        ['pt-PT']('ZZ456 ST Perfuratriz de Exploração')
        ['en-US']('ZZ456 ST Exploration Drill')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Vielseitiger Erkundungsbohrer für verschiedene Bohraufgaben in Erkundungs- und geotechnischen Projekten geeignet.')
        [
          'it-IT'
        ]('Trapano per esplorazione versatile adatto per vari compiti di trapanazione in progetti di esplorazione e geotecnici.')
        [
          'nl-NL'
        ]('Veelzijdige exploratieboor geschikt voor diverse boortaken in exploratie- en geotechnische projecten.')
        [
          'fr-FR'
        ]("Forage d'exploration polyvalent adapté à diverses tâches de forage dans des projets d'exploration et géotechniques.")
        [
          'en-AU'
        ]('Versatile exploration drill suitable for various drilling tasks in exploration and geotechnical projects.')
        [
          'es-ES'
        ]('Perforadora de exploración versátil adecuada para diversas tareas de perforación en proyectos de exploración y geotécnica.')
        [
          'en-GB'
        ]('Versatile exploration drill suitable for various drilling tasks in exploration and geotechnical projects.')
        [
          'en-NZ'
        ]('Versatile exploration drill suitable for various drilling tasks in exploration and geotechnical projects.')
        [
          'pt-PT'
        ]('Perfuratriz de exploração versátil adequada para várias tarefas de perfuração em projetos de exploração e geotécnicos.')
        [
          'en-US'
        ]('Versatile exploration drill suitable for various drilling tasks in exploration and geotechnical projects.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('zz456-st')
        ['it-IT']('zz456-st')
        ['nl-NL']('zz456-st')
        ['fr-FR']('zz456-st')
        ['en-AU']('zz456-st')
        ['es-ES']('zz456-st')
        ['en-GB']('zz456-st')
        ['en-NZ']('zz456-st')
        ['pt-PT']('zz456-st')
        ['en-US']('zz456-st')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.zz456St01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.zz456St02(),
      ProductVariantDraft.presets.sampleDataB2B.zz456St03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(explorationDrillsCategory.key!),
    ]);

export default zz456St;
