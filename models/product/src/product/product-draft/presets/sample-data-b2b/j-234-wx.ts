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

const swampBulldozersCategory = CategoryDraft.presets.sampleDataB2B
  .swampBulldozers()
  .build<TCategoryDraft>();

const j234Wx = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('j234-wx')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('J234 WX Sumpfbagger')
        ['it-IT']('J234 WX Bulldozer per Paludi')
        ['nl-NL']('J234 WX Moeras Bulldozer')
        ['fr-FR']('J234 WX Bulldozer des marais')
        ['en-AU']('J234 WX Swamp Bulldozer')
        ['es-ES']('J234 WX Topadora de pantano')
        ['en-GB']('J234 WX Swamp Bulldozer')
        ['en-NZ']('J234 WX Swamp Bulldozer')
        ['pt-PT']('J234 WX Trator de Esteiras para Pântano')
        ['en-US']('J234 WX Swamp Bulldozer')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Spezialisierter Sumpfbagger für effiziente Arbeiten in moorigen und feuchten Gebieten.')
        [
          'it-IT'
        ]('Bulldozer specializzato per paludi per operazioni efficienti in aree paludose e terreni umidi.')
        [
          'nl-NL'
        ]('Gespecialiseerde moeras bulldozer voor efficiënte operaties in moerassige en wetland gebieden.')
        [
          'fr-FR'
        ]('Bulldozer des marais spécialisé pour des opérations efficaces dans les zones marécageuses et humides.')
        [
          'en-AU'
        ]('Specialized swamp bulldozer for efficient operations in marshy and wetland areas.')
        [
          'es-ES'
        ]('Topadora de pantano especializada para operaciones eficientes en áreas pantanosas y húmedas.')
        [
          'en-GB'
        ]('Specialized swamp bulldozer for efficient operations in marshy and wetland areas.')
        [
          'en-NZ'
        ]('Specialized swamp bulldozer for efficient operations in marshy and wetland areas.')
        [
          'pt-PT'
        ]('Trator de esteiras especializado para operações eficientes em áreas pantanosas e terrenos úmidos.')
        [
          'en-US'
        ]('Specialized swamp bulldozer for efficient operations in marshy and wetland areas.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('j234-wx')
        ['it-IT']('j234-wx')
        ['nl-NL']('j234-wx')
        ['fr-FR']('j234-wx')
        ['en-AU']('j234-wx')
        ['es-ES']('j234-wx')
        ['en-GB']('j234-wx')
        ['en-NZ']('j234-wx')
        ['pt-PT']('j234-wx')
        ['en-US']('j234-wx')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.j234Wx01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.j234Wx02(),
      ProductVariantDraft.presets.sampleDataB2B.j234Wx03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(swampBulldozersCategory.key!),
    ]);

export default j234Wx;
