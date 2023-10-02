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

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const cottonTwoSeaterSofaProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const sofasDraft = CategoryDraft.presets.sampleDataGoodStore
  .sofas()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const cottonTwoSeaterSofa = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('cotton-two-seater-sofa')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Cotton Two-Seater Sofa')
        ['en-GB']('Cotton Two-Seater Sofa')
        ['de-DE']('Zweisitzer-Sofa aus Baumwolle')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          "The 2-seater cotton sofa is a cozy and comfortable seating option for any home. Made from soft, high-quality cotton fabric, this sofa is gentle on the skin and easy to maintain. The two seat cushions are plush and supportive, providing a comfortable seating experience. The sofa's backrest is well-padded, providing ample back support, while the armrests are gently rounded for a comfortable and relaxed feel. The wooden frame of the sofa is sturdy and durable, ensuring it will last for years to come. With a neutral color, this sofa can blend seamlessly into any interior design style, while the simple and elegant design adds a touch of sophistication to any room."
        )
        ['en-US'](
          "The 2-seater cotton sofa is a cozy and comfortable seating option for any home. Made from soft, high-quality cotton fabric, this sofa is gentle on the skin and easy to maintain. The two seat cushions are plush and supportive, providing a comfortable seating experience. The sofa's backrest is well-padded, providing ample back support, while the armrests are gently rounded for a comfortable and relaxed feel. The wooden frame of the sofa is sturdy and durable, ensuring it will last for years to come. With a neutral color, this sofa can blend seamlessly into any interior design style, while the simple and elegant design adds a touch of sophistication to any room."
        )
        ['de-DE'](
          'Unser 2-Sitzer-Baumwollsofa ist eine gemütliche und bequeme Sitzgelegenheit für jedes Zuhause. Aus weichem, hochwertigem Baumwollstoff gefertigt, ist dieses Sofa sanft zur Haut und pflegeleicht. Die beiden Sitzkissen sind weich und stützend und bieten ein komfortables Sitzerlebnis. Die Rückenlehne des Sofas ist gut gepolstert und bietet reichlich Rückenunterstützung, während die Armlehnen für ein bequemes und entspanntes Gefühl sanft abgerundet sind. Der Holzrahmen des Sofas ist robust und langlebig, sodass er viele Jahre hält. Mit einer neutralen Farbe fügt sich dieses Sofa nahtlos in jeden Einrichtungsstil ein, während das schlichte und elegante Design jedem Raum einen Hauch von Raffinesse verleiht.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('cotton-two-seater-sofa')
        ['de-DE']('zweisitzer-sofa-aus-baumwolle')
        ['en-US']('cotton-two-seater-sofa')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(cottonTwoSeaterSofaProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.cottonTwoSeaterSofa01()
    )
    .categories([
      KeyReference.presets.category().key(sofasDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default cottonTwoSeaterSofa;
