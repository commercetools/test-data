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

const turnerVelvetArmchairProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataGoodStore
  .armchairs()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const turnerVelvetArmchair = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('turner-velvet-armchair')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Turner Velvet Armchair')
        ['en-GB']('Turner Velvet Armchair')
        ['de-DE']('Samtsessel >Turner<')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US'](
          'A velvet chair with ebony legs is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The dark blue color of the velvet fabric is soft and delicate, adding a touch of modernity to the overall look of the chair.  The ebony legs of the chair are sturdy and durable, providing a solid foundation for the seating area. The ebony color of the frame adds a touch of sophistication to the overall look of the chair. The combination of the velvet and ebony creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The armrests are also curved, providing a comfortable place to rest the arms. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.'
        )
        ['de-DE'](
          'Das Samt-Sitzmöbel mit Beinen aus Ebenholz ist ein elegantes und luxuriöses Möbelstück. Das weiche, plüschige Samtmaterial des Stuhls sorgt für ein bequemes und gemütliches Sitzerlebnis. Die dunkelblaue Farbe des Samtstoffs ist weich und zart und verleiht dem Gesamtbild des Stuhls einen modernen Touch.  Die Ebenholzbeine des Sessels sind robust und langlebig und bilden eine solide Grundlage für den Sitzbereich. Die Ebenholzfarbe des Gestells verleiht dem Gesamtbild des Stuhls die gewünschte Raffinesse. Die Kombination aus Samt und Ebenholz schafft einen interessanten Kontrast und macht diesen Stuhl zu einem Statement-Piece in jedem Raum.  Der Sessel hat eine hohe Rückenlehne mit geschwungenem Design, die Rücken und Schultern stützt. Die Armlehnen sind ebenfalls gebogen und bieten eine bequeme Ablagefläche für die Arme. Der Sessel ist sowohl auf Stil als auch auf Komfort ausgelegt, was ihn zu einer großartigen Ergänzung für jedes Wohnzimmer, Schlafzimmer oder Büro macht.'
        )
        ['en-GB'](
          'A velvet chair with ebony legs is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The dark blue color of the velvet fabric is soft and delicate, adding a touch of modernity to the overall look of the chair.  The ebony legs of the chair are sturdy and durable, providing a solid foundation for the seating area. The ebony color of the frame adds a touch of sophistication to the overall look of the chair. The combination of the velvet and ebony creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The armrests are also curved, providing a comfortable place to rest the arms. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('turner-velvet-armchair')
        ['en-GB']('turner-velvet-armchair')
        ['de-DE']('turner-samtsessel')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(turnerVelvetArmchairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.turnerVelvetArmchair01()
    )
    .categories([
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(armchairsDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default turnerVelvetArmchair;