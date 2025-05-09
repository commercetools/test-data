import { TBuilder } from '../../../../../../core';
import {
  CategoryDraft,
  TCategoryDraft,
} from '../../../../../category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '../../../../../commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '../../../../../product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '../../../../../tax-category';
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

const wasteHandlingBulldozersCategory = CategoryDraft.presets.sampleDataB2B
  .wasteHandlingBulldozers()
  .build<TCategoryDraft>();

const i789Uv = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('i789-uv')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('I789 UV Abfallverarbeitungsbagger')
        ['it-IT']('I789 UV Bulldozer per la Gestione dei Rifiuti')
        ['nl-NL']('I789 UV Afvalverwerkings Bulldozer')
        ['fr-FR']('I789 UV Bulldozer de manutention des déchets')
        ['en-AU']('I789 UV Waste Handling Bulldozer')
        ['es-ES']('I789 UV Topadora de manipulación de residuos')
        ['en-GB']('I789 UV Waste Handling Bulldozer')
        ['en-NZ']('I789 UV Waste Handling Bulldozer')
        ['pt-PT']('I789 UV Trator de Esteiras para Manejo de Resíduos')
        ['en-US']('I789 UV Waste Handling Bulldozer')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Fortgeschrittener Abfallverarbeitungsbagger mit erweiterten Funktionen für komplexe Aufgaben der Abfallwirtschaft.')
        [
          'it-IT'
        ]('Bulldozer avanzato per la gestione dei rifiuti con caratteristiche potenziate per compiti di gestione dei rifiuti complessi.')
        [
          'nl-NL'
        ]('Geavanceerde afvalverwerkings bulldozer met verbeterde functies voor complexe afvalbeheertaken.')
        [
          'fr-FR'
        ]('Bulldozer de manutention des déchets avancé avec des fonctionnalités améliorées pour des tâches complexes de gestion des déchets.')
        [
          'en-AU'
        ]('Advanced waste handling bulldozer with enhanced features for complex waste management tasks.')
        [
          'es-ES'
        ]('Topadora de manipulación de residuos avanzada con características mejoradas para tareas complejas de gestión de residuos.')
        [
          'en-GB'
        ]('Advanced waste handling bulldozer with enhanced features for complex waste management tasks.')
        [
          'en-NZ'
        ]('Advanced waste handling bulldozer with enhanced features for complex waste management tasks.')
        [
          'pt-PT'
        ]('Trator de esteiras avançado para manejo de resíduos com características aprimoradas para tarefas complexas de gestão de resíduos.')
        [
          'en-US'
        ]('Advanced waste handling bulldozer with enhanced features for complex waste management tasks.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('i789-uv')
        ['it-IT']('i789-uv')
        ['nl-NL']('i789-uv')
        ['fr-FR']('i789-uv')
        ['en-AU']('i789-uv')
        ['es-ES']('i789-uv')
        ['en-GB']('i789-uv')
        ['en-NZ']('i789-uv')
        ['pt-PT']('i789-uv')
        ['en-US']('i789-uv')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.i789Uv01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.i789Uv02(),
      ProductVariantDraft.presets.sampleDataB2B.i789Uv03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(wasteHandlingBulldozersCategory.key!),
    ]);

export default i789Uv;
