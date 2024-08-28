import type {
  TCategoryDraft} from '@commercetools-test-data/category';
import {
  CategoryDraft
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

const heavyEarthmovingAndConstructionEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyEarthmovingAndConstructionEquipment()
    .build<TProductTypeDraft>();

const articulatedDumpTrucksCategory = CategoryDraft.presets.sampleDataB2B
  .articulatedDumpTrucks()
  .build<TCategoryDraft>();

const u123Qr = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('u123-qr')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('U123 QR Gelenkdumper')
        ['it-IT']('U123 QR Camion Ribaltabile Articolato')
        ['nl-NL']('U123 QR Knikdumptruck')
        ['fr-FR']('U123 QR Camion benne articulé')
        ['en-AU']('U123 QR Articulated Dump Truck')
        ['es-ES']('U123 QR Camión volquete articulado')
        ['en-GB']('U123 QR Articulated Dump Truck')
        ['en-NZ']('U123 QR Articulated Dump Truck')
        ['pt-PT']('U123 QR Caminhão Articulado Basculante')
        ['en-US']('U123 QR Articulated Dump Truck')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Robuster Gelenkdumper für den effizienten Transport von schweren Lasten in Bau- und Bergbauanwendungen.'
        )
        ['it-IT'](
          'Camion ribaltabile articolato durevole per il trasporto efficiente di carichi pesanti in costruzioni e miniere.'
        )
        ['nl-NL'](
          'Duurzame knikdumptruck voor efficiënt transport van zware ladingen in bouw en mijnbouw.'
        )
        ['fr-FR'](
          "Camion benne articulé durable pour le transport efficace de charges lourdes dans la construction et l'exploitation minière."
        )
        ['en-AU'](
          'Durable articulated dump truck for efficient transport of heavy loads in construction and mining.'
        )
        ['es-ES'](
          'Camión volquete articulado resistente para el transporte eficiente de cargas pesadas en construcción y minería.'
        )
        ['en-GB'](
          'Durable articulated dump truck for efficient transport of heavy loads in construction and mining.'
        )
        ['en-NZ'](
          'Durable articulated dump truck for efficient transport of heavy loads in construction and mining.'
        )
        ['pt-PT'](
          'Caminhão articulado basculante durável para transporte eficiente de cargas pesadas em construção e mineração.'
        )
        ['en-US'](
          'Durable articulated dump truck for efficient transport of heavy loads in construction and mining.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('u123-qr')
        ['it-IT']('u123-qr')
        ['nl-NL']('u123-qr')
        ['fr-FR']('u123-qr')
        ['en-AU']('u123-qr')
        ['es-ES']('u123-qr')
        ['en-GB']('u123-qr')
        ['en-NZ']('u123-qr')
        ['pt-PT']('u123-qr')
        ['en-US']('u123-qr')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.u123Qr01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.u123Qr02(),
      ProductVariantDraft.presets.sampleDataB2B.u123Qr03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(articulatedDumpTrucksCategory.key!),
    ]);

export default u123Qr;
