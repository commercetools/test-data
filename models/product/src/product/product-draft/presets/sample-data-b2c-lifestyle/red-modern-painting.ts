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
import * as ProductDraft from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const redModernPaintingProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const homeAccentsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .homeAccents()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .homeDecor()
  .build<TCategoryDraft>();

const redModernPainting = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('red-modern-painting')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Red Modern Painting')
        ['en-GB']('Red Modern Painting')
        ['de-DE']('Rotes modernes Gemälde')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]("A red modern painting on canvas is a bold and striking piece of art that can add a contemporary flair to any room. The painting is created with acrylic paints on a stretched canvas, and features a range of shades of red.  The size of the painting can vary, from a small piece that can be hung on a wall as part of a gallery grouping, to a large statement piece that dominates the room. The red color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of drama.  The style of the painting is contemporary, with a focus on expressing emotions and ideas through color and form. The red color may be symbolic, representing passion, strength, or energy, depending on the artist's intentions.  Overall, a red modern painting on canvas is a vibrant and expressive work of art that can add a sense of drama and excitement to any space.")
        [
          'en-US'
        ]("A red modern painting on canvas is a bold and striking piece of art that can add a contemporary flair to any room. The painting is created with acrylic paints on a stretched canvas, and features a range of shades of red.  The size of the painting can vary, from a small piece that can be hung on a wall as part of a gallery grouping, to a large statement piece that dominates the room. The red color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of drama.  The style of the painting is contemporary, with a focus on expressing emotions and ideas through color and form. The red color may be symbolic, representing passion, strength, or energy, depending on the artist's intentions.  Overall, a red modern painting on canvas is a vibrant and expressive work of art that can add a sense of drama and excitement to any space.")
        [
          'de-DE'
        ]('Das rote moderne Gemälde aus Acrylfarben auf Leinwand ist ein kühnes und markantes Kunst-Statement, das jedem Raum ein zeitgenössisches Flair verleiht. Die Größenwirkung des Gemäldes kann variiert werden, indem es entweder mit mehreren Kunstwerken zusammen oder aber als eigenständiges Statement Piece aufgehängt wird. Das rote Farbschema des Gemäldes kann eine optische Spannung schaffen und ein Gefühl von Dramatik erzeugen. Der zeitgenössische Stil des Gemäldes legt seinen Schwerpunkt darauf, Emotionen und Ideen durch Farbe und Form auszudrücken. Die rote Farbe kann symbolisch gedeutet und als Leidenschaft, Stärke oder Energie ausgelegt werden. Die rote moderne Malerei auf Leinwand ist insgesamt ein lebendiges und ausdrucksstarkes Kunstwerk, das jedem Raum ein Gefühl von Dramatik und Aufregung verleiht.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('red-modern-painting')
        ['en-GB']('red-modern-painting')
        ['de-DE']('rote-moderne-malerei')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(redModernPaintingProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.redModernPainting01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(homeAccentsDraft.key!),
      KeyReferenceDraft.presets.category().key(roomDecorDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default redModernPainting;
