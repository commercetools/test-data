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

const offHighwayDumpTrucksCategory = CategoryDraft.presets.sampleDataB2B
  .offHighwayDumpTrucks()
  .build<TCategoryDraft>();

const y567Yz = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('y567-yz')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Y567 YZ Geländekipplaster')
        ['it-IT']('Y567 YZ Camion Ribaltabile Fuoristrada')
        ['nl-NL']('Y567 YZ Off-Highway Dumptruck')
        ['fr-FR']('Y567 YZ Camion benne tout-terrain')
        ['en-AU']('Y567 YZ Off-Highway Dump Truck')
        ['es-ES']('Y567 YZ Camión volquete fuera de carretera')
        ['en-GB']('Y567 YZ Off-Highway Dump Truck')
        ['en-NZ']('Y567 YZ Off-Highway Dump Truck')
        ['pt-PT']('Y567 YZ Caminhão Basculante Fora-de-Estrada')
        ['en-US']('Y567 YZ Off-Highway Dump Truck')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Robuster Geländekipplaster mit erweiterten Funktionen für den zuverlässigen Transport von Material.')
        [
          'it-IT'
        ]('Camion ribaltabile fuoristrada per impieghi pesanti con caratteristiche potenziate per un trasporto affidabile dei materiali.')
        [
          'nl-NL'
        ]('Zware off-highway dumptruck met verbeterde functies voor betrouwbaar materiaaltransport.')
        [
          'fr-FR'
        ]('Camion benne tout-terrain robuste avec des fonctionnalités améliorées pour un transport fiable des matériaux.')
        [
          'en-AU'
        ]('Heavy-duty off-highway dump truck with enhanced features for reliable material transport.')
        [
          'es-ES'
        ]('Camión volquete fuera de carretera resistente con características mejoradas para el transporte confiable de materiales.')
        [
          'en-GB'
        ]('Heavy-duty off-highway dump truck with enhanced features for reliable material transport.')
        [
          'en-NZ'
        ]('Heavy-duty off-highway dump truck with enhanced features for reliable material transport.')
        [
          'pt-PT'
        ]('Caminhão basculante fora-de-estrada de serviço pesado com recursos aprimorados para transporte confiável de materiais.')
        [
          'en-US'
        ]('Heavy-duty off-highway dump truck with enhanced features for reliable material transport.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('y567-yz')
        ['it-IT']('y567-yz')
        ['nl-NL']('y567-yz')
        ['fr-FR']('y567-yz')
        ['en-AU']('y567-yz')
        ['es-ES']('y567-yz')
        ['en-GB']('y567-yz')
        ['en-NZ']('y567-yz')
        ['pt-PT']('y567-yz')
        ['en-US']('y567-yz')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.y567Yz01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.y567Yz02(),
      ProductVariantDraft.presets.sampleDataB2B.y567Yz03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(offHighwayDumpTrucksCategory.key!),
    ]);

export default y567Yz;
