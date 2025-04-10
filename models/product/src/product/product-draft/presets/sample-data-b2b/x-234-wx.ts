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

const offHighwayDumpTrucksCategory = CategoryDraft.presets.sampleDataB2B
  .offHighwayDumpTrucks()
  .build<TCategoryDraft>();

const x234Wx = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('x234-wx')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('X234 WX Geländekipplaster')
        ['it-IT']('X234 WX Camion Ribaltabile Fuoristrada')
        ['nl-NL']('X234 WX Off-Highway Dumptruck')
        ['fr-FR']('X234 WX Camion benne tout-terrain')
        ['en-AU']('X234 WX Off-Highway Dump Truck')
        ['es-ES']('X234 WX Camión volquete fuera de carretera')
        ['en-GB']('X234 WX Off-Highway Dump Truck')
        ['en-NZ']('X234 WX Off-Highway Dump Truck')
        ['pt-PT']('X234 WX Caminhão Basculante Fora-de-Estrada')
        ['en-US']('X234 WX Off-Highway Dump Truck')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Vielseitiger Geländekipplaster für den effizienten Transport von Material in anspruchsvollem Gelände.')
        [
          'it-IT'
        ]('Camion ribaltabile fuoristrada versatile per il trasporto efficiente di materiali in terreni difficili.')
        [
          'nl-NL'
        ]('Veelzijdige off-highway dumptruck voor efficiënt materiaaltransport in uitdagende terreinen.')
        [
          'fr-FR'
        ]('Camion benne tout-terrain polyvalent pour le transport efficace de matériaux dans des terrains difficiles.')
        [
          'en-AU'
        ]('Versatile off-highway dump truck for efficient material transport in challenging terrains.')
        [
          'es-ES'
        ]('Camión volquete fuera de carretera versátil para el transporte eficiente de materiales en terrenos desafiantes.')
        [
          'en-GB'
        ]('Versatile off-highway dump truck for efficient material transport in challenging terrains.')
        [
          'en-NZ'
        ]('Versatile off-highway dump truck for efficient material transport in challenging terrains.')
        [
          'pt-PT'
        ]('Caminhão basculante fora-de-estrada versátil para transporte eficiente de materiais em terrenos desafiadores.')
        [
          'en-US'
        ]('Versatile off-highway dump truck for efficient material transport in challenging terrains.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('x234-wx')
        ['it-IT']('x234-wx')
        ['nl-NL']('x234-wx')
        ['fr-FR']('x234-wx')
        ['en-AU']('x234-wx')
        ['es-ES']('x234-wx')
        ['en-GB']('x234-wx')
        ['en-NZ']('x234-wx')
        ['pt-PT']('x234-wx')
        ['en-US']('x234-wx')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.x234Wx01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.x234Wx02(),
      ProductVariantDraft.presets.sampleDataB2B.x234Wx03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(offHighwayDumpTrucksCategory.key!),
    ]);

export default x234Wx;
