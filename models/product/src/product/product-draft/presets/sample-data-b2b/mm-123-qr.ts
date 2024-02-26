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

const wheeledExcavatorsForConstructionCategory =
  CategoryDraft.presets.sampleDataB2B
    .wheeledExcavatorsForConstruction()
    .build<TCategoryDraft>();

const mm123Qr = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('mm123-qr')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('MM123 QR Radbagger für Bau')
        ['it-IT']('MM123 QR Escavatore su Ruote per Costruzioni')
        ['en-UK']('MM123 QR Wheeled Excavator for Construction')
        ['nl-NL']('MM123 QR Wiellader voor Bouw')
        ['fr-FR']('MM123 QR Excavatrice sur roues pour la construction')
        ['en-AU']('MM123 QR Wheeled Excavator for Construction')
        ['es-ES']('MM123 QR Excavadora de ruedas para construcción')
        ['en-GB']('MM123 QR Wheeled Excavator for Construction')
        ['en-NZ']('MM123 QR Wheeled Excavator for Construction')
        ['pt-PT']('MM123 QR Escavadeira com Rodas para Construção')
        ['en-US']('MM123 QR Wheeled Excavator for Construction')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Vielseitiger Radbagger mit fortschrittlichen Funktionen für effiziente Ausgrabungen auf Baustellen.'
        )
        ['it-IT'](
          'Escavatore su ruote versatile con caratteristiche avanzate per scavi efficienti nei cantieri edili.'
        )
        ['en-UK'](
          'Versatile wheeled excavator with advanced features for efficient construction site excavation.'
        )
        ['nl-NL'](
          'Veelzijdige wiellader met geavanceerde functies voor efficiënte graafwerkzaamheden op bouwplaatsen.'
        )
        ['fr-FR'](
          'Excavatrice sur roues polyvalente avec des fonctionnalités avancées pour une excavation efficace sur le chantier de construction.'
        )
        ['en-AU'](
          'Versatile wheeled excavator with advanced features for efficient construction site excavation.'
        )
        ['es-ES'](
          'Excavadora de ruedas versátil con características avanzadas para excavaciones eficientes en el sitio de construcción.'
        )
        ['en-GB'](
          'Versatile wheeled excavator with advanced features for efficient construction site excavation.'
        )
        ['en-NZ'](
          'Versatile wheeled excavator with advanced features for efficient construction site excavation.'
        )
        ['pt-PT'](
          'Escavadeira com rodas versátil com recursos avançados para escavação eficiente em canteiros de obras.'
        )
        ['en-US'](
          'Versatile wheeled excavator with advanced features for efficient construction site excavation.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('mm123-qr')
        ['it-IT']('mm123-qr')
        ['en-UK']('mm123-qr')
        ['nl-NL']('mm123-qr')
        ['fr-FR']('mm123-qr')
        ['en-AU']('mm123-qr')
        ['es-ES']('mm123-qr')
        ['en-GB']('mm123-qr')
        ['en-NZ']('mm123-qr')
        ['pt-PT']('mm123-qr')
        ['en-US']('mm123-qr')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.mm123Qr01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.mm123Qr02(),
      ProductVariantDraft.presets.sampleDataB2B.mm123Qr03(),
    ])
    .categories([
      KeyReferenceDraft.presets
        .category()
        .key(wheeledExcavatorsForConstructionCategory.key!),
    ]);

export default mm123Qr;
