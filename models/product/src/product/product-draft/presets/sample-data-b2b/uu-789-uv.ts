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

const mobileCranesCategory = CategoryDraft.presets.sampleDataB2B
  .mobileCranes()
  .build<TCategoryDraft>();

const uu789Uv = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('uu789-uv')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('UU789 UV Mobilkran für Vielseitigkeit')
        ['it-IT']('UU789 UV Gru Mobile per Versatilità')
        ['nl-NL']('UU789 UV Mobiele Kraan voor Veelzijdigheid')
        ['fr-FR']('UU789 UV Grue mobile pour polyvalence')
        ['en-AU']('UU789 UV Mobile Crane for Versatility')
        ['es-ES']('UU789 UV Grúa móvil para versatilidad')
        ['en-GB']('UU789 UV Mobile Crane for Versatility')
        ['en-NZ']('UU789 UV Mobile Crane for Versatility')
        ['pt-PT']('UU789 UV Grua Móvel para Versatilidade')
        ['en-US']('UU789 UV Mobile Crane for Versatility')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Kompakter Mobilkran, geeignet für eine Vielzahl von Hebearbeiten mit einfacher Mobilität.')
        [
          'it-IT'
        ]('Gru mobile compatta adatta per una varietà di compiti di sollevamento con facilità di mobilità.')
        [
          'nl-NL'
        ]('Compacte mobiele kraan geschikt voor diverse hijstaken met gemak van mobiliteit.')
        [
          'fr-FR'
        ]('Grue mobile compacte adaptée à diverses tâches de levage avec une grande facilité de mobilité.')
        [
          'en-AU'
        ]('Compact mobile crane suitable for a variety of lifting tasks with ease of mobility.')
        [
          'es-ES'
        ]('Grúa móvil compacta adecuada para una variedad de tareas de elevación con facilidad de movilidad.')
        [
          'en-GB'
        ]('Compact mobile crane suitable for a variety of lifting tasks with ease of mobility.')
        [
          'en-NZ'
        ]('Compact mobile crane suitable for a variety of lifting tasks with ease of mobility.')
        [
          'pt-PT'
        ]('Grua móvel compacta adequada para uma variedade de tarefas de elevação com facilidade de mobilidade.')
        [
          'en-US'
        ]('Compact mobile crane suitable for a variety of lifting tasks with ease of mobility.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('uu789-uv')
        ['it-IT']('uu789-uv')
        ['nl-NL']('uu789-uv')
        ['fr-FR']('uu789-uv')
        ['en-AU']('uu789-uv')
        ['es-ES']('uu789-uv')
        ['en-GB']('uu789-uv')
        ['en-NZ']('uu789-uv')
        ['pt-PT']('uu789-uv')
        ['en-US']('uu789-uv')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.uu789Uv01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.uu789Uv02(),
      ProductVariantDraft.presets.sampleDataB2B.uu789Uv03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(mobileCranesCategory.key!),
    ]);

export default uu789Uv;
