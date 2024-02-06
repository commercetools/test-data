import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReferenceDraft,
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

const nalaTwoSeaterSofaProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const sofasDraft = CategoryDraft.presets.sampleDataGoodStore
  .sofas()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataGoodStore
  .newArrivals()
  .build<TCategoryDraft>();

const theTraditionalistDraft = CategoryDraft.presets.sampleDataGoodStore
  .theTraditionalist()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataGoodStore
  .collections()
  .build<TCategoryDraft>();

const nalaTwoSeaterSofa = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('nala-two-seater-sofa')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Nala Two-Seater Sofa')
        ['de-DE']('Nala Zweisitzer-Sofa')
        ['en-US']('Nala Two-Seater Sofa')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          "This modern 2-seater sofa is a stylish and comfortable addition to any living space. The sofa features a sleek and minimalistic design, with clean lines and a contemporary aesthetic. It is upholstered in high-quality cotton fabric, which is soft to the touch and easy to clean. The two seat cushions are plush and supportive, offering a comfortable place to sit and relax. The backrest is well-padded, providing ample back support, while the armrests are gently curved for a comfortable and relaxed feel. The sofa's frame is made from sturdy wood, ensuring it will last for years to come. With a modern and minimalist style, this sofa can fit in seamlessly with any modern decor, while the comfortable and high-quality upholstery makes it a great place to relax and unwind."
        )
        ['de-DE'](
          'Dieses moderne 2-Sitzer-Sofa ist eine stilvolle und komfortable Ergänzung für jeden Wohnbereich. Das Sofa hat ein schlichtes und minimalistisches Design mit klaren Linien und einer zeitgenössischen Ästhetik. Es ist mit einem hochwertigen Baumwollstoff gepolstert, der sich weich anfühlt und leicht zu reinigen ist. Die beiden Sitzkissen sind weich und stützend und bieten einen bequemen Platz zum Sitzen und Entspannen. Die Rückenlehne ist gut gepolstert und stützt den Rücken, während die Armlehnen sanft geschwungen sind, um ein bequemes und entspanntes Gefühl zu vermitteln. Das Gestell des Sofas ist aus robustem Holz oder Metall gefertigt, so dass es viele Jahre halten wird. Mit seinem modernen und minimalistischen Stil fügt sich dieses Sofa nahtlos in jede moderne Einrichtung ein, während die bequeme und hochwertige Polsterung es zu einem großartigen Ort zum Entspannen und Relaxen macht.'
        )
        ['en-US'](
          "This modern 2-seater sofa is a stylish and comfortable addition to any living space. The sofa features a sleek and minimalistic design, with clean lines and a contemporary aesthetic. It is upholstered in high-quality cotton fabric, which is soft to the touch and easy to clean. The two seat cushions are plush and supportive, offering a comfortable place to sit and relax. The backrest is well-padded, providing ample back support, while the armrests are gently curved for a comfortable and relaxed feel. The sofa's frame is made from sturdy wood, ensuring it will last for years to come. With a modern and minimalist style, this sofa can fit in seamlessly with any modern decor, while the comfortable and high-quality upholstery makes it a great place to relax and unwind."
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('nala-two-seater-sofa')
        ['de-DE']('nala-zweisitzer-sofa')
        ['en-US']('nala-two-seater-sofa')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(nalaTwoSeaterSofaProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.nalaTwoSeaterSofa01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodStore.nalaTwoSeaterSofa02(),
      ProductVariantDraft.presets.sampleDataGoodStore.nalaTwoSeaterSofa03(),
      ProductVariantDraft.presets.sampleDataGoodStore.nalaTwoSeaterSofa04(),
      ProductVariantDraft.presets.sampleDataGoodStore.nalaTwoSeaterSofa05(),
      ProductVariantDraft.presets.sampleDataGoodStore.nalaTwoSeaterSofa06(),
      ProductVariantDraft.presets.sampleDataGoodStore.nalaTwoSeaterSofa07(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(sofasDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(newArrivalsDraft.key!),
      KeyReferenceDraft.presets.category().key(theTraditionalistDraft.key!),
      KeyReferenceDraft.presets.category().key(collectionsDraft.key!),
    ]);

export default nalaTwoSeaterSofa;
