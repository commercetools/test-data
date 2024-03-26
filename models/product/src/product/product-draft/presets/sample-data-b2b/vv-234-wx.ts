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

const crawlerCranesCategory = CategoryDraft.presets.sampleDataB2B
  .crawlerCranes()
  .build<TCategoryDraft>();

const vv234Wx = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('vv234-wx')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('VV234 WX Raupenkran für Stabilität')
        ['it-IT']('VV234 WX Gru Cingolata per Stabilità')
        ['nl-NL']('VV234 WX Rupskraan voor Stabiliteit')
        ['fr-FR']('VV234 WX Grue sur chenilles pour stabilité')
        ['en-AU']('VV234 WX Crawler Crane for Stability')
        ['es-ES']('VV234 WX Grúa sobre orugas para estabilidad')
        ['en-GB']('VV234 WX Crawler Crane for Stability')
        ['en-NZ']('VV234 WX Crawler Crane for Stability')
        ['pt-PT']('VV234 WX Grua de Esteiras para Estabilidade')
        ['en-US']('VV234 WX Crawler Crane for Stability')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Stabiler Raupenkran für anspruchsvolle Hebearbeiten in schwierigem Gelände.'
        )
        ['it-IT'](
          'Gru cingolata stabile progettata per compiti di sollevamento pesanti in terreni difficili.'
        )
        ['nl-NL'](
          'Stabiele rupskraan ontworpen voor zware hijstaken in uitdagend terrein.'
        )
        ['fr-FR'](
          'Grue sur chenilles stable conçue pour des tâches de levage lourdes dans un terrain difficile.'
        )
        ['en-AU'](
          'Stable crawler crane designed for heavy lifting tasks in challenging terrain.'
        )
        ['es-ES'](
          'Grúa sobre orugas estable diseñada para tareas de elevación pesadas en terrenos desafiantes.'
        )
        ['en-GB'](
          'Stable crawler crane designed for heavy lifting tasks in challenging terrain.'
        )
        ['en-NZ'](
          'Stable crawler crane designed for heavy lifting tasks in challenging terrain.'
        )
        ['pt-PT'](
          'Grua de esteiras estável projetada para tarefas pesadas de elevação em terrenos desafiadores.'
        )
        ['en-US'](
          'Stable crawler crane designed for heavy lifting tasks in challenging terrain.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('vv234-wx')
        ['it-IT']('vv234-wx')
        ['nl-NL']('vv234-wx')
        ['fr-FR']('vv234-wx')
        ['en-AU']('vv234-wx')
        ['es-ES']('vv234-wx')
        ['en-GB']('vv234-wx')
        ['en-NZ']('vv234-wx')
        ['pt-PT']('vv234-wx')
        ['en-US']('vv234-wx')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.vv234Wx01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.vv234Wx02(),
      ProductVariantDraft.presets.sampleDataB2B.vv234Wx03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(crawlerCranesCategory.key!),
    ]);

export default vv234Wx;
