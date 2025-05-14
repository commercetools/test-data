import { TBuilder } from '../../../../../../core';
import { CategoryDraft, TCategoryDraft } from '../../../../../category';
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

const offHighwayDumpTrucksCategory = CategoryDraft.presets.sampleDataB2B
  .offHighwayDumpTrucks()
  .build<TCategoryDraft>();

const z890Op = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('z890-op')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('Z890 OP Geländekipplaster')
        ['it-IT']('Z890 OP Camion Ribaltabile Fuoristrada')
        ['nl-NL']('Z890 OP Off-Highway Dumptruck')
        ['fr-FR']('Z890 OP Camion benne tout-terrain')
        ['en-AU']('Z890 OP Off-Highway Dump Truck')
        ['es-ES']('Z890 OP Camión volquete fuera de carretera')
        ['en-GB']('Z890 OP Off-Highway Dump Truck')
        ['en-NZ']('Z890 OP Off-Highway Dump Truck')
        ['pt-PT']('Z890 OP Caminhão Basculante Fora-de-Estrada')
        ['en-US']('Z890 OP Off-Highway Dump Truck')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Geländekipplaster mit hoher Kapazität und speziellen Funktionen für anspruchsvollen Transport von Material.')
        [
          'it-IT'
        ]('Camion ribaltabile fuoristrada ad alta capacità con caratteristiche specializzate per il trasporto esigente di materiali.')
        [
          'nl-NL'
        ]('Hoogcapaciteits off-highway dumptruck met gespecialiseerde functies voor veeleisend materiaaltransport.')
        [
          'fr-FR'
        ]('Camion benne tout-terrain haute capacité avec des fonctionnalités spécialisées pour un transport exigeant des matériaux.')
        [
          'en-AU'
        ]('High-capacity off-highway dump truck with specialized features for demanding material transport.')
        [
          'es-ES'
        ]('Camión volquete fuera de carretera de alta capacidad con características especializadas para el transporte exigente de materiales.')
        [
          'en-GB'
        ]('High-capacity off-highway dump truck with specialized features for demanding material transport.')
        [
          'en-NZ'
        ]('High-capacity off-highway dump truck with specialized features for demanding material transport.')
        [
          'pt-PT'
        ]('Caminhão basculante fora-de-estrada de alta capacidade com recursos especializados para transporte exigente de materiais.')
        [
          'en-US'
        ]('High-capacity off-highway dump truck with specialized features for demanding material transport.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('z890-op')
        ['it-IT']('z890-op')
        ['nl-NL']('z890-op')
        ['fr-FR']('z890-op')
        ['en-AU']('z890-op')
        ['es-ES']('z890-op')
        ['en-GB']('z890-op')
        ['en-NZ']('z890-op')
        ['pt-PT']('z890-op')
        ['en-US']('z890-op')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.z890Op01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.z890Op02(),
      ProductVariantDraft.presets.sampleDataB2B.z890Op03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(offHighwayDumpTrucksCategory.key!),
    ]);

export default z890Op;
