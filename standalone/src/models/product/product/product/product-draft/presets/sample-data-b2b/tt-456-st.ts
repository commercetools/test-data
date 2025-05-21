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

const mobileCranesCategory = CategoryDraft.presets.sampleDataB2B
  .mobileCranes()
  .build<TCategoryDraft>();

const tt456St = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('tt456-st')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('TT456 ST Mobilkran für Vielseitigkeit')
        ['it-IT']('TT456 ST Gru Mobile per Versatilità')
        ['nl-NL']('TT456 ST Mobiele Kraan voor Veelzijdigheid')
        ['fr-FR']('TT456 ST Grue mobile pour polyvalence')
        ['en-AU']('TT456 ST Mobile Crane for Versatility')
        ['es-ES']('TT456 ST Grúa móvil para versatilidad')
        ['en-GB']('TT456 ST Mobile Crane for Versatility')
        ['en-NZ']('TT456 ST Mobile Crane for Versatility')
        ['pt-PT']('TT456 ST Grua Móvel para Versatilidade')
        ['en-US']('TT456 ST Mobile Crane for Versatility')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Vielseitiger Mobilkran mit fortschrittlichen Funktionen für eine Vielzahl von Hebeanwendungen.')
        [
          'it-IT'
        ]('Gru mobile versatile con caratteristiche avanzate per una vasta gamma di applicazioni di sollevamento.')
        [
          'nl-NL'
        ]('Veelzijdige mobiele kraan met geavanceerde functies voor een breed scala aan hijstoepassingen.')
        [
          'fr-FR'
        ]("Grue mobile polyvalente avec des fonctionnalités avancées pour une large gamme d'applications de levage.")
        [
          'en-AU'
        ]('Versatile mobile crane with advanced features for a wide range of lifting applications.')
        [
          'es-ES'
        ]('Grúa móvil versátil con características avanzadas para una amplia gama de aplicaciones de elevación.')
        [
          'en-GB'
        ]('Versatile mobile crane with advanced features for a wide range of lifting applications.')
        [
          'en-NZ'
        ]('Versatile mobile crane with advanced features for a wide range of lifting applications.')
        [
          'pt-PT'
        ]('Grua móvel versátil com características avançadas para uma ampla gama de aplicações de elevação.')
        [
          'en-US'
        ]('Versatile mobile crane with advanced features for a wide range of lifting applications.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('tt456-st')
        ['it-IT']('tt456-st')
        ['nl-NL']('tt456-st')
        ['fr-FR']('tt456-st')
        ['en-AU']('tt456-st')
        ['es-ES']('tt456-st')
        ['en-GB']('tt456-st')
        ['en-NZ']('tt456-st')
        ['pt-PT']('tt456-st')
        ['en-US']('tt456-st')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.tt456St01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.tt456St02(),
      ProductVariantDraft.presets.sampleDataB2B.tt456St03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(mobileCranesCategory.key!),
    ]);

export default tt456St;
