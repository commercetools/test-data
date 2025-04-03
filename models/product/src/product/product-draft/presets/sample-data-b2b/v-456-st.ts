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

const rigidDumpTrucksCategory = CategoryDraft.presets.sampleDataB2B
  .rigidDumpTrucks()
  .build<TCategoryDraft>();

const v456St = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('v456-st')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('V456 ST Starren Kipplaster')
        ['it-IT']('V456 ST Camion Ribaltabile Rigido')
        ['nl-NL']('V456 ST Starre Dumptruck')
        ['fr-FR']('V456 ST Camion benne rigide')
        ['en-AU']('V456 ST Rigid Dump Truck')
        ['es-ES']('V456 ST Camión volquete rígido')
        ['en-GB']('V456 ST Rigid Dump Truck')
        ['en-NZ']('V456 ST Rigid Dump Truck')
        ['pt-PT']('V456 ST Caminhão Basculante Rígido')
        ['en-US']('V456 ST Rigid Dump Truck')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Robuster Starren Kipplaster für den zuverlässigen Transport großer Materialmengen im Bergbau und Bauwesen.')
        [
          'it-IT'
        ]('Camion ribaltabile rigido V456 ST per impieghi pesanti per il trasporto affidabile di grandi volumi di materiale in miniere e costruzioni.')
        [
          'nl-NL'
        ]('V456 ST Zware starre dumptruck voor betrouwbaar transport van grote hoeveelheden materiaal in mijnbouw en bouw.')
        [
          'fr-FR'
        ]("Camion benne rigide robuste pour le transport fiable de grandes quantités de matériau dans l'exploitation minière et la construction.")
        [
          'en-AU'
        ]('V456 ST Heavy-duty rigid dump truck for reliable transport of large volumes of material in mining and construction.')
        [
          'es-ES'
        ]('Camión volquete rígido resistente para el transporte confiable de grandes volúmenes de material en minería y construcción.')
        [
          'en-GB'
        ]('V456 ST Heavy-duty rigid dump truck for reliable transport of large volumes of material in mining and construction.')
        [
          'en-NZ'
        ]('V456 ST Heavy-duty rigid dump truck for reliable transport of large volumes of material in mining and construction.')
        [
          'pt-PT'
        ]('Caminhão basculante rígido V456 ST para serviço pesado para transporte confiável de grandes volumes de material em mineração e construção.')
        [
          'en-US'
        ]('V456 ST Heavy-duty rigid dump truck for reliable transport of large volumes of material in mining and construction.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('v456-st')
        ['it-IT']('v456-st')
        ['nl-NL']('v456-st')
        ['fr-FR']('v456-st')
        ['en-AU']('v456-st')
        ['es-ES']('v456-st')
        ['en-GB']('v456-st')
        ['en-NZ']('v456-st')
        ['pt-PT']('v456-st')
        ['en-US']('v456-st')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.v456St01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.v456St02(),
      ProductVariantDraft.presets.sampleDataB2B.v456St03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(rigidDumpTrucksCategory.key!),
    ]);

export default v456St;
