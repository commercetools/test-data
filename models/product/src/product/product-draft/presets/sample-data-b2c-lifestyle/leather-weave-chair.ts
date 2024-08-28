import type {
  TCategoryDraft} from '@commercetools-test-data/category';
import {
  CategoryDraft
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
import * as ProductVariantDraft from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const leatherWeaveChairProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .newArrivals()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .armchairs()
  .build<TCategoryDraft>();

const leatherWeaveChair = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('leather-weave-chair')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Leather Weave Chair')
        ['en-GB']('Leather Weave Chair')
        ['de-DE']('Ledergeflecht Stuhl')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]("A wooden chair with leather weave upholstery is a beautiful and functional piece of furniture that blends natural materials with a touch of luxury. The chair features a sturdy and durable wooden frame, crafted from high-quality hardwood, that provides a solid foundation for the seat and backrest.  The seat and backrest of the chair are made from a tight weave of leather strips, creating a unique and eye-catching texture that adds to the chair's overall appeal.   The chair has a simple and elegant design, with clean lines and a minimalist aesthetic that makes it easy to incorporate into a variety of interior design styles.   The legs of the chair are angled slightly outward for stability. The bottom of the legs may be fitted with protective caps to prevent scratches or damage to your floors.  Overall, a wooden chair with leather weave upholstery is a versatile and stylish piece of furniture that can add warmth, texture, and visual interest to any room. Its combination of natural materials and luxurious details makes it a popular choice for anyone looking to add a touch of sophistication and elegance to their home.")
        [
          'en-US'
        ]("A wooden chair with leather weave upholstery is a beautiful and functional piece of furniture that blends natural materials with a touch of luxury. The chair features a sturdy and durable wooden frame, crafted from high-quality hardwood, that provides a solid foundation for the seat and backrest.  The seat and backrest of the chair are made from a tight weave of leather strips, creating a unique and eye-catching texture that adds to the chair's overall appeal.   The chair has a simple and elegant design, with clean lines and a minimalist aesthetic that makes it easy to incorporate into a variety of interior design styles.   The legs of the chair are angled slightly outward for stability. The bottom of the legs may be fitted with protective caps to prevent scratches or damage to your floors.  Overall, a wooden chair with leather weave upholstery is a versatile and stylish piece of furniture that can add warmth, texture, and visual interest to any room. Its combination of natural materials and luxurious details makes it a popular choice for anyone looking to add a touch of sophistication and elegance to their home.")
        [
          'de-DE'
        ]('Ein Holzstuhl mit Lederbezug ist ein schönes und funktionales Möbelstück, das natürliche Materialien mit einem Hauch von Luxus verbindet. Der Stuhl verfügt über einen robusten und langlebigen Holzrahmen aus hochwertigem Hartholz, der eine solide Grundlage für Sitz und Rückenlehne bietet.  Der Sitz und die Rückenlehne des Stuhls bestehen aus einem engen Gewebe aus Lederstreifen, wodurch eine einzigartige und auffällige Textur entsteht, die den Gesamteindruck des Stuhls verstärkt.  Der Stuhl hat ein einfaches und elegantes Design mit klaren Linien und einer minimalistischen Ästhetik, die sich leicht in eine Vielzahl von Einrichtungsstilen integrieren lässt.  Die Beine des Stuhls sind aus Stabilitätsgründen leicht nach außen geneigt. Die Unterseite der Beine kann mit Schutzkappen versehen werden, um Kratzer oder Schäden an Ihren Böden zu vermeiden.  Insgesamt ist ein Holzstuhl mit Lederbezug ein vielseitiges und stilvolles Möbelstück, das jedem Raum Wärme, Textur und visuelles Interesse verleiht. Seine Kombination aus natürlichen Materialien und luxuriösen Details macht es zu einer beliebten Wahl für alle, die ihrem Zuhause einen Hauch von Raffinesse und Eleganz verleihen möchten.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('leather-weave-chair')
        ['en-GB']('leather-weave-chair')
        ['de-DE']('stuhl-aus-ledergeflecht')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(leatherWeaveChairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.leatherWeaveChair01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(newArrivalsDraft.key!),
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(armchairsDraft.key!),
    ]);

export default leatherWeaveChair;
