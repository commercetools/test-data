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

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const naturaRugProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodStore
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const rugsDraft = CategoryDraft.presets.sampleDataGoodStore
  .rugs()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeDecor()
  .build<TCategoryDraft>();

const naturaRug = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('natura-rug')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Natura Rug')
        ['de-DE']('Natura Teppich')
        ['en-US']('Natura Rug')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.  These rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.  The texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.  The construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.  A round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.  Overall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.'
        )
        ['de-DE'](
          'Ein runder Teppich aus Naturfasern ist eine Teppichart, die kreisförmig ist und aus Materialien besteht, die in der Natur vorkommen. Naturfasern, die üblicherweise für diese Art von Teppichen verwendet werden, sind Jute, Sisal, Seegras und Bambus.  Diese Teppiche haben aufgrund der Verwendung natürlicher Materialien, die einem Raum Wärme und Textur verleihen können, ein rustikales und organisches Gefühl. Die neutralen Töne dieser Fasern machen sie außerdem vielseitig und in der Lage, eine Reihe von Einrichtungsstilen zu ergänzen, von Bohème über Küsten bis hin zu Bauernhäusern.  Struktur und Dicke eines runden Teppichs aus Naturfasern können je nach verwendetem Material variieren. Beispielsweise haben Jute und Sisal eine rauere Textur und einen dünneren Flor, während Seegras und Bambus eine glattere Textur und einen dickeren Flor haben.  Die Herstellung dieser Teppiche erfolgt oft von Hand, was zu ihrer einzigartigen und einzigartigen Qualität beiträgt. Die Web- oder Flechttechnik, die zur Herstellung des Teppichs verwendet wird, kann dem Design auch visuelles Interesse verleihen, z. B. mit einem Fischgräten- oder Chevron-Muster.  Ein runder Teppich aus Naturfasern kann in einer Vielzahl von Räumen verwendet werden, von Wohnzimmern über Schlafzimmer bis hin zu Essbereichen. Sie sind besonders beliebt in böhmischen und küstennahen Einrichtungsstilen, wo sie dem Raum eine entspannte und entspannte Atmosphäre verleihen können.  Insgesamt ist ein runder Teppich aus Naturfasern eine stilvolle und umweltfreundliche Wahl für alle, die ihrer Wohnkultur Textur und Wärme verleihen möchten.'
        )
        ['en-US'](
          'A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.  These rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.  The texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.  The construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.  A round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.  Overall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('natura-rug')
        ['de-DE']('natura-teppich')
        ['en-US']('natura-rug')
    )
    .productType(
      KeyReference.presets.productType().key(naturaRugProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.naturaRug01()
    )
    .categories([
      KeyReference.presets.category().key(rugsDraft.key!),
      KeyReference.presets.category().key(roomDecorDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default naturaRug;
