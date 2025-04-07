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

const amphibiousExcavatorsCategory = CategoryDraft.presets.sampleDataB2B
  .amphibiousExcavators()
  .build<TCategoryDraft>();

const p234Qw = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('p234-qw')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('P234 QW Amphibienbagger')
        ['it-IT']('P234 QW Escavatore Anfibio')
        ['nl-NL']('P234 QW Amfibische Graafmachine')
        ['fr-FR']('P234 QW Excavateur amphibie')
        ['en-AU']('P234 QW Amphibious Excavator')
        ['es-ES']('P234 QW Excavadora anfibia')
        ['en-GB']('P234 QW Amphibious Excavator')
        ['en-NZ']('P234 QW Amphibious Excavator')
        ['pt-PT']('P234 QW Escavadeira Anfíbia')
        ['en-US']('P234 QW Amphibious Excavator')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Vielseitiger Amphibienbagger, konzipiert für land- und wasserbasierte Aushubprojekte.')
        [
          'it-IT'
        ]('Escavatore anfibio versatile progettato sia per progetti di scavo terrestri che acquatici.')
        [
          'nl-NL'
        ]('Veelzijdige amfibische graafmachine ontworpen voor zowel land- als watergebonden graafprojecten.')
        [
          'fr-FR'
        ]("Excavateur amphibie polyvalent conçu pour des projets d'excavation à la fois sur terre et dans l'eau.")
        [
          'en-AU'
        ]('Versatile amphibious excavator designed for both land and water-based excavation projects.')
        [
          'es-ES'
        ]('Excavadora anfibia versátil diseñada para proyectos de excavación en tierra y agua.')
        [
          'en-GB'
        ]('Versatile amphibious excavator designed for both land and water-based excavation projects.')
        [
          'en-NZ'
        ]('Versatile amphibious excavator designed for both land and water-based excavation projects.')
        [
          'pt-PT'
        ]('Escavadeira anfíbia versátil projetada para projetos de escavação em terra e água.')
        [
          'en-US'
        ]('Versatile amphibious excavator designed for both land and water-based excavation projects.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('p234-qw')
        ['it-IT']('p234-qw')
        ['nl-NL']('p234-qw')
        ['fr-FR']('p234-qw')
        ['en-AU']('p234-qw')
        ['es-ES']('p234-qw')
        ['en-GB']('p234-qw')
        ['en-NZ']('p234-qw')
        ['pt-PT']('p234-qw')
        ['en-US']('p234-qw')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.p234Qw01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.p234Qw02(),
      ProductVariantDraft.presets.sampleDataB2B.p234Qw03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(amphibiousExcavatorsCategory.key!),
    ]);

export default p234Qw;
