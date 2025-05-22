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
import { ProductDraft } from '../..';
import type { TProductDraft } from '../../../types';

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const fawnArmchairProductTypeDraft =
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

const fawnArmchair = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('fawn-armchair')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Fawn Armchair')
        ['en-GB']('Fawn Armchair')
        ['de-DE']('Sessel "Fawn"')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]("An art deco leather chair with ebony legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with the leather upholstery providing a soft and luxurious feel. The ebony legs are long and tapered, with a smooth finish that accentuates the chair's modern style. The chair also features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair would be a striking piece of furniture that adds both style and comfort to any room.")
        [
          'en-US'
        ]("An art deco leather chair with ebony legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with the leather upholstery providing a soft and luxurious feel. The ebony legs are long and tapered, with a smooth finish that accentuates the chair's modern style. The chair also features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair would be a striking piece of furniture that adds both style and comfort to any room.")
        [
          'de-DE'
        ]('Dieser Lederstuhl mit Ebenholzbeinen im Art-Deco-Stil hat ein schlankes, stromlinienförmiges Design, das Raffinesse und Eleganz ausstrahlt. Der Stuhl hat einen bequem gepolsterten Sitz und eine Rückenlehne. Die Lederpolsterung vermittelt ein weiches und luxuriöses Gefühl. Die Beine aus Ebenholz sind lang und konisch zulaufend, mit einer glatten Oberfläche, die den modernen Stil des Stuhls betont. Der Stuhl weist auch markante Art-Deco-Elemente wie eckige Formen, kräftige Linien und geometrische Muster auf. Dieser Stuhl ist ein markantes Möbelstück, das jedem Raum sowohl Stil als auch Komfort verleiht.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('fawn-armchair')
        ['de-DE']('fawn-sessel')
        ['en-US']('fawn-armchair')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(fawnArmchairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.fawnArmchair01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(armchairsDraft.key!),
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default fawnArmchair;
