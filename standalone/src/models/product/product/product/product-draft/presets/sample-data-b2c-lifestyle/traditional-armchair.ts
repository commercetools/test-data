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

const traditionalArmchairProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const theTraditionalistDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .theTraditionalist()
  .build<TCategoryDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .armchairs()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .collections()
  .build<TCategoryDraft>();

const traditionalArmchair = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('traditional-armchair')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Traditional Armchair')
        ['en-GB']('Traditional Armchair')
        ['de-DE']('Traditioneller Sessel')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-US'
        ]('A traditional armchair with a geometric pattern has a classic design with a touch of modern flair. The chair has a wooden frame and legs. The chair has a high back, providing a comfortable place to sit and relax. The cushioning is plush, offering a soft feel to the seat and backrest. The geometric pattern adds a visual interest and texture to the overall look of the chair, providing a subtle yet eye-catching element to the decor of the room.  Overall, a traditional armchair with a geometric pattern could be a great addition to a living room, study, or bedroom, offering both comfort and style to the space.')
        [
          'de-DE'
        ]('Der traditionelle Sessel mit geometrischem Muster überzeugt mit einem klassischen Design und einem Hauch von modernem Flair. Rahmen und Beine des Stuhls sind aus Holz gefertigt. Er hat eine hohe Rückenlehne, die einen bequemen Platz zum Sitzen und Entspannen bietet. Die Polsterung ist weich und bietet so Komfort im Sitz- und Rückenbereich. Das geometrische Muster verleiht dem Gesamtbild des Stuhls einen visuellen Twist. Zusammen mit seiner Textur, verleiht er dem Dekor des Raums ein subtiles und dennoch auffälliges Element.  Dieser traditionelle Sessel mit geometrischem Muster ist eine großartige Ergänzung für den Wohn-, Arbeits- oder Schlafbereich und bereichert den Raum sowohl um Komfort als auch um Stil.')
        [
          'en-GB'
        ]('A traditional armchair with a geometric pattern has a classic design with a touch of modern flair. The chair has a wooden frame and legs. The chair has a high back, providing a comfortable place to sit and relax. The cushioning is plush, offering a soft feel to the seat and backrest. The geometric pattern adds a visual interest and texture to the overall look of the chair, providing a subtle yet eye-catching element to the decor of the room.  Overall, a traditional armchair with a geometric pattern could be a great addition to a living room, study, or bedroom, offering both comfort and style to the space.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('traditional-armchair')
        ['en-GB']('traditional-armchair')
        ['de-DE']('traditioneller-sessel')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(traditionalArmchairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.traditionalArmchair01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(theTraditionalistDraft.key!),
      KeyReferenceDraft.presets.category().key(armchairsDraft.key!),
      KeyReferenceDraft.presets.category().key(collectionsDraft.key!),
    ]);

export default traditionalArmchair;
