import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@commercetools-test-data/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import * as ProductVariantDraft from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const pinkAbstractPaintingProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const homeAccentsDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeAccents()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeDecor()
  .build<TCategoryDraft>();

const pinkAbstractPainting = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('pink-abstract-painting')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Pink Abstract Painting')
        ['de-DE']('Abstrakte Rosa Malerei')
        ['en-US']('Pink Abstract Painting')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'A pink abstract painting is a vibrant and eye-catching work of art that can evoke a range of emotions and interpretations. The painting is created with acrylic paints on canvas.  The composition of the painting is abstract, with no recognizable objects or figures. The use of pink in the painting may be symbolic, representing love, femininity, or energy.  The painting can be hung on a wall as part of a gallery grouping or as a statement piece that dominates the room. The pink color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of energy.  Overall, a pink abstract painting is a bold and expressive work of art that can add a sense of vitality and excitement to any space. Its vibrant color scheme and abstract composition can create a sense of mystery and intrigue, inviting viewers to interpret and connect with the painting in their own way.'
        )
        ['de-DE'](
          'Ein rosafarbenes abstraktes Gemälde ist ein lebhaftes und auffälliges Kunstwerk, das eine Reihe von Emotionen und Interpretationen hervorrufen kann. Das Gemälde wurde mit Acrylfarben auf Leinwand gemalt. Die Komposition des Gemäldes ist abstrakt und enthält keine erkennbaren Objekte oder Figuren. Die Verwendung von Rosa auf dem Gemälde kann symbolisch sein und Liebe, Weiblichkeit oder Energie darstellen. Das Gemälde kann als Teil einer Galeriegruppe oder als raumbeherrschendes Einzelstück an die Wand gehängt werden. Das Rosa des Gemäldes kann einen starken Fokuspunkt bilden, der das Auge auf das Bild lenkt und ein Gefühl von Energie erzeugt. Insgesamt ist ein rosafarbenes abstraktes Gemälde ein kühnes und ausdrucksstarkes Kunstwerk, das jedem Raum ein Gefühl von Vitalität und Aufregung verleihen kann. Die lebendige Farbgebung und die abstrakte Komposition können ein geheimnisvolles Gefühl und Faszination erzeugen und den Betrachter dazu einladen, das Gemälde auf seine eigene Weise zu interpretieren und sich mit ihm zu verbinden.'
        )
        ['en-US'](
          'A pink abstract painting is a vibrant and eye-catching work of art that can evoke a range of emotions and interpretations. The painting is created with acrylic paints on canvas.  The composition of the painting is abstract, with no recognizable objects or figures. The use of pink in the painting may be symbolic, representing love, femininity, or energy.  The painting can be hung on a wall as part of a gallery grouping or as a statement piece that dominates the room. The pink color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of energy.  Overall, a pink abstract painting is a bold and expressive work of art that can add a sense of vitality and excitement to any space. Its vibrant color scheme and abstract composition can create a sense of mystery and intrigue, inviting viewers to interpret and connect with the painting in their own way.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('pink-abstract-painting')
        ['de-DE']('rosa-abstrakte-malerei')
        ['en-US']('pink-abstract-painting')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(pinkAbstractPaintingProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.pinkAbstractPainting01()
    )
    .categories([
      KeyReference.presets.category().key(homeAccentsDraft.key!),
      KeyReference.presets.category().key(roomDecorDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default pinkAbstractPainting;
