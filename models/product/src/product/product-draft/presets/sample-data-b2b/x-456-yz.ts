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

const deepMiningExcavatorsCategory = CategoryDraft.presets.sampleDataB2B
  .deepMiningExcavators()
  .build<TCategoryDraft>();

const x456Yz = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('x456-yz')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('X456 YZ Tiefbergbaubagger')
        ['it-IT']('X456 YZ Escavatore per Miniere Profonde')
        ['nl-NL']('X456 YZ Diepe Mijnbouw Graafmachine')
        ['fr-FR']('X456 YZ Excavateur minier profond')
        ['en-AU']('X456 YZ Deep Mining Excavator')
        ['es-ES']('X456 YZ Excavadora minera profunda')
        ['en-GB']('X456 YZ Deep Mining Excavator')
        ['en-NZ']('X456 YZ Deep Mining Excavator')
        ['pt-PT']('X456 YZ Escavadeira para Mineração Profunda')
        ['en-US']('X456 YZ Deep Mining Excavator')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Hoch effizienter Tiefbergbaubagger, konzipiert für die Gewinnung von Ressourcen aus der Tiefe.')
        [
          'it-IT'
        ]("Escavatore per miniere profonde ad alta efficienza progettato per l'estrazione di risorse in profondità.")
        [
          'nl-NL'
        ]('Zeer efficiënte diepe mijnbouw graafmachine ontworpen voor het extraheren van grondstoffen uit de diepte.')
        [
          'fr-FR'
        ]('Excavateur minier profond hautement efficace conçu pour extraire des ressources en profondeur.')
        [
          'en-AU'
        ]('Highly efficient deep mining excavator designed for extracting resources from depth.')
        [
          'es-ES'
        ]('Excavadora minera profunda altamente eficiente diseñada para extraer recursos desde la profundidad.')
        [
          'en-GB'
        ]('Highly efficient deep mining excavator designed for extracting resources from depth.')
        [
          'en-NZ'
        ]('Highly efficient deep mining excavator designed for extracting resources from depth.')
        [
          'pt-PT'
        ]('Escavadeira para mineração profunda altamente eficiente projetada para extrair recursos das profundezas.')
        [
          'en-US'
        ]('Highly efficient deep mining excavator designed for extracting resources from depth.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('x456-yz')
        ['it-IT']('x456-yz')
        ['nl-NL']('x456-yz')
        ['fr-FR']('x456-yz')
        ['en-AU']('x456-yz')
        ['es-ES']('x456-yz')
        ['en-GB']('x456-yz')
        ['en-NZ']('x456-yz')
        ['pt-PT']('x456-yz')
        ['en-US']('x456-yz')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.x456Yz01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.x456Yz02(),
      ProductVariantDraft.presets.sampleDataB2B.x456Yz03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(deepMiningExcavatorsCategory.key!),
    ]);

export default x456Yz;
