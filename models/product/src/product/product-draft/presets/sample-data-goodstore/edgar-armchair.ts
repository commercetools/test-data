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

const edgarArmchairProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataGoodStore
  .newArrivals()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataGoodStore
  .armchairs()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const edgarArmchair = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('edgar-armchair')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Edgar Armchair')
        ['de-DE']('Edgar Sessel')
        ['en-US']('Edgar Armchair')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'An abstract modern style armchair with metal legs is a unique piece of furniture that would add a touch of sophistication to any room. The chair is designed with clean lines and a sleek profile, featuring a low, wide seat and a tall backrest that curves gently around the sides of the chair. The seat and backrest are upholstered in a textured, durable fabric, which adds a contemporary edge to the classic armchair design. The metal legs are thin and tapered, providing a delicate yet sturdy base for the chair. Overall, this armchair is a perfect blend of style and comfort, making it a great addition to any modern living space.'
        )
        ['de-DE'](
          'Ein Sessel im abstrakten modernen Stil mit Metallbeinen ist ein einzigartiges Möbelstück, das jedem Raum einen Hauch von Raffinesse verleiht. Der Stuhl ist mit klaren Linien und einem schlanken Profil gestaltet und verfügt über einen niedrigen, breiten Sitz und eine hohe Rückenlehne, die sich sanft um die Seiten des Stuhls krümmt. Der Sitz und die Rückenlehne sind mit einem strukturierten, strapazierfähigen Stoff bezogen, der dem klassischen Sesseldesign eine zeitgemäße Note verleiht. Die Metallbeine sind dünn und konisch zulaufend und bilden eine filigrane und dennoch stabile Basis für den Stuhl. Insgesamt ist dieser Sessel eine perfekte Mischung aus Stil und Komfort, was ihn zu einer großartigen Ergänzung für jeden modernen Wohnraum macht.'
        )
        ['en-US'](
          'An abstract modern style armchair with metal legs is a unique piece of furniture that would add a touch of sophistication to any room. The chair is designed with clean lines and a sleek profile, featuring a low, wide seat and a tall backrest that curves gently around the sides of the chair. The seat and backrest are upholstered in a textured, durable fabric, which adds a contemporary edge to the classic armchair design. The metal legs are thin and tapered, providing a delicate yet sturdy base for the chair. Overall, this armchair is a perfect blend of style and comfort, making it a great addition to any modern living space.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('edgar-armchair')
        ['de-DE']('edgar-sessel')
        ['en-US']('edgar-armchair')
    )
    .productType(
      KeyReference.presets.productType().key(edgarArmchairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.edgarArmchair01()
    )
    .categories([
      KeyReference.presets.category().key(newArrivalsDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(armchairsDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default edgarArmchair;
