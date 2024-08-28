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

const logLoadersCategory = CategoryDraft.presets.sampleDataB2B
  .logLoaders()
  .build<TCategoryDraft>();

const d234Wx = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('d234-wx')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('D234 WX Holzlader')
        ['it-IT']('D234 WX Caricatore di Tronchi')
        ['nl-NL']('D234 WX Boomlader')
        ['fr-FR']('D234 WX Chargeur de bûches')
        ['en-AU']('D234 WX Log Loader')
        ['es-ES']('D234 WX Cargador de troncos')
        ['en-GB']('D234 WX Log Loader')
        ['en-NZ']('D234 WX Log Loader')
        ['pt-PT']('D234 WX Carregadeira de Toras')
        ['en-US']('D234 WX Log Loader')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Spezialisierter Holzlader für effiziente Handhabung von Baumstämmen in Forstbetrieben.'
        )
        ['it-IT'](
          'Caricatore di tronchi specializzato progettato per la manipolazione efficiente di tronchi in operazioni forestali.'
        )
        ['nl-NL'](
          'Gespecialiseerde boomlader ontworpen voor efficiënte hantering van boomstammen in bosbouwoperaties.'
        )
        ['fr-FR'](
          'Chargeur de bûches spécialisé conçu pour la manipulation efficace des grumes dans les opérations forestières.'
        )
        ['en-AU'](
          'Specialized log loader designed for efficient handling of logs in forestry operations.'
        )
        ['es-ES'](
          'Cargador de troncos especializado diseñado para la manipulación eficiente de troncos en operaciones forestales.'
        )
        ['en-GB'](
          'Specialized log loader designed for efficient handling of logs in forestry operations.'
        )
        ['en-NZ'](
          'Specialized log loader designed for efficient handling of logs in forestry operations.'
        )
        ['pt-PT'](
          'Carregadeira especializada de toras projetada para manuseio eficiente de toras em operações florestais.'
        )
        ['en-US'](
          'Specialized log loader designed for efficient handling of logs in forestry operations.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('d234-wx')
        ['it-IT']('d234-wx')
        ['nl-NL']('d234-wx')
        ['fr-FR']('d234-wx')
        ['en-AU']('d234-wx')
        ['es-ES']('d234-wx')
        ['en-GB']('d234-wx')
        ['en-NZ']('d234-wx')
        ['pt-PT']('d234-wx')
        ['en-US']('d234-wx')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.d234Wx01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.d234Wx02(),
      ProductVariantDraft.presets.sampleDataB2B.d234Wx03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(logLoadersCategory.key!),
    ]);

export default d234Wx;
