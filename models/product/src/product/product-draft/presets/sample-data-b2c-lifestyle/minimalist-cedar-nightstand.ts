import {
  CategoryDraft,
  TCategoryDraft,
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
import * as ProductVariantDraft from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const minimalistCedarNightstandProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const tablesDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .tables()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .collections()
  .build<TCategoryDraft>();

const theMinimalistDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .theMinimalist()
  .build<TCategoryDraft>();

const storageTablesDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .dressers()
  .build<TCategoryDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bedroomFurniture()
  .build<TCategoryDraft>();

const minimalistCedarNightstand = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('minimalist-cedar-nightstand')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Minimalist Cedar Nightstand')
        ['de-DE']('Minimalistischer Zedernholz Nachttisch')
        ['en-US']('Minimalist Cedar Nightstand')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('The minimalist cedar nightstand is designed to provide a simple and functional surface for placing items next to a bed. The nightstand features a clean and sleek design with minimal decorative elements, in keeping with the minimalist aesthetic.  The nightstand is made from natural cedar wood, which is known for its durability, resistance to decay, and attractive grain patterns. The wood is finished with a light stain or clear coating to bring out the natural beauty of the wood.  Overall, a minimalist cedar nightstand is a stylish and functional addition to any bedroom. Its clean and simple design complements a variety of decor styles, and the natural beauty of the cedar wood adds warmth and texture to the space.')
        [
          'de-DE'
        ]('Der minimalistische Nachttisch aus Zedernholz bietet eine einfache und funktionelle Ablagefläche für Gegenstände neben dem Bett. Der Nachttisch zeichnet sich durch ein klares und schlichtes Design mit minimalen dekorativen Elementen aus, ganz im Sinne der minimalistischen Ästhetik. Der Nachttisch ist aus natürlichem Zedernholz gefertigt, das für seine Langlebigkeit, Fäulnisbeständigkeit und attraktive Maserung bekannt ist. Das Holz ist mit einer hellen Beize oder einem Klarlack behandelt, um die natürliche Schönheit des Holzes hervorzuheben. Insgesamt ist ein minimalistischer Nachttisch aus Zedernholz eine stilvolle und funktionelle Ergänzung für jedes Schlafzimmer. Sein klares und einfaches Design passt zu einer Vielzahl von Einrichtungsstilen, und die natürliche Schönheit des Zedernholzes verleiht dem Raum Wärme und Textur.')
        [
          'en-US'
        ]('The minimalist cedar nightstand is designed to provide a simple and functional surface for placing items next to a bed. The nightstand features a clean and sleek design with minimal decorative elements, in keeping with the minimalist aesthetic.  The nightstand is made from natural cedar wood, which is known for its durability, resistance to decay, and attractive grain patterns. The wood is finished with a light stain or clear coating to bring out the natural beauty of the wood.  Overall, a minimalist cedar nightstand is a stylish and functional addition to any bedroom. Its clean and simple design complements a variety of decor styles, and the natural beauty of the cedar wood adds warmth and texture to the space.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('minimalist-cedar-nightstand')
        ['de-DE']('minimalistischer-nachttisch-aus-zedernholz')
        ['en-US']('minimalist-cedar-nightstand')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(minimalistCedarNightstandProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.minimalistCedarNightstand01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(tablesDraft.key!),
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(collectionsDraft.key!),
      KeyReferenceDraft.presets.category().key(theMinimalistDraft.key!),
      KeyReferenceDraft.presets.category().key(storageTablesDraft.key!),
      KeyReferenceDraft.presets.category().key(bedroomFurnitureDraft.key!),
    ]);

export default minimalistCedarNightstand;
