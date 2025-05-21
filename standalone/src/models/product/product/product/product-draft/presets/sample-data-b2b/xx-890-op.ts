import { TBuilder } from '../../../../../../core';
import { CategoryDraft, TCategoryDraft } from '../../../../../category';
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

const heavyLiftingAndSpecializedEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyLiftingAndSpecializedEquipment()
    .build<TProductTypeDraft>();

const crawlerCranesCategory = CategoryDraft.presets.sampleDataB2B
  .crawlerCranes()
  .build<TCategoryDraft>();

const xx890Op = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('xx890-op')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('XX890 OP Raupenkran für Stabilität')
        ['it-IT']('XX890 OP Gru Cingolata per Stabilità')
        ['nl-NL']('XX890 OP Rupskraan voor Stabiliteit')
        ['fr-FR']('XX890 OP Grue sur chenilles pour stabilité')
        ['en-AU']('XX890 OP Crawler Crane for Stability')
        ['es-ES']('XX890 OP Grúa sobre orugas para estabilidad')
        ['en-GB']('XX890 OP Crawler Crane for Stability')
        ['en-NZ']('XX890 OP Crawler Crane for Stability')
        ['pt-PT']('XX890 OP Grua de Esteiras para Estabilidade')
        ['en-US']('XX890 OP Crawler Crane for Stability')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Raupenkran mit hoher Kapazität und außergewöhnlichen Stabilitätsmerkmalen für präzise Hebearbeiten.')
        [
          'it-IT'
        ]('Gru cingolata ad alta capacità con caratteristiche eccezionali di stabilità per compiti di sollevamento pesanti e precisi.')
        [
          'nl-NL'
        ]('Hoogcapaciteits rupskraan met uitzonderlijke stabiliteitsfuncties voor nauwkeurige zware hijstaken.')
        [
          'fr-FR'
        ]('Grue sur chenilles à haute capacité avec des caractéristiques de stabilité exceptionnelles pour des tâches de levage lourdes et précises.')
        [
          'en-AU'
        ]('High-capacity crawler crane with exceptional stability features for precise heavy lifting tasks.')
        [
          'es-ES'
        ]('Grúa sobre orugas de gran capacidad con características excepcionales de estabilidad para tareas precisas de elevación pesada.')
        [
          'en-GB'
        ]('High-capacity crawler crane with exceptional stability features for precise heavy lifting tasks.')
        [
          'en-NZ'
        ]('High-capacity crawler crane with exceptional stability features for precise heavy lifting tasks.')
        [
          'pt-PT'
        ]('Grua de esteiras de alta capacidade com características excepcionais de estabilidade para tarefas precisas de elevação pesada.')
        [
          'en-US'
        ]('High-capacity crawler crane with exceptional stability features for precise heavy lifting tasks.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('xx890-op')
        ['it-IT']('xx890-op')
        ['nl-NL']('xx890-op')
        ['fr-FR']('xx890-op')
        ['en-AU']('xx890-op')
        ['es-ES']('xx890-op')
        ['en-GB']('xx890-op')
        ['en-NZ']('xx890-op')
        ['pt-PT']('xx890-op')
        ['en-US']('xx890-op')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.xx890Op01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.xx890Op02(),
      ProductVariantDraft.presets.sampleDataB2B.xx890Op03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(crawlerCranesCategory.key!),
    ]);

export default xx890Op;
