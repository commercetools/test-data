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
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const ivoryLoungeChairProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .newArrivals()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .armchairs()
  .build<TCategoryDraft>();

const ivoryLoungeChair = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('ivory-lounge-chair')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Ivory Lounge Chair')
        ['en-GB']('Ivory Lounge Chair')
        ['de-DE']('Elfenbein Lounge Stuhl')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]("This arm chair is a bold and funky piece of furniture that takes its inspiration from the eclectic styles of the 1970s. The chair features a round, circular shape, with a low backrest and generously padded seat that provide comfortable seating for extended periods of time.  The arms of the chair are wide and round, creating a comfortable and supportive space for you to rest your arms while lounging.   Overall, a 70's inspired round arm chair is a playful and fun piece of furniture that can add a touch of retro flair to any room. Its round shape and generous padding, make it a comfortable and inviting spot for lounging and relaxation.")
        [
          'en-US'
        ]("This arm chair is a bold and funky piece of furniture that takes its inspiration from the eclectic styles of the 1970s. The chair features a round, circular shape, with a low backrest and generously padded seat that provide comfortable seating for extended periods of time.  The arms of the chair are wide and round, creating a comfortable and supportive space for you to rest your arms while lounging.   Overall, a 70's inspired round arm chair is a playful and fun piece of furniture that can add a touch of retro flair to any room. Its round shape and generous padding, make it a comfortable and inviting spot for lounging and relaxation.")
        [
          'de-DE'
        ]('Dieser Sessel ist ein kühnes und flippiges Möbelstück, das seine Inspiration aus den eklektischen Stilen der 1970er Jahre bezieht. Der Stuhl hat eine runde, kreisförmige Form mit einer niedrigen Rückenlehne und einer großzügig gepolsterten Sitzfläche, die für längere Zeit bequemen Sitz bietet.  Die Armlehnen des Stuhls sind breit und rund und schaffen einen bequemen und stützenden Platz, an dem Sie Ihre Arme beim Faulenzen ausruhen können.  Insgesamt ist ein von den 70er Jahren inspirierter runder Sessel ein verspieltes und lustiges Möbelstück, das jedem Raum einen Hauch von Retro-Flair verleihen kann. Seine runde Form und die großzügige Polsterung machen ihn zu einem komfortablen und einladenden Ort zum Faulenzen und Entspannen.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('ivory-lounge-chair')
        ['en-GB']('ivory-lounge-chair')
        ['de-DE']('elfenbein-lounge-stuhl')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(ivoryLoungeChairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.ivoryLoungeChair01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(newArrivalsDraft.key!),
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(armchairsDraft.key!),
    ]);

export default ivoryLoungeChair;
