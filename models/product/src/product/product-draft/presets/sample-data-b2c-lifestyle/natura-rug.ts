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
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const naturaRugProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const rugsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .rugs()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .homeDecor()
  .build<TCategoryDraft>();

const naturaRug = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('natura-rug')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Natura Rug')
        ['de-DE']('Natura Teppich')
        ['en-US']('Natura Rug')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.  These rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.  The texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.  The construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.  A round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.  Overall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.')
        [
          'de-DE'
        ]('Ein runder Teppich aus Naturfasern ist ein kreisförmiger Teppich, der aus Materialien hergestellt wird, die in der Natur vorkommen. Zu den Naturfasern, die üblicherweise für diese Art von Teppichen verwendet werden, gehören Jute, Sisal, Seegras und Bambus. Durch die Verwendung natürlicher Materialien haben diese Teppiche einen rustikalen und organischen Charakter, der einem Raum Wärme und Struktur verleihen kann. Die neutralen Farbtöne dieser Fasern machen sie außerdem vielseitig einsetzbar und passen zu einer Reihe von Einrichtungsstilen, von Bohème über Küsten- bis hin zu Landhausstil. Die Textur und Dicke eines runden Teppichs aus Naturfasern kann je nach verwendetem Material variieren. Jute und Sisal haben beispielsweise eine rauere Struktur und einen dünneren Flor, während Seegras und Bambus eine glattere Textur und einen dickeren Flor haben.  Die Herstellung dieser Teppiche erfolgt häufig in Handarbeit, was zu ihrer Einzigartigkeit beiträgt. Auch die Web- oder Flechttechnik, mit der der Teppich hergestellt wird, kann das Design optisch aufwerten, z. B. durch ein Fischgräten- oder Chevron-Muster.  Ein runder Teppich aus Naturfasern kann in einer Vielzahl von Räumen verwendet werden, vom Wohnzimmer über das Schlafzimmer bis zum Essbereich. Besonders beliebt sind sie im Bohème- und Küsten-Stil, wo sie dem Raum eine entspannte und lockere Atmosphäre verleihen können. Insgesamt ist ein runder Teppich aus Naturfasern eine stilvolle und umweltfreundliche Wahl für alle, die ihrer Einrichtung Textur und Wärme verleihen möchten.')
        [
          'en-US'
        ]('A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.  These rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.  The texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.  The construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.  A round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.  Overall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('natura-rug')
        ['de-DE']('natura-teppich')
        ['en-US']('natura-rug')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(naturaRugProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.naturaRug01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(rugsDraft.key!),
      KeyReferenceDraft.presets.category().key(roomDecorDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default naturaRug;
