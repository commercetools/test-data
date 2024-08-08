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

const glamArmchairProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .armchairs()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const glamArmchair = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('glam-armchair')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Glam Armchair')
        ['en-GB']('Glam Armchair')
        ['de-DE']('Glam Sessel')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A gold velvet chair with a brass frame is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The gold color of the velvet fabric is soft and delicate, adding a touch of glamour to the overall look of the chair.  The brass frame of the chair is sturdy and durable, providing a solid foundation for the seating area. The brass color of the frame adds a touch of warmth and sophistication to the overall look of the chair. The combination of the gold velvet and brass frame creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The armrests are also curved, providing a comfortable place to rest the arms. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.')
        [
          'en-US'
        ]('A gold velvet chair with a brass frame is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The gold color of the velvet fabric is soft and delicate, adding a touch of glamour to the overall look of the chair.  The brass frame of the chair is sturdy and durable, providing a solid foundation for the seating area. The brass color of the frame adds a touch of warmth and sophistication to the overall look of the chair. The combination of the gold velvet and brass frame creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The armrests are also curved, providing a comfortable place to rest the arms. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.')
        [
          'de-DE'
        ]('Ein goldfarbener Samtstuhl mit Messingrahmen ist ein elegantes und luxuriöses Möbelstück. Das weiche, plüschige Samtmaterial des Stuhls sorgt für ein bequemes und gemütliches Sitzerlebnis. Die goldene Farbe des Samtstoffs ist weich und zart und verleiht dem Gesamtbild des Stuhls einen Hauch von Glamour.  Der Messingrahmen des Stuhls ist robust und langlebig und bietet eine solide Grundlage für den Sitzbereich. Die Messingfarbe des Gestells verleiht dem Gesamtbild des Stuhls einen Hauch von Wärme und Raffinesse. Die Kombination aus Goldsamt und Messingrahmen schafft einen auffälligen Kontrast und macht diesen Stuhl zu einem Statement-Piece in jedem Raum.  Der Stuhl verfügt über eine hohe Rückenlehne mit geschwungenem Design, die Rücken und Schultern stützt. Die Armlehnen sind ebenfalls gebogen und bieten eine bequeme Ablagefläche für die Arme. Der Stuhl ist sowohl stilvoll als auch auf Komfort ausgelegt, was ihn zu einer großartigen Ergänzung für jedes Wohnzimmer, Schlafzimmer oder Büro macht.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('glam-armchair')
        ['en-GB']('glam-armchair')
        ['de-DE']('glam-sessel')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(glamArmchairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.glamArmchair01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(armchairsDraft.key!),
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default glamArmchair;
