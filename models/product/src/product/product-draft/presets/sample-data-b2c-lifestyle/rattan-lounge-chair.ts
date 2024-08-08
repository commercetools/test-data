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

const rattanLoungeChairProductTypeDraft =
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

const rattanLoungeChair = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('rattan-lounge-chair')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Rattan Lounge Chair')
        ['en-GB']('Rattan Lounge Chair')
        ['de-DE']('Loungesessel aus Rattan')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('The Rattan Lounge Chair is designed to provide comfortable seating for relaxing and lounging. The chair features a sturdy frame made of rattan, with a woven pattern of rattan fibers forming the seat and backrest.  The chair comes with additional cushioning for extra comfort, made from soft cotton fabric. The cushions are removable, allowing for easy cleaning or replacement.  The design of the rattan lounge chair is inspired by tropical or bohemian styles, with a natural and earthy look. The chair features intricate woven patterns or geometric shapes, creating a visually interesting texture.  The rattan material used in the construction of the chair is known for its durability and resistance to wear and tear. It is also lightweight, making it easy to move the chair around the room.  Overall, a rattan lounge chair is a stylish and comfortable addition to any living room or outdoor space. Its natural materials and unique design create a relaxed and inviting atmosphere, making it the perfect place to unwind and enjoy some peace and quiet.')
        [
          'en-US'
        ]('The Rattan Lounge Chair is designed to provide comfortable seating for relaxing and lounging. The chair features a sturdy frame made of rattan, with a woven pattern of rattan fibers forming the seat and backrest.  The chair comes with additional cushioning for extra comfort, made from soft cotton fabric. The cushions are removable, allowing for easy cleaning or replacement.  The design of the rattan lounge chair is inspired by tropical or bohemian styles, with a natural and earthy look. The chair features intricate woven patterns or geometric shapes, creating a visually interesting texture.  The rattan material used in the construction of the chair is known for its durability and resistance to wear and tear. It is also lightweight, making it easy to move the chair around the room.  Overall, a rattan lounge chair is a stylish and comfortable addition to any living room or outdoor space. Its natural materials and unique design create a relaxed and inviting atmosphere, making it the perfect place to unwind and enjoy some peace and quiet.')
        [
          'de-DE'
        ]('Der Loungesessel aus Rattan bietet eine bequeme Sitzgelegenheit zum Entspannen. Das Webmuster aus Rattanfasern bildet die Sitzfläche und Rückenlehne, die von einem stabilen Rattangestell gehalten werden. Die Polsterung aus weichem Baumwollstoff sorgt für zusätzlichen Sitzkomfort. Die Kissen sind abnehmbar, was die Reinigung oder einen Austausch erleichtert.  Das Design des Rattan-Loungesessels ist vom tropischen Ambiente des Bohemian-Looks inspiriert und zeigt sich in erdigen Tönen. Das komplexe Webmuster mit seinen geometrischen Formen bildet ein optisches Highlight. Das für die Konstruktion des Sitzmöbels verwendete Rattanmaterial ist langlebig, verschleißfest und leicht. Der Sessel kann somit flexibel in jeden Innen- oder Außenbereich integriert werden. Seine natürlichen Materialien und sein einzigartiges Design schaffen eine entspannte und einladende Atmosphäre zum Relaxen.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('rattan-lounge-chair')
        ['en-GB']('rattan-lounge-chair')
        ['de-DE']('rattan-loungesessel')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(rattanLoungeChairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.rattanLoungeChair01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(armchairsDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default rattanLoungeChair;
