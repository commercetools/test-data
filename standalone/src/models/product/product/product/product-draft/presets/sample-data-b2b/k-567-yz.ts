import { TBuilder } from '@/core';
import { CategoryDraft, TCategoryDraft } from '@/models/category';
import { KeyReferenceDraft, LocalizedStringDraft } from '@/models/commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@/models/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@/models/tax-category';
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

const k567Yz = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('k567-yz')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('K567 YZ Sumpfbagger')
        ['it-IT']('K567 YZ Bulldozer per Paludi')
        ['nl-NL']('K567 YZ Moeras Bulldozer')
        ['fr-FR']('K567 YZ Bulldozer des marais')
        ['en-AU']('K567 YZ Swamp Bulldozer')
        ['es-ES']('K567 YZ Topadora de pantano')
        ['en-GB']('K567 YZ Swamp Bulldozer')
        ['en-NZ']('K567 YZ Swamp Bulldozer')
        ['pt-PT']('K567 YZ Trator de Esteiras para Pântano')
        ['en-US']('K567 YZ Swamp Bulldozer')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Vielseitiger Sumpfbagger mit fortschrittlichen Funktionen für vielfältige Arbeiten in Feuchtgebieten.')
        [
          'it-IT'
        ]('Bulldozer per paludi versatile con caratteristiche avanzate per operazioni diverse in ambienti umidi.')
        [
          'nl-NL'
        ]('Veelzijdige moeras bulldozer met geavanceerde functies voor diverse operaties in wetland omgevingen.')
        [
          'fr-FR'
        ]('Bulldozer des marais polyvalent avec des fonctionnalités avancées pour des opérations diverses dans des environnements humides.')
        [
          'en-AU'
        ]('Versatile swamp bulldozer with advanced features for diverse operations in wetland environments.')
        [
          'es-ES'
        ]('Topadora de pantano versátil con características avanzadas para operaciones diversas en entornos húmedos.')
        [
          'en-GB'
        ]('Versatile swamp bulldozer with advanced features for diverse operations in wetland environments.')
        [
          'en-NZ'
        ]('Versatile swamp bulldozer with advanced features for diverse operations in wetland environments.')
        [
          'pt-PT'
        ]('Trator de esteiras versátil para pântano com características avançadas para operações diversas em ambientes úmidos.')
        [
          'en-US'
        ]('Versatile swamp bulldozer with advanced features for diverse operations in wetland environments.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('k567-yz')
        ['it-IT']('k567-yz')
        ['nl-NL']('k567-yz')
        ['fr-FR']('k567-yz')
        ['en-AU']('k567-yz')
        ['es-ES']('k567-yz')
        ['en-GB']('k567-yz')
        ['en-NZ']('k567-yz')
        ['pt-PT']('k567-yz')
        ['en-US']('k567-yz')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.k567Yz01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.k567Yz02(),
      ProductVariantDraft.presets.sampleDataB2B.k567Yz03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(swampBulldozersCategory.key!),
    ]);

export default k567Yz;
