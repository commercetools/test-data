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
import { ProductDraft } from '../../../index';
import type { TProductDraftBuilder } from '../../../types';

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

const cc789Uv = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('cc789-uv')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('CC789 UV Flughafenplanierer')
        ['it-IT']('CC789 UV Livellatrice per Aeroporti')
        ['en-UK']('CC789 UV Airport Grader')
        ['nl-NL']('CC789 UV Luchthavennivelleermachine')
        ['fr-FR']('CC789 UV Niveleuse aéroportuaire')
        ['en-AU']('CC789 UV Airport Grader')
        ['es-ES']('CC789 UV Niveladora de aeropuerto')
        ['en-GB']('CC789 UV Airport Grader')
        ['en-NZ']('CC789 UV Airport Grader')
        ['pt-PT']('CC789 UV Niveladora de Aeroporto')
        ['en-US']('CC789 UV Airport Grader')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Fortgeschrittener Flughafenplanierer mit speziellen Funktionen für präzises Nivellieren von Start- und Landebahnen.'
        )
        ['it-IT'](
          'Livellatrice avanzata per aeroporti con caratteristiche specializzate per la classificazione precisa delle piste.'
        )
        ['en-UK'](
          'Advanced airport grader with specialized features for precise runway grading.'
        )
        ['nl-NL'](
          'Geavanceerde luchthavennivelleermachine met gespecialiseerde functies voor precieze baanegalisatie.'
        )
        ['fr-FR'](
          'Niveleuse aéroportuaire avancée avec des fonctionnalités spécialisées pour un nivellement précis des pistes.'
        )
        ['en-AU'](
          'Advanced airport grader with specialized features for precise runway grading.'
        )
        ['es-ES'](
          'Niveladora de aeropuerto avanzada con características especializadas para el nivelado preciso de pistas.'
        )
        ['en-GB'](
          'Advanced airport grader with specialized features for precise runway grading.'
        )
        ['en-NZ'](
          'Advanced airport grader with specialized features for precise runway grading.'
        )
        ['pt-PT'](
          'Niveladora avançada de aeroporto com recursos especializados para classificação precisa de pistas.'
        )
        ['en-US'](
          'Advanced airport grader with specialized features for precise runway grading.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('cc789-uv')
        ['it-IT']('cc789-uv')
        ['en-UK']('cc789-uv')
        ['nl-NL']('cc789-uv')
        ['fr-FR']('cc789-uv')
        ['en-AU']('cc789-uv')
        ['es-ES']('cc789-uv')
        ['en-GB']('cc789-uv')
        ['en-NZ']('cc789-uv')
        ['pt-PT']('cc789-uv')
        ['en-US']('cc789-uv')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.cc789Uv01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.cc789Uv02(),
      ProductVariantDraft.presets.sampleDataB2B.cc789Uv03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(airportGradersCategory.key!),
    ]);

export default cc789Uv;
