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

const earthmovingBulldozersCategory = CategoryDraft.presets.sampleDataB2B
  .earthmovingBulldozers()
  .build<TCategoryDraft>();

const g123Qr = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('g123-qr')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('G123 QR Erdbewegungsbagger')
        ['it-IT']('G123 QR Bulldozer per Movimento Terra')
        ['nl-NL']('G123 QR Aardeverzet Bulldozer')
        ['fr-FR']('G123 QR Bulldozer de terrassement')
        ['en-AU']('G123 QR Earthmoving Bulldozer')
        ['es-ES']('G123 QR Topadora de movimiento de tierras')
        ['en-GB']('G123 QR Earthmoving Bulldozer')
        ['en-NZ']('G123 QR Earthmoving Bulldozer')
        ['pt-PT']('G123 QR Trator de Esteiras para Movimentação de Terra')
        ['en-US']('G123 QR Earthmoving Bulldozer')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Leistungsstarker Erdbewegungsbagger für effiziente Geländemanipulation und Aushub.'
        )
        ['it-IT'](
          "Potente bulldozer per movimento terra per la manipolazione efficiente del terreno e l'escavazione."
        )
        ['nl-NL'](
          'Krachtige aardeverzet bulldozer voor efficiënte terreinmanipulatie en graafwerkzaamheden.'
        )
        ['fr-FR'](
          "Bulldozer de terrassement puissant pour une manipulation efficace du terrain et l'excavation."
        )
        ['en-AU'](
          'Powerful earthmoving bulldozer for efficient terrain manipulation and excavation.'
        )
        ['es-ES'](
          'Topadora de movimiento de tierras potente para la manipulación eficiente del terreno y la excavación.'
        )
        ['en-GB'](
          'Powerful earthmoving bulldozer for efficient terrain manipulation and excavation.'
        )
        ['en-NZ'](
          'Powerful earthmoving bulldozer for efficient terrain manipulation and excavation.'
        )
        ['pt-PT'](
          'Trator de esteiras poderoso para movimentação eficiente de terra e escavação.'
        )
        ['en-US'](
          'Powerful earthmoving bulldozer for efficient terrain manipulation and excavation.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('g123-qr')
        ['it-IT']('g123-qr')
        ['nl-NL']('g123-qr')
        ['fr-FR']('g123-qr')
        ['en-AU']('g123-qr')
        ['es-ES']('g123-qr')
        ['en-GB']('g123-qr')
        ['en-NZ']('g123-qr')
        ['pt-PT']('g123-qr')
        ['en-US']('g123-qr')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.g123Qr01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.g123Qr02(),
      ProductVariantDraft.presets.sampleDataB2B.g123Qr03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(earthmovingBulldozersCategory.key!),
    ]);

export default g123Qr;
