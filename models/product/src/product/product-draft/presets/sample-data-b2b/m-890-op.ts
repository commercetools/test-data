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

const heavyEarthmovingAndConstructionEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyEarthmovingAndConstructionEquipment()
    .build<TProductTypeDraft>();

const amphibiousExcavatorsCategory = CategoryDraft.presets.sampleDataB2B
  .amphibiousExcavators()
  .build<TCategoryDraft>();

const m890Op = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('m890-op')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('M890 OP Amphibienbagger')
        ['it-IT']('M890 OP Escavatore Anfibio')
        ['nl-NL']('M890 OP Amfibische Graafmachine')
        ['fr-FR']('M890 OP Excavateur amphibie')
        ['en-AU']('M890 OP Amphibious Excavator')
        ['es-ES']('M890 OP Excavadora anfibia')
        ['en-GB']('M890 OP Amphibious Excavator')
        ['en-NZ']('M890 OP Amphibious Excavator')
        ['pt-PT']('M890 OP Escavadeira Anfíbia')
        ['en-US']('M890 OP Amphibious Excavator')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Amphibienbagger mit speziellen Funktionen für vielseitige Land- und Wasserprojekte.')
        [
          'it-IT'
        ]('Escavatore anfibio con caratteristiche specializzate per progetti versatili su terra e in acqua.')
        [
          'nl-NL'
        ]('Amfibische graafmachine met gespecialiseerde functies voor veelzijdige land- en waterprojecten.')
        [
          'fr-FR'
        ]("Excavateur amphibie avec des fonctionnalités spécialisées pour des projets polyvalents sur terre et dans l'eau.")
        [
          'en-AU'
        ]('Amphibious excavator with specialized features for versatile land and water projects.')
        [
          'es-ES'
        ]('Excavadora anfibia con características especializadas para proyectos versátiles en tierra y agua.')
        [
          'en-GB'
        ]('Amphibious excavator with specialized features for versatile land and water projects.')
        [
          'en-NZ'
        ]('Amphibious excavator with specialized features for versatile land and water projects.')
        [
          'pt-PT'
        ]('Escavadeira anfíbia com características especializadas para projetos versáteis em terra e água.')
        [
          'en-US'
        ]('Amphibious excavator with specialized features for versatile land and water projects.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('m890-op')
        ['it-IT']('m890-op')
        ['nl-NL']('m890-op')
        ['fr-FR']('m890-op')
        ['en-AU']('m890-op')
        ['es-ES']('m890-op')
        ['en-GB']('m890-op')
        ['en-NZ']('m890-op')
        ['pt-PT']('m890-op')
        ['en-US']('m890-op')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.m890Op01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.m890Op02(),
      ProductVariantDraft.presets.sampleDataB2B.m890Op03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(amphibiousExcavatorsCategory.key!),
    ]);

export default m890Op;
