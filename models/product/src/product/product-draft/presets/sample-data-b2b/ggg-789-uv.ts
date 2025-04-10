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

const quarryingHammersCategory = CategoryDraft.presets.sampleDataB2B
  .quarryingHammers()
  .build<TCategoryDraft>();

const ggg789Uv = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('ggg789-uv')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('GGG789 UV Steinbruchhammer')
        ['it-IT']('GGG789 UV Martello per Cave')
        ['nl-NL']('GGG789 UV Steengroevehamer')
        ['fr-FR']('GGG789 UV Marteau de carrière')
        ['en-AU']('GGG789 UV Quarrying Hammer')
        ['es-ES']('GGG789 UV Martillo de cantera')
        ['en-GB']('GGG789 UV Quarrying Hammer')
        ['en-NZ']('GGG789 UV Quarrying Hammer')
        ['pt-PT']('GGG789 UV Martelo de Pedreira')
        ['en-US']('GGG789 UV Quarrying Hammer')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Vielseitiger Steinbruchhammer mit präziser Steuerung für verschiedene Gesteinsgewinnungsaufgaben im Bergbau und Bauwesen.')
        [
          'it-IT'
        ]('Martello per cave versatile con controllo di precisione per vari compiti di estrazione di roccia in miniere e costruzioni.')
        [
          'nl-NL'
        ]('Veelzijdige steengroevehamer met precisiecontrole voor diverse rotsontginningstaken in mijnbouw en bouw.')
        [
          'fr-FR'
        ]("Marteau de carrière polyvalent avec commande précise pour diverses tâches d'extraction de roches dans l'exploitation minière et la construction.")
        [
          'en-AU'
        ]('Versatile quarrying hammer with precision control for various rock extraction tasks in mining and construction.')
        [
          'es-ES'
        ]('Martillo de cantera versátil con control preciso para diversas tareas de extracción de rocas en minería y construcción.')
        [
          'en-GB'
        ]('Versatile quarrying hammer with precision control for various rock extraction tasks in mining and construction.')
        [
          'en-NZ'
        ]('Versatile quarrying hammer with precision control for various rock extraction tasks in mining and construction.')
        [
          'pt-PT'
        ]('Martelo de pedreira versátil com controle de precisão para várias tarefas de extração de rochas em mineração e construção.')
        [
          'en-US'
        ]('Versatile quarrying hammer with precision control for various rock extraction tasks in mining and construction.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('ggg789-uv')
        ['it-IT']('ggg789-uv')
        ['nl-NL']('ggg789-uv')
        ['fr-FR']('ggg789-uv')
        ['en-AU']('ggg789-uv')
        ['es-ES']('ggg789-uv')
        ['en-GB']('ggg789-uv')
        ['en-NZ']('ggg789-uv')
        ['pt-PT']('ggg789-uv')
        ['en-US']('ggg789-uv')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.ggg789Uv01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.ggg789Uv02(),
      ProductVariantDraft.presets.sampleDataB2B.ggg789Uv03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(quarryingHammersCategory.key!),
    ]);

export default ggg789Uv;
