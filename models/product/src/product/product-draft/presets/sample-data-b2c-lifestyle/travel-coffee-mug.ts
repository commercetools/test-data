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

const travelCoffeeMugProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const glasswareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .glassware()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .barAndGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .kitchen()
  .build<TCategoryDraft>();

const travelCoffeeMug = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('travel-coffee-mug')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Travel Coffee Mug')
        ['en-GB']('Travel Coffee Mug')
        ['de-DE']('Reise-Kaffeetasse')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-US'
        ]('The Travel Coffee Mug is designed for use on the go. The mug has a capacity of around 12 to 20 ounces, and is designed to keep beverages hot or cold for an extended period of time. This is achieved through the use of insulation, which helps to maintain the temperature of the drink inside the mug.  The Travel Coffee Mug has a variety of features, including a spill-proof lid that can be securely fastened to prevent leaks or spills and a handle or grip that makes it easy to hold, even while walking or driving.  This travel coffee mug is designed to fit into standard cup holders in cars.  Overall, this travel coffee mug is a practical and convenient type of drinking vessel that is ideal for anyone who enjoys a hot or cold beverage while on the go. Its durable construction and insulated design make it a popular choice for commuters, travelers, and outdoor enthusiasts alike.')
        [
          'de-DE'
        ]('Diese praktische Reisetasse ist für unterwegs konzipiert. Der Becher hat ein Fassungsvermögen von etwa 12 bis 20 Unzen und ist so konzipiert, dass er Getränke über einen längeren Zeitraum heiß oder kalt hält. Dies wird durch die Verwendung einer Isolierschicht erreicht, die dazu beiträgt, die Temperatur des Getränks im Inneren des Bechers aufrechtzuerhalten.  Die Reisetasse hat eine Vielzahl von Funktionen, darunter einen auslaufsicheren Deckel, der sicher befestigt werden kann, um ein Auslaufen oder Verschütten zu verhindern, und einen Henkel, der das Halten auch beim Gehen oder Fahren erleichtert.  Dieser Reisekaffeebecher ist auf den Gebrauch in Kombination mit Standard-Getränkehaltern in Autos angepasst.  Die Reisetasse ist ein praktisches Trinkgefäß und der ideale Begleiter für all diejenigen, die unterwegs auf ein heißes oder kaltes Getränk nicht verzichten möchten. Seine robuste Konstruktion und sein isoliertes Design machen sie zu einer beliebten Wahl für Pendler, Reisende und Outdoor-Enthusiasten.')
        [
          'en-GB'
        ]('The Travel Coffee Mug is designed for use on the go. The mug has a capacity of around 12 to 20 ounces, and is designed to keep beverages hot or cold for an extended period of time. This is achieved through the use of insulation, which helps to maintain the temperature of the drink inside the mug.  The Travel Coffee Mug has a variety of features, including a spill-proof lid that can be securely fastened to prevent leaks or spills and a handle or grip that makes it easy to hold, even while walking or driving.  This travel coffee mug is designed to fit into standard cup holders in cars.  Overall, this travel coffee mug is a practical and convenient type of drinking vessel that is ideal for anyone who enjoys a hot or cold beverage while on the go. Its durable construction and insulated design make it a popular choice for commuters, travelers, and outdoor enthusiasts alike.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('travel-coffee-mug')
        ['en-GB']('travel-coffee-mug')
        ['de-DE']('reise-kaffeetasse')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(travelCoffeeMugProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.travelCoffeeMug01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(glasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
    ]);

export default travelCoffeeMug;
