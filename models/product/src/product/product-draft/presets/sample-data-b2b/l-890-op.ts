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

const swampBulldozersCategory = CategoryDraft.presets.sampleDataB2B
  .swampBulldozers()
  .build<TCategoryDraft>();

const l890Op = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .priceMode(productPriceMode.Standalone)
    .key('l890-op')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('L890 OP Sumpfbagger')
        ['it-IT']('L890 OP Bulldozer per Paludi')
        ['nl-NL']('L890 OP Moeras Bulldozer')
        ['fr-FR']('L890 OP Bulldozer des marais')
        ['en-AU']('L890 OP Swamp Bulldozer')
        ['es-ES']('L890 OP Topadora de pantano')
        ['en-GB']('L890 OP Swamp Bulldozer')
        ['en-NZ']('L890 OP Swamp Bulldozer')
        ['pt-PT']('L890 OP Trator de Esteiras para Pântano')
        ['en-US']('L890 OP Swamp Bulldozer')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE'](
          'Sumpfbagger mit hoher Kapazität und speziellen Funktionen für anspruchsvolle Projekte in Feuchtgebieten.'
        )
        ['it-IT'](
          'Bulldozer per paludi ad alta capacità L890 OP con caratteristiche specializzate per progetti impegnativi in terreni umidi.'
        )
        ['nl-NL'](
          'L890 OP Hoogcapaciteits moeras bulldozer met gespecialiseerde functies voor uitdagende wetland projecten.'
        )
        ['fr-FR'](
          'Bulldozer des marais haute capacité avec des fonctionnalités spécialisées pour des projets difficiles en zones humides.'
        )
        ['en-AU'](
          'L890 OP High-capacity swamp bulldozer with specialized features for challenging wetland projects.'
        )
        ['es-ES'](
          'Topadora de pantano de alta capacidad con características especializadas para proyectos desafiantes en áreas húmedas.'
        )
        ['en-GB'](
          'L890 OP High-capacity swamp bulldozer with specialized features for challenging wetland projects.'
        )
        ['en-NZ'](
          'L890 OP High-capacity swamp bulldozer with specialized features for challenging wetland projects.'
        )
        ['pt-PT'](
          'Trator de esteiras para pântano de alta capacidade L890 OP com características especializadas para projetos desafiadores em terrenos úmidos.'
        )
        ['en-US'](
          'L890 OP High-capacity swamp bulldozer with specialized features for challenging wetland projects.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['de-DE']('l890-op')
        ['it-IT']('l890-op')
        ['nl-NL']('l890-op')
        ['fr-FR']('l890-op')
        ['en-AU']('l890-op')
        ['es-ES']('l890-op')
        ['en-GB']('l890-op')
        ['en-NZ']('l890-op')
        ['pt-PT']('l890-op')
        ['en-US']('l890-op')
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
    .masterVariant(ProductVariantDraft.presets.sampleDataB2B.l890Op01())
    .variants([
      ProductVariantDraft.presets.sampleDataB2B.l890Op02(),
      ProductVariantDraft.presets.sampleDataB2B.l890Op03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(swampBulldozersCategory.key!),
    ]);

export default l890Op;
