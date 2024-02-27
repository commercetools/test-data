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

const heavyEarthmovingAndConstructionEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyEarthmovingAndConstructionEquipment()
    .build<TProductTypeDraft>();

const landfillCompactorsCategory = CategoryDraft.presets.sampleDataB2B
  .landfillCompactors()
  .build<TCategoryDraft>();

const kk567Yz = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('kk567-yz')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('KK567 YZ Deponie-Verdichter')
        ['it-IT']('KK567 YZ Compattatore per Discariche')
        ['en-UK']('KK567 YZ Landfill Compactor')
        ['nl-NL']('KK567 YZ Stortplaatsverdichter')
        ['fr-FR']('KK567 YZ Compacteur de décharge')
        ['en-AU']('KK567 YZ Landfill Compactor')
        ['es-ES']('KK567 YZ Compactador de vertedero')
        ['en-GB']('KK567 YZ Landfill Compactor')
        ['en-NZ']('KK567 YZ Landfill Compactor')
        ['pt-PT']('KK567 YZ Compactador de Aterro')
        ['en-US']('KK567 YZ Landfill Compactor')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Fortgeschrittener Deponie-Verdichter mit speziellen Funktionen für effektive Verdichtung von Abfällen.'
        )
        ['it-IT'](
          'Compattatore avanzato per discariche con caratteristiche specializzate per una compattazione efficace dei rifiuti.'
        )
        ['en-UK'](
          'Advanced landfill compactor with specialized features for effective waste compaction.'
        )
        ['nl-NL'](
          'Geavanceerde stortplaatsverdichter met gespecialiseerde functies voor effectieve afvalverdichting.'
        )
        ['fr-FR'](
          'Compacteur de décharge avancé avec des fonctionnalités spécialisées pour un compactage efficace des déchets.'
        )
        ['en-AU'](
          'Advanced landfill compactor with specialized features for effective waste compaction.'
        )
        ['es-ES'](
          'Compactador de vertedero avanzado con características especializadas para una compactación efectiva de residuos.'
        )
        ['en-GB'](
          'Advanced landfill compactor with specialized features for effective waste compaction.'
        )
        ['en-NZ'](
          'Advanced landfill compactor with specialized features for effective waste compaction.'
        )
        ['pt-PT'](
          'Compactador de aterro avançado com recursos especializados para compactação eficaz de resíduos.'
        )
        ['en-US'](
          'Advanced landfill compactor with specialized features for effective waste compaction.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('kk567-yz')
        ['it-IT']('kk567-yz')
        ['en-UK']('kk567-yz')
        ['nl-NL']('kk567-yz')
        ['fr-FR']('kk567-yz')
        ['en-AU']('kk567-yz')
        ['es-ES']('kk567-yz')
        ['en-GB']('kk567-yz')
        ['en-NZ']('kk567-yz')
        ['pt-PT']('kk567-yz')
        ['en-US']('kk567-yz')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.kk567Yz01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.kk567Yz02(),
      ProductVariantDraft.presets.sampleDataB2B.kk567Yz03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(landfillCompactorsCategory.key!),
    ]);

export default kk567Yz;
