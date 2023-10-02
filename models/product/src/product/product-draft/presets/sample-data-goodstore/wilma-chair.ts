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

const wilmaChairProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodStore
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataGoodStore
  .armchairs()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const wilmaChair = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('wilma-chair')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Wilma Chair')
        ['en-GB']('Wilma Chair')
        ['de-DE']('Sessel >Wilma<')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US'](
          'A tufted armless futon chair has a simple and modern design, featuring a cushioned seat and backrest with tufted details for added comfort and style. The chair lacks arms to allow for more flexibility and ease of use. The upholstery is made of durable fabric that is easy to clean and maintain. Overall, a tufted armless futon chair is a practical and stylish furniture piece that can be used in a variety of settings, such as a living room, bedroom, or home office.'
        )
        ['de-DE'](
          'Der getuftete armlehnenlose Futon-Stuhl hat ein einfaches und modernes Design mit gepolstertem Sitz und Rückenlehne. Das Design des Sessels verzichtet auf Armlehnen, um mehr Flexibilität beim Sitzerlebnis zu schaffen. Die Polsterung besteht aus strapazierfähigem Stoff, der leicht zu reinigen und zu pflegen ist. Der getuftete Futonstuhl ohne Armlehnen ist ein praktisches und stilvolles Möbelstück, das in einer Vielzahl von Umgebungen verwendet werden kann, z. B. im Wohn-, Schlaf- oder Arbeitsbereich.'
        )
        ['en-GB'](
          'A tufted armless futon chair has a simple and modern design, featuring a cushioned seat and backrest with tufted details for added comfort and style. The chair lacks arms to allow for more flexibility and ease of use. The upholstery is made of durable fabric that is easy to clean and maintain. Overall, a tufted armless futon chair is a practical and stylish furniture piece that can be used in a variety of settings, such as a living room, bedroom, or home office.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('wilma-chair')
        ['en-GB']('wilma-chair')
        ['de-DE']('wilma-stuhl')
    )
    .productType(
      KeyReference.presets.productType().key(wilmaChairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.wilmaChair01()
    )
    .categories([
      KeyReference.presets.category().key(armchairsDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
    ]);

export default wilmaChair;
