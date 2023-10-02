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

const travelCoffeeMugProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const glasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .glassware()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .barAndGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const travelCoffeeMug = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('travel-coffee-mug')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Travel Coffee Mug')
        ['en-GB']('Travel Coffee Mug')
        ['de-DE']('Reise-Kaffeetasse')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US'](
          'The Travel Coffee Mug is designed for use on the go. The mug has a capacity of around 12 to 20 ounces, and is designed to keep beverages hot or cold for an extended period of time. This is achieved through the use of insulation, which helps to maintain the temperature of the drink inside the mug.  The Travel Coffee Mug has a variety of features, including a spill-proof lid that can be securely fastened to prevent leaks or spills and a handle or grip that makes it easy to hold, even while walking or driving.  This travel coffee mug is designed to fit into standard cup holders in cars.  Overall, this travel coffee mug is a practical and convenient type of drinking vessel that is ideal for anyone who enjoys a hot or cold beverage while on the go. Its durable construction and insulated design make it a popular choice for commuters, travelers, and outdoor enthusiasts alike.'
        )
        ['de-DE'](
          'Diese praktische Reisetasse ist für unterwegs konzipiert. Der Becher hat ein Fassungsvermögen von etwa 12 bis 20 Unzen und ist so konzipiert, dass er Getränke über einen längeren Zeitraum heiß oder kalt hält. Dies wird durch die Verwendung einer Isolierschicht erreicht, die dazu beiträgt, die Temperatur des Getränks im Inneren des Bechers aufrechtzuerhalten.  Die Reisetasse hat eine Vielzahl von Funktionen, darunter einen auslaufsicheren Deckel, der sicher befestigt werden kann, um ein Auslaufen oder Verschütten zu verhindern, und einen Henkel, der das Halten auch beim Gehen oder Fahren erleichtert.  Dieser Reisekaffeebecher ist auf den Gebrauch in Kombination mit Standard-Getränkehaltern in Autos angepasst.  Die Reisetasse ist ein praktisches Trinkgefäß und der ideale Begleiter für all diejenigen, die unterwegs auf ein heißes oder kaltes Getränk nicht verzichten möchten. Seine robuste Konstruktion und sein isoliertes Design machen sie zu einer beliebten Wahl für Pendler, Reisende und Outdoor-Enthusiasten.'
        )
        ['en-GB'](
          'The Travel Coffee Mug is designed for use on the go. The mug has a capacity of around 12 to 20 ounces, and is designed to keep beverages hot or cold for an extended period of time. This is achieved through the use of insulation, which helps to maintain the temperature of the drink inside the mug.  The Travel Coffee Mug has a variety of features, including a spill-proof lid that can be securely fastened to prevent leaks or spills and a handle or grip that makes it easy to hold, even while walking or driving.  This travel coffee mug is designed to fit into standard cup holders in cars.  Overall, this travel coffee mug is a practical and convenient type of drinking vessel that is ideal for anyone who enjoys a hot or cold beverage while on the go. Its durable construction and insulated design make it a popular choice for commuters, travelers, and outdoor enthusiasts alike.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('travel-coffee-mug')
        ['en-GB']('travel-coffee-mug')
        ['de-DE']('reise-kaffeetasse')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(travelCoffeeMugProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.travelCoffeeMug01()
    )
    .categories([
      KeyReference.presets.category().key(glasswareDraft.key!),
      KeyReference.presets.category().key(barAndGlasswareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default travelCoffeeMug;
