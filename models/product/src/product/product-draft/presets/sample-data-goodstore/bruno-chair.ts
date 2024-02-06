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
import { ProductVariantDraft } from '../../../../product-variant';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const brunoChairProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodStore
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataGoodStore
  .armchairs()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const brunoChair = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('bruno-chair')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Bruno Chair')
        ['en-GB']('Bruno Chair')
        ['de-DE']('Sessel "Bruno"')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'A modern linen and wood chair features a simple yet stylish design. The chair has a sleek wooden frame, which is stained in a natural wood finish. The seat and backrest are made of a soft linen fabric that is padded for comfort. The linen fabric is a neutral beige.  The backrest of the chair is slightly angled, providing additional comfort and support for the user. The legs of the chair are slightly tapered and have protective foot pads to prevent damage to flooring.  Overall, this modern linen and wood chair is a versatile and elegant addition to any living room, dining room, or office space.'
        )
        ['en-US'](
          'A modern linen and wood chair features a simple yet stylish design. The chair has a sleek wooden frame, which is stained in a natural wood finish. The seat and backrest are made of a soft linen fabric that is padded for comfort. The linen fabric is a neutral beige.  The backrest of the chair is slightly angled, providing additional comfort and support for the user. The legs of the chair are slightly tapered and have protective foot pads to prevent damage to flooring.  Overall, this modern linen and wood chair is a versatile and elegant addition to any living room, dining room, or office space.'
        )
        ['de-DE'](
          'Ein moderner Stuhl aus Leinen und Holz zeichnet sich durch ein einfaches, aber stilvolles Design aus. Der Stuhl hat einen schlanken Holzrahmen, der in einem natürlichen Holzfinish gebeizt ist. Der Sitz und die Rückenlehne bestehen aus einem weichen Leinenstoff, der für Komfort gepolstert ist. Der Leinenstoff ist ein neutrales Beige.  Die Rückenlehne des Stuhls ist leicht angewinkelt, was dem Benutzer zusätzlichen Komfort und Unterstützung bietet. Die Beine des Stuhls sind leicht konisch und haben schützende Fußpolster, um Schäden am Bodenbelag zu vermeiden.  Insgesamt ist dieser moderne Leinen- und Holzstuhl eine vielseitige und elegante Ergänzung für jedes Wohnzimmer, Esszimmer oder Büro.'
        )
    )
    .slug(
      LocalizedString.presets
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
      ProductVariantDraft.presets.sampleDataGoodStore.brunoChair01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(armchairsDraft.key!),
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default brunoChair;
