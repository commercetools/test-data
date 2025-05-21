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

const heavyEarthmovingAndConstructionEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyEarthmovingAndConstructionEquipment()
    .build<TProductTypeDraft>();

const airportGradersCategory = CategoryDraft.presets.sampleDataB2B
  .airportGraders()
  .build<TCategoryDraft>();

const bb456St = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('bb456-st')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('BB456 ST Flughafenplanierer')
        ['it-IT']('BB456 ST Livellatrice per Aeroporti')
        ['nl-NL']('BB456 ST Luchthavennivelleermachine')
        ['fr-FR']('BB456 ST Niveleuse aéroportuaire')
        ['en-AU']('BB456 ST Airport Grader')
        ['es-ES']('BB456 ST Niveladora de aeropuerto')
        ['en-GB']('BB456 ST Airport Grader')
        ['en-NZ']('BB456 ST Airport Grader')
        ['pt-PT']('BB456 ST Niveladora de Aeroporto')
        ['en-US']('BB456 ST Airport Grader')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Hochleistungs-Flughafenplanierer für effizientes Nivellieren und Instandhalten von Flugzeuglandebahnen.')
        [
          'it-IT'
        ]('Livellatrice ad alte prestazioni per aeroporti per una classificazione efficiente e la manutenzione delle piste aeroportuali.')
        [
          'nl-NL'
        ]('Hoogpresterende luchthavennivelleermachine voor efficiënte egalisatie en onderhoud van luchthavenstartbanen.')
        [
          'fr-FR'
        ]("Niveleuse aéroportuaire haute performance pour le nivellement efficace et l'entretien des pistes d'aéroport.")
        [
          'en-AU'
        ]('High-performance airport grader for efficient grading and maintenance of airport runways.')
        [
          'es-ES'
        ]('Niveladora de aeropuerto de alto rendimiento para el nivelado eficiente y el mantenimiento de las pistas de aterrizaje del aeropuerto.')
        [
          'en-GB'
        ]('High-performance airport grader for efficient grading and maintenance of airport runways.')
        [
          'en-NZ'
        ]('High-performance airport grader for efficient grading and maintenance of airport runways.')
        [
          'pt-PT'
        ]('Niveladora de alto desempenho para aeroportos para classificação eficiente e manutenção de pistas de aeroporto.')
        [
          'en-US'
        ]('High-performance airport grader for efficient grading and maintenance of airport runways.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('bb456-st')
        ['it-IT']('bb456-st')
        ['nl-NL']('bb456-st')
        ['fr-FR']('bb456-st')
        ['en-AU']('bb456-st')
        ['es-ES']('bb456-st')
        ['en-GB']('bb456-st')
        ['en-NZ']('bb456-st')
        ['pt-PT']('bb456-st')
        ['en-US']('bb456-st')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.bb456St01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.bb456St02(),
      ProductVariantDraft.presets.sampleDataB2B.bb456St03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(airportGradersCategory.key!),
    ]);

export default bb456St;
