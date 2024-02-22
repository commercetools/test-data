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
import { ProductDraft } from '../../../index';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxTaxCategory = TaxCategoryDraft.presets.sampleDataB2B
  .standardTax()
  .build<TTaxCategoryDraft>();

const heavyEarthmovingAndConstructionEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyEarthmovingAndConstructionEquipment()
    .build<TProductTypeDraft>();

const rigidDumpTrucksCategory = CategoryDraft.presets.sampleDataB2B
  .rigidDumpTrucks()
  .build<TCategoryDraft>();

const w789Uv = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('w789-uv')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('W789 UV Starren Kipplaster')
        ['it-IT']('W789 UV Camion Ribaltabile Rigido')
        ['en-UK']('W789 UV Rigid Dump Truck')
        ['nl-NL']('W789 UV Starre Dumptruck')
        ['fr-FR']('W789 UV Camion benne rigide')
        ['en-AU']('W789 UV Rigid Dump Truck')
        ['es-ES']('W789 UV Camión volquete rígido')
        ['en-GB']('W789 UV Rigid Dump Truck')
        ['en-NZ']('W789 UV Rigid Dump Truck')
        ['pt-PT']('W789 UV Caminhão Basculante Rígido')
        ['en-US']('W789 UV Rigid Dump Truck')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Starren Kipplaster mit hoher Kapazität und fortschrittlichen Funktionen für den effizienten Transport von Material.'
        )
        ['it-IT'](
          'Camion ribaltabile rigido ad alta capacità con caratteristiche avanzate per il trasporto efficiente di materiali.'
        )
        ['en-UK'](
          'High-capacity rigid dump truck with advanced features for efficient material transport.'
        )
        ['nl-NL'](
          'Hoogcapaciteits starre dumptruck met geavanceerde functies voor efficiënt materiaaltransport.'
        )
        ['fr-FR'](
          'Camion benne rigide haute capacité avec des fonctionnalités avancées pour un transport efficace des matériaux.'
        )
        ['en-AU'](
          'High-capacity rigid dump truck with advanced features for efficient material transport.'
        )
        ['es-ES'](
          'Camión volquete rígido de alta capacidad con características avanzadas para el transporte eficiente de materiales.'
        )
        ['en-GB'](
          'High-capacity rigid dump truck with advanced features for efficient material transport.'
        )
        ['en-NZ'](
          'High-capacity rigid dump truck with advanced features for efficient material transport.'
        )
        ['pt-PT'](
          'Caminhão basculante rígido de alta capacidade com recursos avançados para transporte eficiente de materiais.'
        )
        ['en-US'](
          'High-capacity rigid dump truck with advanced features for efficient material transport.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('w789-uv')
        ['it-IT']('w789-uv')
        ['en-UK']('w789-uv')
        ['nl-NL']('w789-uv')
        ['fr-FR']('w789-uv')
        ['en-AU']('w789-uv')
        ['es-ES']('w789-uv')
        ['en-GB']('w789-uv')
        ['en-NZ']('w789-uv')
        ['pt-PT']('w789-uv')
        ['en-US']('w789-uv')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.w789Uv01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.w789Uv02(),
      ProductVariantDraft.presets.sampleDataB2B.w789Uv03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(rigidDumpTrucksCategory.key!),
    ]);

export default w789Uv;
