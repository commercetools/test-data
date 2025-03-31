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
import { ProductVariantDraft } from '../../../../product-variant';
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const charlieArmchairProductTypeDraft =
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

const charlieArmchair = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('charlie-armchair')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Charlie Armchair')
        ['en-GB']('Charlie Armchair')
        ['de-DE']('Sessel "Charlie"')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A corduroy chair with wooden legs has a cozy and rustic feel. The chair has a sturdy wooden frame and four straight, tapered legs that support the seat and backrest. The corduroy upholstery is soft and plush fabric with a distinctive ribbed texture that adds visual interest and depth to the chair. The color of the corduroy is a warm and earthy tone. The wooden legs are finished in a natural wood stain. The chair has a simple and understated design that complements a variety of interior decor styles.')
        [
          'en-US'
        ]('A corduroy chair with wooden legs has a cozy and rustic feel. The chair has a sturdy wooden frame and four straight, tapered legs that support the seat and backrest. The corduroy upholstery is soft and plush fabric with a distinctive ribbed texture that adds visual interest and depth to the chair. The color of the corduroy is a warm and earthy tone. The wooden legs are finished in a natural wood stain. The chair has a simple and understated design that complements a variety of interior decor styles.')
        [
          'de-DE'
        ]('Dieser Sessel mit Kordbezug und Holzbeinen hat eine gemütliche und rustikale Ausstrahlung. Der Stuhl hat einen stabilen Holzrahmen und vier gerade, sich verjüngende Beine, die den Sitz und die Rückenlehne tragen. Die Kordpolsterung ist ein weicher und plüschiger Stoff mit einer unverwechselbaren gerippten Textur, die dem Stuhl visuelle Rafinesse und Tiefe verleiht. Der Kordstoff ist in einem warmem und erdigen Ton gehalten. Die Holzbeine sind natürlich gebeizt. Der Stuhl hat ein einfaches und dezentes Design, das zu einer Vielzahl von Einrichtungsstilen passt.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('charlie-armchair')
        ['en-GB']('charlie-armchair')
        ['de-DE']('charlie-sessel')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(charlieArmchairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.charlieArmchair01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(armchairsDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default charlieArmchair;
