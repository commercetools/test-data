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

const heavyLiftingAndSpecializedEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyLiftingAndSpecializedEquipment()
    .build<TProductTypeDraft>();

const blastholeDrillsCategory = CategoryDraft.presets.sampleDataB2B
  .blastholeDrills()
  .build<TCategoryDraft>();

const yy123Qr = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('yy123-qr')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('YY123 QR Blasthole-Bohrer')
        ['it-IT']('YY123 QR Trapano per Fori di Miniera')
        ['nl-NL']('YY123 QR Boorgatboor')
        ['fr-FR']('YY123 QR Forage de trou de mine')
        ['en-AU']('YY123 QR Blasthole Drill')
        ['es-ES']('YY123 QR Perforadora de agujeros de voladura')
        ['en-GB']('YY123 QR Blasthole Drill')
        ['en-NZ']('YY123 QR Blasthole Drill')
        ['pt-PT']('YY123 QR Perfuratriz para Furos de Explosão')
        ['en-US']('YY123 QR Blasthole Drill')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Leistungsstarker Blasthole-Bohrer für effizientes Bohren in Bergbauoperationen.'
        )
        ['it-IT'](
          'Potente trapano per fori di miniera progettato per trapanazioni efficienti in operazioni minerarie.'
        )
        ['nl-NL'](
          'Krachtige boorgatboor ontworpen voor efficiënt boren in mijnbouwoperaties.'
        )
        ['fr-FR'](
          'Forage de trou de mine puissant conçu pour le forage efficace dans les opérations minières.'
        )
        ['en-AU'](
          'Powerful blasthole drill designed for efficient drilling in mining operations.'
        )
        ['es-ES'](
          'Perforadora de agujeros de voladura potente diseñada para perforar de manera eficiente en operaciones mineras.'
        )
        ['en-GB'](
          'Powerful blasthole drill designed for efficient drilling in mining operations.'
        )
        ['en-NZ'](
          'Powerful blasthole drill designed for efficient drilling in mining operations.'
        )
        ['pt-PT'](
          'Perfuratriz potente projetada para perfuração eficiente em operações de mineração.'
        )
        ['en-US'](
          'Powerful blasthole drill designed for efficient drilling in mining operations.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('yy123-qr')
        ['it-IT']('yy123-qr')
        ['nl-NL']('yy123-qr')
        ['fr-FR']('yy123-qr')
        ['en-AU']('yy123-qr')
        ['es-ES']('yy123-qr')
        ['en-GB']('yy123-qr')
        ['en-NZ']('yy123-qr')
        ['pt-PT']('yy123-qr')
        ['en-US']('yy123-qr')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.yy123Qr01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.yy123Qr02(),
      ProductVariantDraft.presets.sampleDataB2B.yy123Qr03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(blastholeDrillsCategory.key!),
    ]);

export default yy123Qr;
