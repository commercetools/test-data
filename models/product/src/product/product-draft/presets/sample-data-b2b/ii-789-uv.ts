import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@commercetools-test-data/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
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

const pneumaticRollersCategory = CategoryDraft.presets.sampleDataB2B
  .pneumaticRollers()
  .build<TCategoryDraft>();

const ii789Uv = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('ii789-uv')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('II789 UV Pneumatische Walze')
        ['it-IT']('II789 UV Rullo Pneumatico')
        ['nl-NL']('II789 UV Pneumatische Wals')
        ['fr-FR']('II789 UV Rouleau pneumatique')
        ['en-AU']('II789 UV Pneumatic Roller')
        ['es-ES']('II789 UV Rodillo neumático')
        ['en-GB']('II789 UV Pneumatic Roller')
        ['en-NZ']('II789 UV Pneumatic Roller')
        ['pt-PT']('II789 UV Rolo Pneumático')
        ['en-US']('II789 UV Pneumatic Roller')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Pneumatikwalze mit hoher Kapazität und fortschrittlichen Funktionen für effiziente Verdichtung.')
        [
          'it-IT'
        ]('Rullo pneumatico ad alta capacità con caratteristiche avanzate per una compattazione efficiente.')
        [
          'nl-NL'
        ]('Hoogcapaciteits pneumatische wals met geavanceerde functies voor efficiënte verdichting.')
        [
          'fr-FR'
        ]('Rouleau pneumatique haute capacité avec des fonctionnalités avancées pour une compactage efficace.')
        [
          'en-AU'
        ]('High-capacity pneumatic roller with advanced features for efficient compaction.')
        [
          'es-ES'
        ]('Rodillo neumático de alta capacidad con características avanzadas para una compactación eficiente.')
        [
          'en-GB'
        ]('High-capacity pneumatic roller with advanced features for efficient compaction.')
        [
          'en-NZ'
        ]('High-capacity pneumatic roller with advanced features for efficient compaction.')
        [
          'pt-PT'
        ]('Rolo pneumático de alta capacidade com recursos avançados para compactação eficiente.')
        [
          'en-US'
        ]('High-capacity pneumatic roller with advanced features for efficient compaction.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('ii789-uv')
        ['it-IT']('ii789-uv')
        ['nl-NL']('ii789-uv')
        ['fr-FR']('ii789-uv')
        ['en-AU']('ii789-uv')
        ['es-ES']('ii789-uv')
        ['en-GB']('ii789-uv')
        ['en-NZ']('ii789-uv')
        ['pt-PT']('ii789-uv')
        ['en-US']('ii789-uv')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.ii789Uv01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.ii789Uv02(),
      ProductVariantDraft.presets.sampleDataB2B.ii789Uv03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(pneumaticRollersCategory.key!),
    ]);

export default ii789Uv;
