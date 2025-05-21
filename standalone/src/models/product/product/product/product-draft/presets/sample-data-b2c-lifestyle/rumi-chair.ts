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
import { ProductDraft } from '../..';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const rumiChairProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .armchairs()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const rumiChair = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('rumi-chair')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Rumi Chair')
        ['en-GB']('Rumi Chair')
        ['de-DE']('Stuhl >Rumi<')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A lilac velvet chair with a brass frame is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The lilac color of the velvet fabric is soft and delicate, adding a touch of femininity to the overall look of the chair.  The brass frame of the chair is sturdy and durable, providing a solid foundation for the seating area. The brass color of the frame adds a touch of warmth and sophistication to the overall look of the chair. The combination of the lilac velvet and brass frame creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.')
        [
          'en-US'
        ]('A lilac velvet chair with a brass frame is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The lilac color of the velvet fabric is soft and delicate, adding a touch of femininity to the overall look of the chair.  The brass frame of the chair is sturdy and durable, providing a solid foundation for the seating area. The brass color of the frame adds a touch of warmth and sophistication to the overall look of the chair. The combination of the lilac velvet and brass frame creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.')
        [
          'de-DE'
        ]('Ein malvenfarbener Samtstuhl mit Messingrahmen ist ein elegantes und luxuriöses Möbelstück. Das weiche, plüschige Samtmaterial des Stuhls sorgt für ein bequemes und gemütliches Sitzerlebnis. Die lila Farbe des Samtstoffs ist sanft und zart und verleiht dem Gesamtbild des Stuhls einen Hauch von Weiblichkeit.  Der Messingrahmen des Stuhls ist robust und langlebig und bietet eine solide Grundlage für den Sitzbereich. Die Messingfarbe des Gestells verleiht dem Gesamtbild des Stuhls einen Hauch von Wärme und Raffinesse. Die Kombination aus fliederfarbenem Samt und Messingrahmen schafft einen auffälligen Kontrast und macht diesen Stuhl zu einem Statement Piece in jedem Raum. Die Rückenlehne des Stuhls ist hoch und geschwungen im Design, sodass sie Rücken und Schultern zu stützt. Der Stuhl ist sowohl auf Stil als auch auf Komfort ausgelegt, was ihn zu einer großartigen Ergänzung für jedes Wohnzimmer, Schlafzimmer oder Büro macht.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('rumi-chair')
        ['en-GB']('rumi-chair')
        ['de-DE']('rumi-stuhl')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(rumiChairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.rumiChair01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(armchairsDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default rumiChair;
