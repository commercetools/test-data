import { TBuilder } from '@/core';
import { CategoryDraft, TCategoryDraft } from '@/models/category';
import { KeyReferenceDraft, LocalizedStringDraft } from '@/models/commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@/models/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@/models/tax-category';
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import type { TProductDraft } from '../../../types';
import { ProductDraft } from '../../index';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const abigailLoungeChairProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .armchairs()
  .build<TCategoryDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .newArrivals()
  .build<TCategoryDraft>();

const abigailLoungeChair = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('abigail-lounge-chair')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Abigail Lounge Chair')
        ['en-GB']('Abigail Lounge Chair')
        ['de-DE']('Abigail Lounge-Sessel')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room, bedroom or office. The chair features a comfortable and spacious seat with soft and plush velvet upholstery in soft pink color.  The backrest and armrests of the chair are slightly curved, providing a comfortable and supportive place to sit and relax. The brass spindle legs are tapered, adding to the overall elegance and sophistication of the design.  The combination of pink velvet and brass is both opulent and chic, making the lounge chair a perfect addition to a range of decor styles, from modern and minimalist to vintage-inspired and glam.  Overall, a lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and comfortable piece of furniture that can add a touch of glamour and sophistication to any space. Its soft and plush upholstery, combined with its elegant and timeless design, make it a perfect place to relax and unwind in style.')
        [
          'en-US'
        ]('A lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room, bedroom or office. The chair features a comfortable and spacious seat with soft and plush velvet upholstery in soft pink color.  The backrest and armrests of the chair are slightly curved, providing a comfortable and supportive place to sit and relax. The brass spindle legs are tapered, adding to the overall elegance and sophistication of the design.  The combination of pink velvet and brass is both opulent and chic, making the lounge chair a perfect addition to a range of decor styles, from modern and minimalist to vintage-inspired and glam.  Overall, a lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and comfortable piece of furniture that can add a touch of glamour and sophistication to any space. Its soft and plush upholstery, combined with its elegant and timeless design, make it a perfect place to relax and unwind in style.')
        [
          'de-DE'
        ]('Ein Loungesessel mit rosafarbener Samtpolsterung und Spindelbeinen aus Messing ist ein luxuriöses und stilvolles Möbelstück, das jedem Wohnzimmer, Schlafzimmer oder Büro einen Hauch von Glamour verleihen kann. Der Stuhl verfügt über einen bequemen und geräumigen Sitz mit weicher und plüschiger Samtpolsterung in zartrosa Farbe.  Die Rückenlehne und die Armlehnen des Stuhls sind leicht gebogen und bieten einen bequemen und stützenden Platz zum Sitzen und Entspannen. Die Spindelbeine aus Messing sind konisch zulaufend und tragen zur allgemeinen Eleganz und Raffinesse des Designs bei.  Die Kombination aus rosafarbenem Samt und Messing ist sowohl opulent als auch schick und macht diesen Loungesessel zu einer perfekten Ergänzung für eine Reihe von Einrichtungsstilen, von modern und minimalistisch bis hin zu Vintage-inspiriert und glamourös. Seine weiche Polsterung, kombiniert mit seinem eleganten und zeitlosen Design, machen ihn zu einem perfekten Ort, um sich stilvoll zu entspannen.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('abigail-lounge-chair')
        ['en-GB']('abigail-lounge-chair')
        ['de-DE']('abigail-lounge-stuhl')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(abigailLoungeChairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.abigailLoungeChair01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(armchairsDraft.key!),
      KeyReferenceDraft.presets.category().key(newArrivalsDraft.key!),
    ]);

export default abigailLoungeChair;
