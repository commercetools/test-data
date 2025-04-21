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

const heavyLiftingAndSpecializedEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyLiftingAndSpecializedEquipment()
    .build<TProductTypeDraft>();

const crawlerCranesCategory = CategoryDraft.presets.sampleDataB2B
  .crawlerCranes()
  .build<TCategoryDraft>();

const ww567Yz = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('ww567-yz')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('WW567 YZ Raupenkran für Stabilität')
        ['it-IT']('WW567 YZ Gru Cingolata per Stabilità')
        ['nl-NL']('WW567 YZ Rupskraan voor Stabiliteit')
        ['fr-FR']('WW567 YZ Grue sur chenilles pour stabilité')
        ['en-AU']('WW567 YZ Crawler Crane for Stability')
        ['es-ES']('WW567 YZ Grúa sobre orugas para estabilidad')
        ['en-GB']('WW567 YZ Crawler Crane for Stability')
        ['en-NZ']('WW567 YZ Crawler Crane for Stability')
        ['pt-PT']('WW567 YZ Grua de Esteiras para Estabilidade')
        ['en-US']('WW567 YZ Crawler Crane for Stability')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Robuster Raupenkran mit fortschrittlichen Stabilitätsfunktionen für anspruchsvolle Hebeoperationen.')
        [
          'it-IT'
        ]('Gru cingolata robusta con caratteristiche avanzate di stabilità per operazioni di sollevamento pesanti.')
        [
          'nl-NL'
        ]('Robuuste rupskraan met geavanceerde stabiliteitsfuncties voor zware hijswerkzaamheden.')
        [
          'fr-FR'
        ]('Grue sur chenilles robuste avec des fonctionnalités de stabilité avancées pour des opérations de levage intensives.')
        [
          'en-AU'
        ]('Robust crawler crane with advanced stability features for heavy-duty lifting operations.')
        [
          'es-ES'
        ]('Grúa sobre orugas robusta con características avanzadas de estabilidad para operaciones de elevación de servicio pesado.')
        [
          'en-GB'
        ]('Robust crawler crane with advanced stability features for heavy-duty lifting operations.')
        [
          'en-NZ'
        ]('Robust crawler crane with advanced stability features for heavy-duty lifting operations.')
        [
          'pt-PT'
        ]('Grua de esteiras robusta com características avançadas de estabilidade para operações pesadas de elevação.')
        [
          'en-US'
        ]('Robust crawler crane with advanced stability features for heavy-duty lifting operations.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('ww567-yz')
        ['it-IT']('ww567-yz')
        ['nl-NL']('ww567-yz')
        ['fr-FR']('ww567-yz')
        ['en-AU']('ww567-yz')
        ['es-ES']('ww567-yz')
        ['en-GB']('ww567-yz')
        ['en-NZ']('ww567-yz')
        ['pt-PT']('ww567-yz')
        ['en-US']('ww567-yz')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.ww567Yz01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.ww567Yz02(),
      ProductVariantDraft.presets.sampleDataB2B.ww567Yz03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(crawlerCranesCategory.key!),
    ]);

export default ww567Yz;
