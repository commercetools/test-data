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
import * as ProductVariantDraft from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const turnerVelvetArmchairProductTypeDraft =
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

const turnerVelvetArmchair = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('turner-velvet-armchair')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Turner Velvet Armchair')
        ['en-GB']('Turner Velvet Armchair')
        ['de-DE']('Samtsessel >Turner<')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-US'
        ]('A velvet chair with ebony legs is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The dark blue color of the velvet fabric is soft and delicate, adding a touch of modernity to the overall look of the chair.  The ebony legs of the chair are sturdy and durable, providing a solid foundation for the seating area. The ebony color of the frame adds a touch of sophistication to the overall look of the chair. The combination of the velvet and ebony creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The armrests are also curved, providing a comfortable place to rest the arms. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.')
        [
          'de-DE'
        ]('Das Samt-Sitzmöbel mit Beinen aus Ebenholz ist ein elegantes und luxuriöses Möbelstück. Das weiche, plüschige Samtmaterial des Stuhls sorgt für ein bequemes und gemütliches Sitzerlebnis. Die dunkelblaue Farbe des Samtstoffs ist weich und zart und verleiht dem Gesamtbild des Stuhls einen modernen Touch.  Die Ebenholzbeine des Sessels sind robust und langlebig und bilden eine solide Grundlage für den Sitzbereich. Die Ebenholzfarbe des Gestells verleiht dem Gesamtbild des Stuhls die gewünschte Raffinesse. Die Kombination aus Samt und Ebenholz schafft einen interessanten Kontrast und macht diesen Stuhl zu einem Statement-Piece in jedem Raum.  Der Sessel hat eine hohe Rückenlehne mit geschwungenem Design, die Rücken und Schultern stützt. Die Armlehnen sind ebenfalls gebogen und bieten eine bequeme Ablagefläche für die Arme. Der Sessel ist sowohl auf Stil als auch auf Komfort ausgelegt, was ihn zu einer großartigen Ergänzung für jedes Wohnzimmer, Schlafzimmer oder Büro macht.')
        [
          'en-GB'
        ]('A velvet chair with ebony legs is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The dark blue color of the velvet fabric is soft and delicate, adding a touch of modernity to the overall look of the chair.  The ebony legs of the chair are sturdy and durable, providing a solid foundation for the seating area. The ebony color of the frame adds a touch of sophistication to the overall look of the chair. The combination of the velvet and ebony creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The armrests are also curved, providing a comfortable place to rest the arms. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('turner-velvet-armchair')
        ['en-GB']('turner-velvet-armchair')
        ['de-DE']('turner-samtsessel')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(turnerVelvetArmchairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.turnerVelvetArmchair01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(armchairsDraft.key!),
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default turnerVelvetArmchair;
