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

const luxePillowCoverProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedding()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeDecor()
  .build<TCategoryDraft>();

const luxePillowCover = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('luxe-pillow-cover')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Luxe Pillow Cover')
        ['en-GB']('Luxe Pillow Cover')
        ['de-DE']('Luxe Kissenbezug')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['de-DE'](
          'Dieser luxuriöse Kissenbezug ist aus schwarzem Lammfell gefertigt. Shearling ist bekannt für seine Weichheit, Wärme und isolierenden Eigenschaften.  Der Kissenbezug ist so konzipiert, dass er über ein Kissen in Standardgröße passt, normalerweise etwa 18 Zoll im Quadrat. Es hat eine quadratische Form und eine tiefschwarze Farbe, die eine Vielzahl von Einrichtungsstilen und Farbschemata ergänzen kann.  Der Shearling-Stoff hat eine plüschige und flauschige Textur, die sich unglaublich weich anfühlt. Es bietet eine gemütliche und warme Oberfläche zum Schlafen oder Faulenzen, was es zu einer beliebten Wahl für die kälteren Monate macht.  Der Kissenbezug wird oft wegen seiner dekorativen und luxuriösen Eigenschaften sowie wegen seiner praktischen und funktionalen Vorteile verwendet. Es kann einem Bett, Sofa oder Akzentstuhl einen Hauch von Textur und visuellem Interesse verleihen und gleichzeitig eine bequeme und stützende Oberfläche für Kopf und Nacken bieten.  Das Shearling-Gewebe ist von Natur aus wasser- und schmutzabweisend und lässt sich leicht mit einem feuchten Tuch oder Schwamm reinigen. Es sollte regelmäßig an der Luft getrocknet und aufgelockert werden, um seine Form und Textur zu erhalten.  Insgesamt ist ein schwarzer Lammfell-Kissenbezug ein stilvolles und bequemes Accessoire, das den Komfort und Stil jedes Raums im Haus verbessern kann und gleichzeitig einen praktischen und funktionellen Nutzen bietet.'
        )
        ['en-GB'](
          'This Luxe Pillow Cover is made of black shearling. Shearling is known for its softness, warmth, and insulating properties.  The pillow cover is designed to fit over a standard size pillow, usually around 18 inches square. It features a square shape and a deep black color that can complement a variety of decor styles and color schemes.  The shearling fabric has a plush and fluffy texture that is incredibly soft to the touch. It provides a cozy and warm surface for sleeping or lounging, making it a popular choice for colder months.  The pillow cover is often used for its decorative and luxurious features, as well as for its practical and functional benefits. It can add a touch of texture and visual interest to a bed, sofa, or accent chair, while also providing a comfortable and supportive surface for the head and neck.  The shearling fabric is naturally resistant to water and stains, and can be easily cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, a black shearling pillow cover is a stylish and comfortable accessory that can enhance the comfort and style of any room in the home, while also providing a practical and functional benefit.'
        )
        ['en-US'](
          'This Luxe Pillow Cover is made of black shearling. Shearling is known for its softness, warmth, and insulating properties.  The pillow cover is designed to fit over a standard size pillow, usually around 18 inches square. It features a square shape and a deep black color that can complement a variety of decor styles and color schemes.  The shearling fabric has a plush and fluffy texture that is incredibly soft to the touch. It provides a cozy and warm surface for sleeping or lounging, making it a popular choice for colder months.  The pillow cover is often used for its decorative and luxurious features, as well as for its practical and functional benefits. It can add a touch of texture and visual interest to a bed, sofa, or accent chair, while also providing a comfortable and supportive surface for the head and neck.  The shearling fabric is naturally resistant to water and stains, and can be easily cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, a black shearling pillow cover is a stylish and comfortable accessory that can enhance the comfort and style of any room in the home, while also providing a practical and functional benefit.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('luxe-pillow-cover')
        ['en-GB']('luxe-pillow-cover')
        ['de-DE']('luxuriser-kissenbezug')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(luxePillowCoverProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.luxePillowCover01()
    )
    .categories([
      KeyReference.presets.category().key(beddingDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default luxePillowCover;
