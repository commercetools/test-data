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
import * as ProductVariantDraft from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const smallWoodenBowlProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const bowlsDraft = CategoryDraft.presets.sampleDataGoodStore
  .bowls()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const servingPlattersDraft = CategoryDraft.presets.sampleDataGoodStore
  .servingPlatters()
  .build<TCategoryDraft>();

const servewareDraft = CategoryDraft.presets.sampleDataGoodStore
  .serveware()
  .build<TCategoryDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataGoodStore
  .dinnerware()
  .build<TCategoryDraft>();

const smallWoodenBowl = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('small-wooden-bowl')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Small Wooden Bowl')
        ['en-GB']('Small Wooden Bowl')
        ['de-DE']('Kleine Holzschale')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'This wooden bowl is designed to hold small servings of food or other small items. It is ideal for serving small portions of food, such as nuts, candies, dips, or sauces.  It can also be used as a decorative item, as its natural material and unique texture add warmth and character to any setting. It can be used as a standalone piece or as part of a larger set, and can be styled with other wooden pieces to create a cohesive look.  The bowl is easy to clean and maintain, and can be washed with soap and water or wiped clean with a damp cloth. It should be allowed to dry thoroughly before use to prevent warping or cracking.  Overall, a small round wooden bowl is a versatile and functional dish that adds a touch of natural warmth and character to any setting. Its simplicity and durability make it a staple in many kitchens and dining rooms.'
        )
        ['en-US'](
          'This wooden bowl is designed to hold small servings of food or other small items. It is ideal for serving small portions of food, such as nuts, candies, dips, or sauces.  It can also be used as a decorative item, as its natural material and unique texture add warmth and character to any setting. It can be used as a standalone piece or as part of a larger set, and can be styled with other wooden pieces to create a cohesive look.  The bowl is easy to clean and maintain, and can be washed with soap and water or wiped clean with a damp cloth. It should be allowed to dry thoroughly before use to prevent warping or cracking.  Overall, a small round wooden bowl is a versatile and functional dish that adds a touch of natural warmth and character to any setting. Its simplicity and durability make it a staple in many kitchens and dining rooms.'
        )
        ['de-DE'](
          'Diese Holzschale ist so konzipiert, dass sie kleinere Snacks oder andere Gegenstände fassen kann. Sie eignet sich ideal zum Servieren kleiner Portionen wie Nüsse, Bonbons, Dips oder Saucen.  Sie kann aber auch als Dekorationsartikel verwendet werden, da ihr natürliches Material und die einzigartige Textur jeder Umgebung Wärme und Charakter verleihen. Die Schale kann eigenständig oder als Teil eines größeren Sets ihre Wirkung entfalten. Sie kann zudem mit anderen Holz-Accessoires gestylt werden, um einen zusammenhängenden Look zu schaffen.  Die Schale ist leicht zu reinigen und zu pflegen und kann mit Wasser und Seife gewaschen oder mit einem feuchten Tuch abgewischt werden. Sie sollte vor Gebrauch gründlich trocknen, um ein Verziehen oder Reißen zu vermeiden.  Eine kleine runde Holzschale ist ein vielseitiges und funktionales Geschirr- oder Dekorations-Element, das jeder Umgebung einen Hauch von natürlicher Wärme und Charakter verleiht. Die Schlichtheit und Haltbarkeit machen sie zur perfekten Ergänzung in vielen Küchen und Esszimmern.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('small-wooden-bowl')
        ['en-GB']('small-wooden-bowl')
        ['de-DE']('kleine-holzschale')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(smallWoodenBowlProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.smallWoodenBowl01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(bowlsDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
      KeyReferenceDraft.presets.category().key(servingPlattersDraft.key!),
      KeyReferenceDraft.presets.category().key(servewareDraft.key!),
      KeyReferenceDraft.presets.category().key(dinnerwareDraft.key!),
    ]);

export default smallWoodenBowl;
