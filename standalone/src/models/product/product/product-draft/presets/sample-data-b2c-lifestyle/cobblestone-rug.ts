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
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const cobblestoneRugProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const rugsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .rugs()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .homeDecor()
  .build<TCategoryDraft>();

const cobblestoneRug = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('cobblestone-rug')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Cobblestone Rug')
        ['en-GB']('Cobblestone Rug')
        ['de-DE']('Strukturteppich "Kopfsteinpflaster"')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Dieser Strukturteppich kann in einer Vielzahl von Räumen verwendet werden, von Wohnzimmern über Schlafzimmer bis hin zu Heimbüros. Er ist besonders beliebt in modernen und zeitgenössischen Einrichtungsstilen. Hier kann er ein mutiger und grafischer Hingucker sein.  Insgesamt ist ein Teppich mit geometrischen Akzenten eine stilvolle und vielseitige Designwahl, die jedem Raum im Haus visuelles Interesse und Textur verleihen kann.')
        [
          'en-GB'
        ]('The Cobblestone Rug can be used in a variety of spaces, from living rooms to bedrooms to home offices. It is especially popular in modern and contemporary decor styles, where they can add a bold and graphic element to the space.  Overall, a geometric accent rug is a stylish and versatile design choice that can add visual interest and texture to any room in the home.')
        [
          'en-US'
        ]('The Cobblestone Rug can be used in a variety of spaces, from living rooms to bedrooms to home offices. It is especially popular in modern and contemporary decor styles, where they can add a bold and graphic element to the space.  Overall, a geometric accent rug is a stylish and versatile design choice that can add visual interest and texture to any room in the home.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('cobblestone-rug')
        ['de-DE']('kopfsteinpflaster')
        ['en-US']('cobblestone-rug')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(cobblestoneRugProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.cobblestoneRug01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(rugsDraft.key!),
      KeyReferenceDraft.presets.category().key(roomDecorDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default cobblestoneRug;
