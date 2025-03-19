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

const towerCranesCategory = CategoryDraft.presets.sampleDataB2B
  .towerCranes()
  .build<TCategoryDraft>();

const ss123Qr = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('ss123-qr')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('SS123 QR Turmkran für Hochhausbau')
        ['it-IT']('SS123 QR Gru a Torre per Costruzioni Alte')
        ['nl-NL']('SS123 QR Torenkraan voor Hoogbouw')
        [
          'fr-FR'
        ]('SS123 QR Grue de chantier pour la construction de gratte-ciel')
        ['en-AU']('SS123 QR Tower Crane for High-rise Construction')
        ['es-ES']('SS123 QR Grúa torre para construcción de rascacielos')
        ['en-GB']('SS123 QR Tower Crane for High-rise Construction')
        ['en-NZ']('SS123 QR Tower Crane for High-rise Construction')
        ['pt-PT']('SS123 QR Grua de Torre para Construção em Altura')
        ['en-US']('SS123 QR Tower Crane for High-rise Construction')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Hochleistungs-Turmkran für effizientes Heben in Hochhausbau-Projekten.')
        [
          'it-IT'
        ]('Gru a torre ad alte prestazioni progettata per sollevamenti efficienti in progetti di costruzione di grattacieli.')
        [
          'nl-NL'
        ]('Hoogpresterende torenkraan ontworpen voor efficiënt hijsen bij hoogbouwprojecten.')
        [
          'fr-FR'
        ]('Grue de chantier haute performance conçue pour un levage efficace dans les projets de construction de gratte-ciel.')
        [
          'en-AU'
        ]('High-performance tower crane designed for efficient lifting in high-rise construction projects.')
        [
          'es-ES'
        ]('Grúa torre de alto rendimiento diseñada para elevación eficiente en proyectos de construcción de rascacielos.')
        [
          'en-GB'
        ]('High-performance tower crane designed for efficient lifting in high-rise construction projects.')
        [
          'en-NZ'
        ]('High-performance tower crane designed for efficient lifting in high-rise construction projects.')
        [
          'pt-PT'
        ]('Grua de torre de alto desempenho projetada para elevação eficiente em projetos de construção de edifícios altos.')
        [
          'en-US'
        ]('High-performance tower crane designed for efficient lifting in high-rise construction projects.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('ss123-qr')
        ['it-IT']('ss123-qr')
        ['nl-NL']('ss123-qr')
        ['fr-FR']('ss123-qr')
        ['en-AU']('ss123-qr')
        ['es-ES']('ss123-qr')
        ['en-GB']('ss123-qr')
        ['en-NZ']('ss123-qr')
        ['pt-PT']('ss123-qr')
        ['en-US']('ss123-qr')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.ss123Qr01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.ss123Qr02(),
      ProductVariantDraft.presets.sampleDataB2B.ss123Qr03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(towerCranesCategory.key!),
    ]);

export default ss123Qr;
