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

const landfillCompactorsCategory = CategoryDraft.presets.sampleDataB2B
  .landfillCompactors()
  .build<TCategoryDraft>();

const ll890Op = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('ll890-op')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('LL890 OP Deponie-Verdichter')
        ['it-IT']('LL890 OP Compattatore per Discariche')
        ['nl-NL']('LL890 OP Stortplaatsverdichter')
        ['fr-FR']('LL890 OP Compacteur de décharge')
        ['en-AU']('LL890 OP Landfill Compactor')
        ['es-ES']('LL890 OP Compactador de vertedero')
        ['en-GB']('LL890 OP Landfill Compactor')
        ['en-NZ']('LL890 OP Landfill Compactor')
        ['pt-PT']('LL890 OP Compactador de Aterro')
        ['en-US']('LL890 OP Landfill Compactor')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Vielseitiger Deponie-Verdichter für verschiedene Anwendungen im Bereich der Abfallverdichtung.')
        [
          'it-IT'
        ]('Compattatore per discariche versatile per varie applicazioni di compattazione dei rifiuti.')
        [
          'nl-NL'
        ]('Veelzijdige stortplaatsverdichter voor diverse afvalverdichtingstoepassingen.')
        [
          'fr-FR'
        ]('Compacteur de décharge polyvalent pour diverses applications de compactage des déchets.')
        [
          'en-AU'
        ]('Versatile landfill compactor for various waste compaction applications.')
        [
          'es-ES'
        ]('Compactador de vertedero versátil para diversas aplicaciones de compactación de residuos.')
        [
          'en-GB'
        ]('Versatile landfill compactor for various waste compaction applications.')
        [
          'en-NZ'
        ]('Versatile landfill compactor for various waste compaction applications.')
        [
          'pt-PT'
        ]('Compactador de aterro versátil para várias aplicações de compactação de resíduos.')
        [
          'en-US'
        ]('Versatile landfill compactor for various waste compaction applications.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('ll890-op')
        ['it-IT']('ll890-op')
        ['nl-NL']('ll890-op')
        ['fr-FR']('ll890-op')
        ['en-AU']('ll890-op')
        ['es-ES']('ll890-op')
        ['en-GB']('ll890-op')
        ['en-NZ']('ll890-op')
        ['pt-PT']('ll890-op')
        ['en-US']('ll890-op')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.ll890Op01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.ll890Op02(),
      ProductVariantDraft.presets.sampleDataB2B.ll890Op03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(landfillCompactorsCategory.key!),
    ]);

export default ll890Op;
