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

const vibratorySoilCompactorsCategory = CategoryDraft.presets.sampleDataB2B
  .vibratorySoilCompactors()
  .build<TCategoryDraft>();

const gg123Qr = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('gg123-qr')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('GG123 QR Vibrationswalze')
        ['it-IT']('GG123 QR Compattatore Vibrante per Terreni')
        ['nl-NL']('GG123 QR Trilbodemverdichter')
        ['fr-FR']('GG123 QR Compacteur de sol vibrant')
        ['en-AU']('GG123 QR Vibratory Soil Compactor')
        ['es-ES']('GG123 QR Compactador de suelo vibratorio')
        ['en-GB']('GG123 QR Vibratory Soil Compactor')
        ['en-NZ']('GG123 QR Vibratory Soil Compactor')
        ['pt-PT']('GG123 QR Compactador de Solo Vibratório')
        ['en-US']('GG123 QR Vibratory Soil Compactor')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Leistungsstarker Vibrationswalze für die effiziente Verdichtung verschiedener Bodentypen.')
        [
          'it-IT'
        ]('Potente compattatore vibrante per terreni per la compattazione efficiente di vari tipi di suolo.')
        [
          'nl-NL'
        ]('Krachtige trilbodemverdichter voor efficiënte verdichting van diverse grondsoorten.')
        [
          'fr-FR'
        ]('Compacteur de sol vibrant puissant pour la compactage efficace de différents types de sols.')
        [
          'en-AU'
        ]('Powerful vibratory soil compactor for efficient compaction of various soil types.')
        [
          'es-ES'
        ]('Compactador de suelo vibratorio potente para la compactación eficiente de diversos tipos de suelos.')
        [
          'en-GB'
        ]('Powerful vibratory soil compactor for efficient compaction of various soil types.')
        [
          'en-NZ'
        ]('Powerful vibratory soil compactor for efficient compaction of various soil types.')
        [
          'pt-PT'
        ]('Compactador de solo vibratório potente para compactação eficiente de vários tipos de solo.')
        [
          'en-US'
        ]('Powerful vibratory soil compactor for efficient compaction of various soil types.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('gg123-qr')
        ['it-IT']('gg123-qr')
        ['nl-NL']('gg123-qr')
        ['fr-FR']('gg123-qr')
        ['en-AU']('gg123-qr')
        ['es-ES']('gg123-qr')
        ['en-GB']('gg123-qr')
        ['en-NZ']('gg123-qr')
        ['pt-PT']('gg123-qr')
        ['en-US']('gg123-qr')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.gg123Qr01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.gg123Qr02(),
      ProductVariantDraft.presets.sampleDataB2B.gg123Qr03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(vibratorySoilCompactorsCategory.key!),
    ]);

export default gg123Qr;
