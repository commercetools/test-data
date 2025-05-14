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
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const brunoChairProductTypeDraft =
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

const brunoChair = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('bruno-chair')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Bruno Chair')
        ['en-GB']('Bruno Chair')
        ['de-DE']('Sessel "Bruno"')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A modern linen and wood chair features a simple yet stylish design. The chair has a sleek wooden frame, which is stained in a natural wood finish. The seat and backrest are made of a soft linen fabric that is padded for comfort. The linen fabric is a neutral beige.  The backrest of the chair is slightly angled, providing additional comfort and support for the user. The legs of the chair are slightly tapered and have protective foot pads to prevent damage to flooring.  Overall, this modern linen and wood chair is a versatile and elegant addition to any living room, dining room, or office space.')
        [
          'en-US'
        ]('A modern linen and wood chair features a simple yet stylish design. The chair has a sleek wooden frame, which is stained in a natural wood finish. The seat and backrest are made of a soft linen fabric that is padded for comfort. The linen fabric is a neutral beige.  The backrest of the chair is slightly angled, providing additional comfort and support for the user. The legs of the chair are slightly tapered and have protective foot pads to prevent damage to flooring.  Overall, this modern linen and wood chair is a versatile and elegant addition to any living room, dining room, or office space.')
        [
          'de-DE'
        ]('Ein moderner Stuhl aus Leinen und Holz zeichnet sich durch ein einfaches, aber stilvolles Design aus. Der Stuhl hat einen schlanken Holzrahmen, der in einem natürlichen Holzfinish gebeizt ist. Der Sitz und die Rückenlehne bestehen aus einem weichen Leinenstoff, der für Komfort gepolstert ist. Der Leinenstoff ist ein neutrales Beige.  Die Rückenlehne des Stuhls ist leicht angewinkelt, was dem Benutzer zusätzlichen Komfort und Unterstützung bietet. Die Beine des Stuhls sind leicht konisch und haben schützende Fußpolster, um Schäden am Bodenbelag zu vermeiden.  Insgesamt ist dieser moderne Leinen- und Holzstuhl eine vielseitige und elegante Ergänzung für jedes Wohnzimmer, Esszimmer oder Büro.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('bruno-chair')
        ['en-GB']('bruno-chair')
        ['de-DE']('bruno-stuhl')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(brunoChairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.brunoChair01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(armchairsDraft.key!),
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default brunoChair;
