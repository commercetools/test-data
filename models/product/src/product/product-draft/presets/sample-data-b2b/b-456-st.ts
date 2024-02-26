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

const constructionLoadersCategory = CategoryDraft.presets.sampleDataB2B
  .constructionLoaders()
  .build<TCategoryDraft>();

const b456St = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('b456-st')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('B456 ST Bau-Lader')
        ['it-IT']('B456 ST Caricatore per Costruzioni')
        ['en-UK']('B456 ST Construction Loader')
        ['nl-NL']('B456 ST Bouwlader')
        ['fr-FR']('B456 ST Chargeur de construction')
        ['en-AU']('B456 ST Construction Loader')
        ['es-ES']('B456 ST Cargador de construcción')
        ['en-GB']('B456 ST Construction Loader')
        ['en-NZ']('B456 ST Construction Loader')
        ['pt-PT']('B456 ST Carregadeira de Construção')
        ['en-US']('B456 ST Construction Loader')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Vielseitiger Baulader für verschiedene Bau- und Ladeanwendungen.'
        )
        ['it-IT'](
          'Caricatore per costruzioni versatile per varie applicazioni di costruzione e carico.'
        )
        ['en-UK'](
          'Versatile construction loader for various construction and loading applications.'
        )
        ['nl-NL'](
          'Veelzijdige bouwlader voor diverse bouw- en laadtoepassingen.'
        )
        ['fr-FR'](
          'Chargeur de construction polyvalent pour diverses applications de construction et de chargement.'
        )
        ['en-AU'](
          'Versatile construction loader for various construction and loading applications.'
        )
        ['es-ES'](
          'Cargador de construcción versátil para diversas aplicaciones de construcción y carga.'
        )
        ['en-GB'](
          'Versatile construction loader for various construction and loading applications.'
        )
        ['en-NZ'](
          'Versatile construction loader for various construction and loading applications.'
        )
        ['pt-PT'](
          'Carregadeira de construção versátil para várias aplicações de construção e carregamento.'
        )
        ['en-US'](
          'Versatile construction loader for various construction and loading applications.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('b456-st')
        ['it-IT']('b456-st')
        ['en-UK']('b456-st')
        ['nl-NL']('b456-st')
        ['fr-FR']('b456-st')
        ['en-AU']('b456-st')
        ['es-ES']('b456-st')
        ['en-GB']('b456-st')
        ['en-NZ']('b456-st')
        ['pt-PT']('b456-st')
        ['en-US']('b456-st')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.b456St01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.b456St02(),
      ProductVariantDraft.presets.sampleDataB2B.b456St03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(constructionLoadersCategory.key!),
    ]);

export default b456St;
