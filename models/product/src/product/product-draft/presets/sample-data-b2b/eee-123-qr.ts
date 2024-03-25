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

const demolitionHammersCategory = CategoryDraft.presets.sampleDataB2B
  .demolitionHammers()
  .build<TCategoryDraft>();

const eee123Qr = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('eee123-qr')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('EEE123 QR Abbruchhammer')
        ['it-IT']('EEE123 QR Martello Demolitore')
        ['nl-NL']('EEE123 QR Sloophamer')
        ['fr-FR']('EEE123 QR Marteau de démolition')
        ['en-AU']('EEE123 QR Demolition Hammer')
        ['es-ES']('EEE123 QR Martillo de demolición')
        ['en-GB']('EEE123 QR Demolition Hammer')
        ['en-NZ']('EEE123 QR Demolition Hammer')
        ['pt-PT']('EEE123 QR Martelo Demolidor')
        ['en-US']('EEE123 QR Demolition Hammer')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Leistungsstarker Abbruchhammer für effizientes Brechen und Abbrucharbeiten in Bauprojekten.'
        )
        ['it-IT'](
          'Potente martello demolitore progettato per compiti efficienti di demolizione e frantumazione in progetti edili.'
        )
        ['nl-NL'](
          'Krachtige sloophamer ontworpen voor efficiënt breken en slopen in bouwprojecten.'
        )
        ['fr-FR'](
          'Marteau de démolition puissant conçu pour des tâches de casse et de démolition efficaces dans les projets de construction.'
        )
        ['en-AU'](
          'Powerful demolition hammer designed for efficient breaking and demolition tasks in construction projects.'
        )
        ['es-ES'](
          'Martillo de demolición potente diseñado para tareas eficientes de rotura y demolición en proyectos de construcción.'
        )
        ['en-GB'](
          'Powerful demolition hammer designed for efficient breaking and demolition tasks in construction projects.'
        )
        ['en-NZ'](
          'Powerful demolition hammer designed for efficient breaking and demolition tasks in construction projects.'
        )
        ['pt-PT'](
          'Martelo demolidor potente projetado para tarefas eficientes de quebra e demolição em projetos de construção.'
        )
        ['en-US'](
          'Powerful demolition hammer designed for efficient breaking and demolition tasks in construction projects.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('eee123-qr')
        ['it-IT']('eee123-qr')
        ['nl-NL']('eee123-qr')
        ['fr-FR']('eee123-qr')
        ['en-AU']('eee123-qr')
        ['es-ES']('eee123-qr')
        ['en-GB']('eee123-qr')
        ['en-NZ']('eee123-qr')
        ['pt-PT']('eee123-qr')
        ['en-US']('eee123-qr')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.eee123Qr01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.eee123Qr02(),
      ProductVariantDraft.presets.sampleDataB2B.eee123Qr03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(demolitionHammersCategory.key!),
    ]);

export default eee123Qr;
