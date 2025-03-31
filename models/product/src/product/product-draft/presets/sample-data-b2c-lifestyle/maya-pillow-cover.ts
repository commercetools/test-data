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
import * as ProductDraft from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const mayaPillowCoverProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bedding()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .homeDecor()
  .build<TCategoryDraft>();

const mayaPillowCover = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('maya-pillow-cover')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Maya Pillow Cover')
        ['en-GB']('Maya Pillow Cover')
        ['de-DE']('Maya Kissenbezug')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]("A microfiber brown pillowcase is a soft and comfortable pillow cover made from synthetic fibers. The microfiber material is designed to be soft and silky to the touch, providing a comfortable and cozy sleeping experience.  The brown color of the pillowcase is typically warm and inviting, creating a cozy and relaxing atmosphere in a bedroom. It can also be a versatile color that matches well with a variety of other colors and decor styles.  Microfiber pillowcases are known for their durability and easy care. They are typically resistant to wrinkles and shrinkage, making them ideal for busy households. They are also hypoallergenic, making them a great option for people with allergies or sensitivities.  Overall, a microfiber brown pillowcase is a practical and comfortable choice for any bedroom. It is soft, durable, and easy to care for, providing a cozy and inviting sleeping environment for a restful night's sleep.")
        [
          'en-US'
        ]("A microfiber brown pillowcase is a soft and comfortable pillow cover made from synthetic fibers. The microfiber material is designed to be soft and silky to the touch, providing a comfortable and cozy sleeping experience.  The brown color of the pillowcase is typically warm and inviting, creating a cozy and relaxing atmosphere in a bedroom. It can also be a versatile color that matches well with a variety of other colors and decor styles.  Microfiber pillowcases are known for their durability and easy care. They are typically resistant to wrinkles and shrinkage, making them ideal for busy households. They are also hypoallergenic, making them a great option for people with allergies or sensitivities.  Overall, a microfiber brown pillowcase is a practical and comfortable choice for any bedroom. It is soft, durable, and easy to care for, providing a cozy and inviting sleeping environment for a restful night's sleep.")
        [
          'de-DE'
        ]('Ein brauner Mikrofaser-Kissenbezug ist ein weicher und bequemer Kissenbezug aus synthetischen Fasern. Das Mikrofasermaterial fühlt sich weich und seidig an und bietet ein komfortables und gemütliches Schlaferlebnis.  Die braune Farbe des Kissenbezugs ist typisch warm und einladend und schafft eine gemütliche und entspannende Atmosphäre in einem Schlafzimmer. Es kann auch eine vielseitige Farbe sein, die gut zu einer Vielzahl anderer Farben und Dekorstile passt.  Kissenbezüge aus Mikrofaser sind bekannt für ihre Strapazierfähigkeit und Pflegeleichtigkeit. Sie sind in der Regel knitter- und schrumpffrei und somit ideal für vielbeschäftigte Haushalte. Sie sind auch hypoallergen, was sie zu einer großartigen Option für Menschen mit Allergien oder Empfindlichkeiten macht.  Insgesamt ist ein brauner Kissenbezug aus Mikrofaser eine praktische und bequeme Wahl für jedes Schlafzimmer. Es ist weich, strapazierfähig und pflegeleicht und bietet eine gemütliche und einladende Schlafumgebung für einen erholsamen Schlaf.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('maya-pillow-cover')
        ['en-GB']('maya-pillow-cover')
        ['de-DE']('maya-kissenbezug')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(mayaPillowCoverProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.mayaPillowCover01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataB2CLifestyle.mayaPillowCover02(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(beddingDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default mayaPillowCover;
