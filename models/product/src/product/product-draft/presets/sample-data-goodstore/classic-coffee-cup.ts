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

const classicCoffeeCupProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .barAndGlassware()
  .build<TCategoryDraft>();

const glasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .glassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const classicCoffeeCup = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('classic-coffee-cup')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Classic Coffee Cup')
        ['en-GB']('Classic Coffee Cup')
        ['de-DE']('Klassische Kaffeetasse')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'The Classic Coffee Cup is a classic drinking vessel that can be used to serve coffee in formal settings. The cup is made of ceramic or porcelain and has a cylindrical shape with a handle on one side. It may be plain in design and has a capacity of around 6 to 8 ounces.  The saucer is a small plate that is round and is designed to hold the coffee cup when it is not in use. It is made of the same material as the cup. The saucer has a rim or edge that is slightly raised to help prevent spills.  When serving coffee in a cup with a saucer, it is common to also provide a small spoon for stirring the coffee and adding sugar or cream. Overall, a coffee cup with a saucer is a classic and elegant way to enjoy a cup of coffee, and is often associated with sophistication and refinement.'
        )
        ['en-US'](
          'The Classic Coffee Cup is a classic drinking vessel that can be used to serve coffee in formal settings. The cup is made of ceramic or porcelain and has a cylindrical shape with a handle on one side. It may be plain in design and has a capacity of around 6 to 8 ounces.  The saucer is a small plate that is round and is designed to hold the coffee cup when it is not in use. It is made of the same material as the cup. The saucer has a rim or edge that is slightly raised to help prevent spills.  When serving coffee in a cup with a saucer, it is common to also provide a small spoon for stirring the coffee and adding sugar or cream. Overall, a coffee cup with a saucer is a classic and elegant way to enjoy a cup of coffee, and is often associated with sophistication and refinement.'
        )
        ['de-DE'](
          'Die Classic Coffee Cup ist ein klassisches Trinkgefäß, das zum Servieren von Kaffee in formellen Umgebungen verwendet werden kann. Die Tasse besteht aus Keramik oder Porzellan und hat eine zylindrische Form mit einem Henkel an einer Seite. Es kann schlicht im Design sein und hat eine Kapazität von etwa 6 bis 8 Unzen.  Die Untertasse ist ein kleiner Teller, der rund ist und dazu dient, die Kaffeetasse zu halten, wenn sie nicht verwendet wird. Es besteht aus dem gleichen Material wie die Tasse. Die Untertasse hat einen Rand oder Rand, der leicht erhöht ist, um ein Verschütten zu verhindern.  Beim Servieren von Kaffee in einer Tasse mit Untertasse ist es üblich, auch einen kleinen Löffel zum Umrühren des Kaffees und zum Hinzufügen von Zucker oder Sahne bereitzustellen. Insgesamt ist eine Kaffeetasse mit Untertasse eine klassische und elegante Art, eine Tasse Kaffee zu genießen, und wird oft mit Raffinesse und Raffinesse in Verbindung gebracht.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('classic-coffee-cup')
        ['en-GB']('classic-coffee-cup')
        ['de-DE']('klassische-kaffeetasse')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(classicCoffeeCupProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.classicCoffeeCup01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(glasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
    ]);

export default classicCoffeeCup;
