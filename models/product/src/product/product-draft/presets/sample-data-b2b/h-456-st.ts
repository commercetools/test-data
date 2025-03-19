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

const heavyEarthmovingAndConstructionEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyEarthmovingAndConstructionEquipment()
    .build<TProductTypeDraft>();

const wasteHandlingBulldozersCategory = CategoryDraft.presets.sampleDataB2B
  .wasteHandlingBulldozers()
  .build<TCategoryDraft>();

const h456St = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('h456-st')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('H456 ST Abfallverarbeitungsbagger')
        ['it-IT']('H456 ST Bulldozer per la Gestione dei Rifiuti')
        ['nl-NL']('H456 ST Afvalverwerkings Bulldozer')
        ['fr-FR']('H456 ST Bulldozer de manutention des déchets')
        ['en-AU']('H456 ST Waste Handling Bulldozer')
        ['es-ES']('H456 ST Topadora de manipulación de residuos')
        ['en-GB']('H456 ST Waste Handling Bulldozer')
        ['en-NZ']('H456 ST Waste Handling Bulldozer')
        ['pt-PT']('H456 ST Trator de Esteiras para Manejo de Resíduos')
        ['en-US']('H456 ST Waste Handling Bulldozer')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Spezialisierter Bulldozer für die effiziente Handhabung von Abfallmaterialien in Abfallwirtschaftsprojekten.')
        [
          'it-IT'
        ]('Bulldozer specializzato per la gestione efficiente dei materiali di scarto in progetti di gestione dei rifiuti.')
        [
          'nl-NL'
        ]('Gespecialiseerde bulldozer voor efficiënte afvalverwerking in afvalbeheerprojecten.')
        [
          'fr-FR'
        ]('Bulldozer spécialisé pour la manipulation efficace des matériaux de déchets dans les projets de gestion des déchets.')
        [
          'en-AU'
        ]('Specialized bulldozer for efficient handling of waste materials in waste management projects.')
        [
          'es-ES'
        ]('Topadora especializada para la manipulación eficiente de materiales de desecho en proyectos de gestión de residuos.')
        [
          'en-GB'
        ]('Specialized bulldozer for efficient handling of waste materials in waste management projects.')
        [
          'en-NZ'
        ]('Specialized bulldozer for efficient handling of waste materials in waste management projects.')
        [
          'pt-PT'
        ]('Trator de esteiras especializado para manuseio eficiente de materiais de resíduos em projetos de gestão de resíduos.')
        [
          'en-US'
        ]('Specialized bulldozer for efficient handling of waste materials in waste management projects.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('h456-st')
        ['it-IT']('h456-st')
        ['nl-NL']('h456-st')
        ['fr-FR']('h456-st')
        ['en-AU']('h456-st')
        ['es-ES']('h456-st')
        ['en-GB']('h456-st')
        ['en-NZ']('h456-st')
        ['pt-PT']('h456-st')
        ['en-US']('h456-st')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.h456St01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.h456St02(),
      ProductVariantDraft.presets.sampleDataB2B.h456St03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(wasteHandlingBulldozersCategory.key!),
    ]);

export default h456St;
