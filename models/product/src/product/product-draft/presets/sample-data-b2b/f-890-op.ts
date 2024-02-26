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
import { ProductDraft } from '../../../index';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxTaxCategory = TaxCategoryDraft.presets.sampleDataB2B
  .standardTax()
  .build<TTaxCategoryDraft>();

const heavyEarthmovingAndConstructionEquipmentProductType =
  ProductTypeDraft.presets.sampleDataB2B
    .heavyEarthmovingAndConstructionEquipment()
    .build<TProductTypeDraft>();

const logLoadersCategory = CategoryDraft.presets.sampleDataB2B
  .logLoaders()
  .build<TCategoryDraft>();

const f890Op = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('f890-op')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('F890 OP Holzlader')
        ['it-IT']('F890 OP Caricatore di Tronchi')
        ['en-UK']('F890 OP Log Loader')
        ['nl-NL']('F890 OP Boomlader')
        ['fr-FR']('F890 OP Chargeur de bûches')
        ['en-AU']('F890 OP Log Loader')
        ['es-ES']('F890 OP Cargador de troncos')
        ['en-GB']('F890 OP Log Loader')
        ['en-NZ']('F890 OP Log Loader')
        ['pt-PT']('F890 OP Carregadeira de Toras')
        ['en-US']('F890 OP Log Loader')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Vielseitiger Holzlader mit speziellen Funktionen für eine effiziente Handhabung von Baumstämmen in Forstanwendungen.'
        )
        ['it-IT'](
          'Caricatore di tronchi versatile con caratteristiche specializzate per la manipolazione efficiente di tronchi in applicazioni forestali.'
        )
        ['en-UK'](
          'Versatile log loader with specialized features for efficient log handling in forestry applications.'
        )
        ['nl-NL'](
          'Veelzijdige boomlader met gespecialiseerde functies voor efficiënte boomstamhantering in bosbouwtoepassingen.'
        )
        ['fr-FR'](
          'Chargeur de bûches polyvalent avec des fonctionnalités spécialisées pour une manipulation efficace des grumes dans les applications forestières.'
        )
        ['en-AU'](
          'Versatile log loader with specialized features for efficient log handling in forestry applications.'
        )
        ['es-ES'](
          'Cargador de troncos versátil con características especializadas para la manipulación eficiente de troncos en aplicaciones forestales.'
        )
        ['en-GB'](
          'Versatile log loader with specialized features for efficient log handling in forestry applications.'
        )
        ['en-NZ'](
          'Versatile log loader with specialized features for efficient log handling in forestry applications.'
        )
        ['pt-PT'](
          'Carregadeira de toras versátil com características especializadas para manuseio eficiente de toras em aplicações florestais.'
        )
        ['en-US'](
          'Versatile log loader with specialized features for efficient log handling in forestry applications.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('f890-op')
        ['it-IT']('f890-op')
        ['en-UK']('f890-op')
        ['nl-NL']('f890-op')
        ['fr-FR']('f890-op')
        ['en-AU']('f890-op')
        ['es-ES']('f890-op')
        ['en-GB']('f890-op')
        ['en-NZ']('f890-op')
        ['pt-PT']('f890-op')
        ['en-US']('f890-op')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.f890Op01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.f890Op02(),
      ProductVariantDraft.presets.sampleDataB2B.f890Op03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(logLoadersCategory.key!),
    ]);

export default f890Op;
