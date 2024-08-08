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
import { ProductVariantDraft } from '../../../../product-variant';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const artDecoChairProductTypeDraft =
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

const artDecoChair = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('art-deco-chair')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Art Deco Chair')
        ['en-GB']('Art Deco Chair')
        ['de-DE']('Sessel im Art-Deco-Stil')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]("An art deco chair with metal legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with durable cotton upholstery providing a soft and luxurious feel. The metal legs have a smooth finish that accentuates the chair's modern style. The chair features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair is a striking piece of furniture that adds both style and comfort to any room.")
        [
          'en-US'
        ]("An art deco chair with metal legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with durable cotton upholstery providing a soft and luxurious feel. The metal legs have a smooth finish that accentuates the chair's modern style. The chair features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair is a striking piece of furniture that adds both style and comfort to any room.")
        [
          'de-DE'
        ]('Dieser Art-Deco-Stuhl mit Metallbeinen hat ein schlankes, stromlinienförmiges Design, das Raffinesse und Eleganz ausstrahlt. Der Stuhl hat einen bequem gepolsterten Sitz und eine Rückenlehne mit strapazierfähiger Baumwollpolsterung, die ein weiches und luxuriöses Gefühl vermittelt. Die Metallbeine haben eine glatte Oberfläche, die den modernen Stil des Stuhls betont. Der Stuhl bedient sich markante Art-Deco-Elemente wie eckige Formen, kräftige Linien und geometrische Muster. Der Stuhl ist ein markantes Möbelstück, das jedem Raum Stil und Komfort verleiht.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('art-deco-chair')
        ['en-GB']('art-deco-chair')
        ['de-DE']('art-deco-stuhl')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(artDecoChairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.artDecoChair01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(armchairsDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default artDecoChair;
