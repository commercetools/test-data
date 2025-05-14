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

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const edgarArmchairProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .newArrivals()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .armchairs()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const edgarArmchair = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('edgar-armchair')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Edgar Armchair')
        ['en-GB']('Edgar Armchair')
        ['de-DE']('Sessel "Edgar"')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('An abstract modern style armchair with metal legs is a unique piece of furniture that would add a touch of sophistication to any room. The chair is designed with clean lines and a sleek profile, featuring a low, wide seat and a tall backrest that curves gently around the sides of the chair. The seat and backrest are upholstered in a textured, durable fabric, which adds a contemporary edge to the classic armchair design. The metal legs are thin and tapered, providing a delicate yet sturdy base for the chair. Overall, this armchair is a perfect blend of style and comfort, making it a great addition to any modern living space.')
        [
          'en-US'
        ]('An abstract modern style armchair with metal legs is a unique piece of furniture that would add a touch of sophistication to any room. The chair is designed with clean lines and a sleek profile, featuring a low, wide seat and a tall backrest that curves gently around the sides of the chair. The seat and backrest are upholstered in a textured, durable fabric, which adds a contemporary edge to the classic armchair design. The metal legs are thin and tapered, providing a delicate yet sturdy base for the chair. Overall, this armchair is a perfect blend of style and comfort, making it a great addition to any modern living space.')
        [
          'de-DE'
        ]('Ein Sessel im abstrakten modernen Stil mit Metallbeinen ist ein einzigartiges Möbelstück, das jedem Raum einen Hauch von Raffinesse verleiht. Der Stuhl ist mit klaren Linien und einem schlanken Profil gestaltet und verfügt über einen niedrigen, breiten Sitz und eine hohe Rückenlehne, die sich sanft um die Seiten des Stuhls krümmt. Der Sitz und die Rückenlehne sind mit einem strukturierten, strapazierfähigen Stoff bezogen, der dem klassischen Sesseldesign eine zeitgemäße Note verleiht. Die Metallbeine sind dünn und konisch zulaufend und bilden eine filigrane und dennoch stabile Basis für den Stuhl. Insgesamt ist dieser Sessel eine perfekte Mischung aus Stil und Komfort, was ihn zu einer großartigen Ergänzung für jeden modernen Wohnraum macht.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('edgar-armchair')
        ['de-DE']('edgar-sessel')
        ['en-US']('edgar-armchair')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(edgarArmchairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.edgarArmchair01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(newArrivalsDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(armchairsDraft.key!),
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default edgarArmchair;
