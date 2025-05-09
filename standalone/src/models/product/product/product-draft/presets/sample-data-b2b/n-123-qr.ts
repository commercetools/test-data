import { TBuilder } from '../../../../../../core';
import {
  CategoryDraft,
  TCategoryDraft,
} from '../../../../../category';
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

const quarryLoadersCategory = CategoryDraft.presets.sampleDataB2B
  .quarryLoaders()
  .build<TCategoryDraft>();

const n123Qr = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('n123-qr')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('N123 QR Steinbruchlader')
        ['it-IT']('N123 QR Caricatore per Cave')
        ['nl-NL']('N123 QR Steengroeve Lader')
        ['fr-FR']('N123 QR Chargeur de carrière')
        ['en-AU']('N123 QR Quarry Loader')
        ['es-ES']('N123 QR Cargador de cantera')
        ['en-GB']('N123 QR Quarry Loader')
        ['en-NZ']('N123 QR Quarry Loader')
        ['pt-PT']('N123 QR Carregadeira de Pedreira')
        ['en-US']('N123 QR Quarry Loader')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Robuster Steinbruchlader für effiziente Materialverarbeitung im Bergbau und Bauwesen.')
        [
          'it-IT'
        ]('Caricatore robusto per cave progettato per la manipolazione efficiente di materiali in miniere e costruzioni.')
        [
          'nl-NL'
        ]('Robuuste steengroeve lader ontworpen voor efficiënte materiaalhantering in mijnbouw en bouw.')
        [
          'fr-FR'
        ]("Chargeur de carrière robuste conçu pour la manipulation efficace des matériaux dans l'exploitation minière et la construction.")
        [
          'en-AU'
        ]('Robust quarry loader designed for efficient material handling in mining and construction.')
        [
          'es-ES'
        ]('Cargador de cantera resistente diseñado para la manipulación eficiente de materiales en minería y construcción.')
        [
          'en-GB'
        ]('Robust quarry loader designed for efficient material handling in mining and construction.')
        [
          'en-NZ'
        ]('Robust quarry loader designed for efficient material handling in mining and construction.')
        [
          'pt-PT'
        ]('Carregadeira robusta para pedreiras projetada para manuseio eficiente de materiais em mineração e construção.')
        [
          'en-US'
        ]('Robust quarry loader designed for efficient material handling in mining and construction.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('n123-qr')
        ['it-IT']('n123-qr')
        ['nl-NL']('n123-qr')
        ['fr-FR']('n123-qr')
        ['en-AU']('n123-qr')
        ['es-ES']('n123-qr')
        ['en-GB']('n123-qr')
        ['en-NZ']('n123-qr')
        ['pt-PT']('n123-qr')
        ['en-US']('n123-qr')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.n123Qr01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.n123Qr02(),
      ProductVariantDraft.presets.sampleDataB2B.n123Qr03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(quarryLoadersCategory.key!),
    ]);

export default n123Qr;
