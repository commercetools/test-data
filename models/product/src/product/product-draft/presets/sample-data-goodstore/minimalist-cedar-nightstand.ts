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

const minimalistCedarNightstandProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const tablesDraft = CategoryDraft.presets.sampleDataGoodStore
  .tables()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataGoodStore
  .collections()
  .build<TCategoryDraft>();

const theMinimalistDraft = CategoryDraft.presets.sampleDataGoodStore
  .theMinimalist()
  .build<TCategoryDraft>();

const storageTablesDraft = CategoryDraft.presets.sampleDataGoodStore
  .dressers()
  .build<TCategoryDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedroomFurniture()
  .build<TCategoryDraft>();

const minimalistCedarNightstand = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('minimalist-cedar-nightstand')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Minimalist Cedar Nightstand')
        ['de-DE']('Minimalistischer Nachttisch aus Zedernholz')
        ['en-US']('Minimalist Cedar Nightstand')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'The minimalist cedar nightstand is designed to provide a simple and functional surface for placing items next to a bed. The nightstand features a clean and sleek design with minimal decorative elements, in keeping with the minimalist aesthetic.  The nightstand is made from natural cedar wood, which is known for its durability, resistance to decay, and attractive grain patterns. The wood is finished with a light stain or clear coating to bring out the natural beauty of the wood.  Overall, a minimalist cedar nightstand is a stylish and functional addition to any bedroom. Its clean and simple design complements a variety of decor styles, and the natural beauty of the cedar wood adds warmth and texture to the space.'
        )
        ['de-DE'](
          'Der minimalistische Nachttisch aus Zedernholz wurde entwickelt, um eine einfache und funktionale Oberfläche für die Platzierung von Gegenständen neben einem Bett zu bieten. Der Nachttisch verfügt über ein klares und schlankes Design mit minimalen dekorativen Elementen, die der minimalistischen Ästhetik entsprechen.  Der Nachttisch ist aus natürlichem Zedernholz gefertigt, das für seine Haltbarkeit, Fäulnisbeständigkeit und attraktive Maserung bekannt ist. Das Holz wird mit einer leichten Beize oder einer klaren Beschichtung versehen, um die natürliche Schönheit des Holzes hervorzuheben.  Insgesamt ist ein minimalistischer Nachttisch aus Zedernholz eine stilvolle und funktionale Ergänzung für jedes Schlafzimmer. Sein klares und einfaches Design ergänzt eine Vielzahl von Einrichtungsstilen, und die natürliche Schönheit des Zedernholzes verleiht dem Raum Wärme und Textur.'
        )
        ['en-US'](
          'The minimalist cedar nightstand is designed to provide a simple and functional surface for placing items next to a bed. The nightstand features a clean and sleek design with minimal decorative elements, in keeping with the minimalist aesthetic.  The nightstand is made from natural cedar wood, which is known for its durability, resistance to decay, and attractive grain patterns. The wood is finished with a light stain or clear coating to bring out the natural beauty of the wood.  Overall, a minimalist cedar nightstand is a stylish and functional addition to any bedroom. Its clean and simple design complements a variety of decor styles, and the natural beauty of the cedar wood adds warmth and texture to the space.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('minimalist-cedar-nightstand')
        ['de-DE']('minimalistischer-nachttisch-aus-zedernholz')
        ['en-US']('minimalist-cedar-nightstand')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(minimalistCedarNightstandProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.minimalistCedarNightstand01()
    )
    .categories([
      KeyReference.presets.category().key(tablesDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(collectionsDraft.key!),
      KeyReference.presets.category().key(theMinimalistDraft.key!),
      KeyReference.presets.category().key(storageTablesDraft.key!),
      KeyReference.presets.category().key(bedroomFurnitureDraft.key!),
    ]);

export default minimalistCedarNightstand;
