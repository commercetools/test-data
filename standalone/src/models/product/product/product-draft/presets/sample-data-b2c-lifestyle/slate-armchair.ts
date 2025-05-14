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

const slateArmchairProductTypeDraft =
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

const slateArmchair = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('slate-armchair')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Slate Armchair')
        ['en-GB']('Slate Armchair')
        ['de-DE']('Sessel aus Schiefer')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'de-DE'
        ]('Das minimalistische Sitzmöbel mit Ottomane besticht durch sein schlankes und schlichtes Design, bei dem klare Linien und Funktionalität im Vordergrund stehen. Die Ottomane ist passend zu dem Lounge-Möbel designt und bietet erweiterten Sitzkomfort. Das Polstermöbel ist mit seinen neutralen Farben und schlichten Mustern minimalistisch gehalten. Das Design ist von der modernen Ästhetik inspiriert und legt seinen Fokus auf Schlichtheit und Funktionalität. Das Ergebnis ist ein bequemer und stilvoller Sessel, der sich problemlos in eine Vielzahl von Einrichtungsstilen einfügt.')
        [
          'en-GB'
        ]('A minimalist chair with ottoman is a sleek and simple design that emphasizes clean lines and functionality. The ottoman is a matching piece, providing a place for the user to prop up their feet and relax. The upholstery is minimal, with neutral colors and simple patterns. The design is inspired by mid-century modern aesthetics, with a focus on simplicity and functionality. The result is a comfortable and stylish chair that fits seamlessly into a variety of interior design styles.')
        [
          'en-US'
        ]('A minimalist chair with ottoman is a sleek and simple design that emphasizes clean lines and functionality. The ottoman is a matching piece, providing a place for the user to prop up their feet and relax. The upholstery is minimal, with neutral colors and simple patterns. The design is inspired by mid-century modern aesthetics, with a focus on simplicity and functionality. The result is a comfortable and stylish chair that fits seamlessly into a variety of interior design styles.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('slate-armchair')
        ['en-GB']('slate-armchair')
        ['de-DE']('sessel-aus-schiefer')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(slateArmchairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.slateArmchair01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(armchairsDraft.key!),
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default slateArmchair;
