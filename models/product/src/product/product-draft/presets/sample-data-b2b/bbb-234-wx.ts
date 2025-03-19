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

const bbb234Wx = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('bbb234-wx')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('BBB234 WX Produktionsbohrer')
        ['it-IT']('BBB234 WX Trapano per Produzione')
        ['nl-NL']('BBB234 WX Productieboor')
        ['fr-FR']('BBB234 WX Forage de production')
        ['en-AU']('BBB234 WX Production Drill')
        ['es-ES']('BBB234 WX Perforadora de producción')
        ['en-GB']('BBB234 WX Production Drill')
        ['en-NZ']('BBB234 WX Production Drill')
        ['pt-PT']('BBB234 WX Perfuratriz de Produção')
        ['en-US']('BBB234 WX Production Drill')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Leistungsstarker Produktionsbohrer für effizientes Bohren in groß angelegten Bergbauoperationen.')
        [
          'it-IT'
        ]('Trapano ad alte prestazioni per produzione progettato per trapanazioni efficienti in operazioni minerarie su larga scala.')
        [
          'nl-NL'
        ]('Hoogpresterende productieboor ontworpen voor efficiënt boren in grootschalige mijnbouwoperaties.')
        [
          'fr-FR'
        ]('Forage de production haute performance conçu pour un forage efficace dans les opérations minières à grande échelle.')
        [
          'en-AU'
        ]('High-performance production drill designed for efficient drilling in large-scale mining operations.')
        [
          'es-ES'
        ]('Perforadora de producción de alto rendimiento diseñada para perforar de manera eficiente en operaciones mineras a gran escala.')
        [
          'en-GB'
        ]('High-performance production drill designed for efficient drilling in large-scale mining operations.')
        [
          'en-NZ'
        ]('High-performance production drill designed for efficient drilling in large-scale mining operations.')
        [
          'pt-PT'
        ]('Perfuratriz de produção de alto desempenho projetada para perfuração eficiente em operações de mineração em grande escala.')
        [
          'en-US'
        ]('High-performance production drill designed for efficient drilling in large-scale mining operations.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('bbb234-wx')
        ['it-IT']('bbb234-wx')
        ['nl-NL']('bbb234-wx')
        ['fr-FR']('bbb234-wx')
        ['en-AU']('bbb234-wx')
        ['es-ES']('bbb234-wx')
        ['en-GB']('bbb234-wx')
        ['en-NZ']('bbb234-wx')
        ['pt-PT']('bbb234-wx')
        ['en-US']('bbb234-wx')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.bbb234Wx01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.bbb234Wx02(),
      ProductVariantDraft.presets.sampleDataB2B.bbb234Wx03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(productionDrillsCategory.key!),
    ]);

export default bbb234Wx;
