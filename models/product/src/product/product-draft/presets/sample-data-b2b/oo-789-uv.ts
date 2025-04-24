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

const wheeledExcavatorsForMiningCategory = CategoryDraft.presets.sampleDataB2B
  .wheeledExcavatorsForMining()
  .build<TCategoryDraft>();

const oo789Uv = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('oo789-uv')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('OO789 UV Radbagger für Bergbau')
        ['it-IT']('OO789 UV Escavatore su Ruote per Miniere')
        ['nl-NL']('OO789 UV Wiellader voor Mijnbouw')
        ['fr-FR']("OO789 UV Excavatrice sur roues pour l'exploitation minière")
        ['en-AU']('OO789 UV Wheeled Excavator for Mining')
        ['es-ES']('OO789 UV Excavadora de ruedas para minería')
        ['en-GB']('OO789 UV Wheeled Excavator for Mining')
        ['en-NZ']('OO789 UV Wheeled Excavator for Mining')
        ['pt-PT']('OO789 UV Escavadeira com Rodas para Mineração')
        ['en-US']('OO789 UV Wheeled Excavator for Mining')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Fortgeschrittener Radbagger mit speziellen Funktionen für Präzision in Bergbauoperationen.')
        [
          'it-IT'
        ]('Escavatore avanzato su ruote con caratteristiche specializzate per precisione nelle operazioni minerarie.')
        [
          'nl-NL'
        ]('Geavanceerde wiellader met gespecialiseerde functies voor precisie in mijnbouwoperaties.')
        [
          'fr-FR'
        ]('Excavatrice sur roues avancée avec des fonctionnalités spécialisées pour la précision dans les opérations minières.')
        [
          'en-AU'
        ]('Advanced wheeled excavator with specialized features for precision in mining operations.')
        [
          'es-ES'
        ]('Excavadora de ruedas avanzada con características especializadas para la precisión en operaciones mineras.')
        [
          'en-GB'
        ]('Advanced wheeled excavator with specialized features for precision in mining operations.')
        [
          'en-NZ'
        ]('Advanced wheeled excavator with specialized features for precision in mining operations.')
        [
          'pt-PT'
        ]('Escavadeira com rodas avançada com recursos especializados para precisão em operações de mineração.')
        [
          'en-US'
        ]('Advanced wheeled excavator with specialized features for precision in mining operations.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('oo789-uv')
        ['it-IT']('oo789-uv')
        ['nl-NL']('oo789-uv')
        ['fr-FR']('oo789-uv')
        ['en-AU']('oo789-uv')
        ['es-ES']('oo789-uv')
        ['en-GB']('oo789-uv')
        ['en-NZ']('oo789-uv')
        ['pt-PT']('oo789-uv')
        ['en-US']('oo789-uv')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.oo789Uv01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.oo789Uv02(),
      ProductVariantDraft.presets.sampleDataB2B.oo789Uv03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(wheeledExcavatorsForMiningCategory.key!),
    ]);

export default oo789Uv;
