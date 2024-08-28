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

const amphibiousExcavatorsCategory = CategoryDraft.presets.sampleDataB2B
  .amphibiousExcavators()
  .build<TCategoryDraft>();

const s567Uv = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('s567-uv')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('S567 UV Amphibienbagger')
        ['it-IT']('S567 UV Escavatore Anfibio')
        ['nl-NL']('S567 UV Amfibische Graafmachine')
        ['fr-FR']('S567 UV Excavateur amphibie')
        ['en-AU']('S567 UV Amphibious Excavator')
        ['es-ES']('S567 UV Excavadora anfibia')
        ['en-GB']('S567 UV Amphibious Excavator')
        ['en-NZ']('S567 UV Amphibious Excavator')
        ['pt-PT']('S567 UV Escavadeira Anfíbia')
        ['en-US']('S567 UV Amphibious Excavator')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Amphibienbagger mit hoher Kapazität für effiziente Aushubanwendungen an Land und im Wasser.'
        )
        ['it-IT'](
          'Escavatore anfibio ad alta capacità per applicazioni efficienti di scavo in terra e in acqua.'
        )
        ['nl-NL'](
          'Hoogcapaciteits amfibische graafmachine voor efficiënte land- en watergraaf toepassingen.'
        )
        ['fr-FR'](
          "Excavateur amphibie haute capacité pour des applications d'excavation efficaces sur terre et dans l'eau."
        )
        ['en-AU'](
          'High-capacity amphibious excavator for efficient land and water excavation applications.'
        )
        ['es-ES'](
          'Excavadora anfibia de alta capacidad para aplicaciones eficientes de excavación en tierra y agua.'
        )
        ['en-GB'](
          'High-capacity amphibious excavator for efficient land and water excavation applications.'
        )
        ['en-NZ'](
          'High-capacity amphibious excavator for efficient land and water excavation applications.'
        )
        ['pt-PT'](
          'Escavadeira anfíbia de alta capacidade para aplicações eficientes de escavação em terra e água.'
        )
        ['en-US'](
          'High-capacity amphibious excavator for efficient land and water excavation applications.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('s567-uv')
        ['it-IT']('s567-uv')
        ['nl-NL']('s567-uv')
        ['fr-FR']('s567-uv')
        ['en-AU']('s567-uv')
        ['es-ES']('s567-uv')
        ['en-GB']('s567-uv')
        ['en-NZ']('s567-uv')
        ['pt-PT']('s567-uv')
        ['en-US']('s567-uv')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.s567Uv01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.s567Uv02(),
      ProductVariantDraft.presets.sampleDataB2B.s567Uv03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(amphibiousExcavatorsCategory.key!),
    ]);

export default s567Uv;
