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

const heavyLiftingAndSpecializedEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyLiftingAndSpecializedEquipment()
    .build<TProductTypeDraft>();

const productionDrillsCategory = CategoryDraft.presets.sampleDataB2B
  .productionDrills()
  .build<TCategoryDraft>();

const ddd890Op = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('ddd890-op')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('DDD890 OP Produktionsbohrer')
        ['it-IT']('DDD890 OP Trapano per Produzione')
        ['nl-NL']('DDD890 OP Productieboor')
        ['fr-FR']('DDD890 OP Forage de production')
        ['en-AU']('DDD890 OP Production Drill')
        ['es-ES']('DDD890 OP Perforadora de producción')
        ['en-GB']('DDD890 OP Production Drill')
        ['en-NZ']('DDD890 OP Production Drill')
        ['pt-PT']('DDD890 OP Perfuratriz de Produção')
        ['en-US']('DDD890 OP Production Drill')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Vielseitiger Produktionsbohrer für verschiedene Bohraufgaben in groß angelegten Bergbauprojekten geeignet.')
        [
          'it-IT'
        ]('Trapano versatile per produzione adatto per una varietà di compiti di trapanazione in progetti minerari su larga scala.')
        [
          'nl-NL'
        ]('Veelzijdige productieboor geschikt voor een verscheidenheid aan boortaken in grootschalige mijnbouwprojecten.')
        [
          'fr-FR'
        ]('Forage de production polyvalent adapté à diverses tâches de forage dans des projets miniers à grande échelle.')
        [
          'en-AU'
        ]('Versatile production drill suitable for a variety of drilling tasks in large-scale mining projects.')
        [
          'es-ES'
        ]('Perforadora de producción versátil adecuada para una variedad de tareas de perforación en proyectos mineros a gran escala.')
        [
          'en-GB'
        ]('Versatile production drill suitable for a variety of drilling tasks in large-scale mining projects.')
        [
          'en-NZ'
        ]('Versatile production drill suitable for a variety of drilling tasks in large-scale mining projects.')
        [
          'pt-PT'
        ]('Perfuratriz de produção versátil adequada para uma variedade de tarefas de perfuração em projetos de mineração em grande escala.')
        [
          'en-US'
        ]('Versatile production drill suitable for a variety of drilling tasks in large-scale mining projects.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('ddd890-op')
        ['it-IT']('ddd890-op')
        ['nl-NL']('ddd890-op')
        ['fr-FR']('ddd890-op')
        ['en-AU']('ddd890-op')
        ['es-ES']('ddd890-op')
        ['en-GB']('ddd890-op')
        ['en-NZ']('ddd890-op')
        ['pt-PT']('ddd890-op')
        ['en-US']('ddd890-op')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.ddd890Op01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.ddd890Op02(),
      ProductVariantDraft.presets.sampleDataB2B.ddd890Op03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(productionDrillsCategory.key!),
    ]);

export default ddd890Op;
