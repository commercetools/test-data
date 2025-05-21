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

const logLoadersCategory = CategoryDraft.presets.sampleDataB2B
  .logLoaders()
  .build<TCategoryDraft>();

const e567Yz = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('e567-yz')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('E567 YZ Holzlader')
        ['it-IT']('E567 YZ Caricatore di Tronchi')
        ['nl-NL']('E567 YZ Boomlader')
        ['fr-FR']('E567 YZ Chargeur de bûches')
        ['en-AU']('E567 YZ Log Loader')
        ['es-ES']('E567 YZ Cargador de troncos')
        ['en-GB']('E567 YZ Log Loader')
        ['en-NZ']('E567 YZ Log Loader')
        ['pt-PT']('E567 YZ Carregadeira de Toras')
        ['en-US']('E567 YZ Log Loader')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Fortgeschrittener Holzlader mit Präzisionskontrolle für eine effiziente Handhabung von Baumstämmen in Forstanwendungen.')
        [
          'it-IT'
        ]('Caricatore di tronchi avanzato con controllo di precisione per la manipolazione efficiente di tronchi in applicazioni forestali.')
        [
          'nl-NL'
        ]('Geavanceerde boomlader met precisiecontrole voor efficiënte boomstamhantering in bosbouwtoepassingen.')
        [
          'fr-FR'
        ]('Chargeur de bûches avancé avec contrôle de précision pour une manipulation efficace des grumes dans les applications forestières.')
        [
          'en-AU'
        ]('Advanced log loader with precision control for efficient log handling in forestry applications.')
        [
          'es-ES'
        ]('Cargador de troncos avanzado con control de precisión para una manipulación eficiente de troncos en aplicaciones forestales.')
        [
          'en-GB'
        ]('Advanced log loader with precision control for efficient log handling in forestry applications.')
        [
          'en-NZ'
        ]('Advanced log loader with precision control for efficient log handling in forestry applications.')
        [
          'pt-PT'
        ]('Carregadeira de toras avançada com controle de precisão para manuseio eficiente de toras em aplicações florestais.')
        [
          'en-US'
        ]('Advanced log loader with precision control for efficient log handling in forestry applications.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('e567-yz')
        ['it-IT']('e567-yz')
        ['nl-NL']('e567-yz')
        ['fr-FR']('e567-yz')
        ['en-AU']('e567-yz')
        ['es-ES']('e567-yz')
        ['en-GB']('e567-yz')
        ['en-NZ']('e567-yz')
        ['pt-PT']('e567-yz')
        ['en-US']('e567-yz')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.e567Yz01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.e567Yz02(),
      ProductVariantDraft.presets.sampleDataB2B.e567Yz03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(logLoadersCategory.key!),
    ]);

export default e567Yz;
