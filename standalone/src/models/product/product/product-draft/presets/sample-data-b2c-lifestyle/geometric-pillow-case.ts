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

const geometricPillowCaseProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .homeDecor()
  .build<TCategoryDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .newArrivals()
  .build<TCategoryDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bedding()
  .build<TCategoryDraft>();

const geometricPillowCase = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('geometric-pillow-case')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Geometric Pillow Case')
        ['en-GB']('Geometric Pillow Case')
        ['de-DE']('Geometrischer Kissenbezug')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A geometric pillowcase for throw pillows is a stylish and modern home decor accessory that can add a pop of visual interest to any room. The pillowcase is typically made from a soft and durable material, such as cotton, linen, or polyester, and features a bold geometric pattern that creates a sense of depth and dimension.  The geometric pattern on the pillowcase is typically created using a variety of shapes, such as triangles, squares, or hexagons, arranged in a repeating pattern. The pillowcase features a zipper closure, making it easy to remove and wash as needed.  The geometric pillowcase is a versatile and stylish accessory that can be used to accent a variety of decor styles, from modern and minimalist to bohemian and eclectic. It is perfect for complementing other patterned decor elements in a more eclectic space.  Overall, a geometric pillowcase for throw pillows is a stylish and versatile accessory that can help to create a cohesive and visually interesting decor scheme in any room. Its bold and modern design, combined with its soft and durable materials, make it a must-have accessory for any home.')
        [
          'en-US'
        ]('A geometric pillowcase for throw pillows is a stylish and modern home decor accessory that can add a pop of visual interest to any room. The pillowcase is typically made from a soft and durable material, such as cotton, linen, or polyester, and features a bold geometric pattern that creates a sense of depth and dimension.  The geometric pattern on the pillowcase is typically created using a variety of shapes, such as triangles, squares, or hexagons, arranged in a repeating pattern. The pillowcase features a zipper closure, making it easy to remove and wash as needed.  The geometric pillowcase is a versatile and stylish accessory that can be used to accent a variety of decor styles, from modern and minimalist to bohemian and eclectic. It is perfect for complementing other patterned decor elements in a more eclectic space.  Overall, a geometric pillowcase for throw pillows is a stylish and versatile accessory that can help to create a cohesive and visually interesting decor scheme in any room. Its bold and modern design, combined with its soft and durable materials, make it a must-have accessory for any home.')
        [
          'de-DE'
        ]('Ein geometrischer Kissenbezug für Zierkissen ist ein stilvolles und modernes Wohnaccessoire, das jedem Raum einen Hauch von visuellem Interesse verleihen kann. Der Kissenbezug besteht normalerweise aus einem weichen und strapazierfähigen Material wie Baumwolle, Leinen oder Polyester und weist ein kräftiges geometrisches Muster auf, das ein Gefühl von Tiefe und Dimension erzeugt.  Das geometrische Muster auf dem Kissenbezug wird normalerweise mit einer Vielzahl von Formen wie Dreiecken, Quadraten oder Sechsecken erstellt, die in einem sich wiederholenden Muster angeordnet sind. Der Kissenbezug verfügt über einen Reißverschluss, so dass er bei Bedarf einfach abgenommen und gewaschen werden kann.  Der geometrische Kissenbezug ist ein vielseitiges und stilvolles Accessoire, das verwendet werden kann, um eine Vielzahl von Einrichtungsstilen zu betonen, von modern und minimalistisch bis hin zu unkonventionell und vielseitig. Er ist perfekt, um andere gemusterte Dekorelemente in einem vielseitigen Raum zu ergänzen.  Insgesamt ist ein geometrischer Kissenbezug für Zierkissen ein stilvolles und vielseitiges Accessoire, das dazu beitragen kann, in jedem Raum ein zusammenhängendes und optisch interessantes Dekor zu schaffen. Das mutige und moderne Design, kombiniert mit weichen und langlebigen Materialien, machen ihn zu einem unverzichtbaren Accessoire für jedes Zuhause.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('geometric-pillow-case')
        ['en-GB']('geometric-pillow-case')
        ['de-DE']('geometrischer-kissenbezug')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(geometricPillowCaseProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.geometricPillowCase01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataB2CLifestyle.geometricPillowCase02(),
      ProductVariantDraft.presets.sampleDataB2CLifestyle.geometricPillowCase03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
      KeyReferenceDraft.presets.category().key(newArrivalsDraft.key!),
      KeyReferenceDraft.presets.category().key(beddingDraft.key!),
    ]);

export default geometricPillowCase;
