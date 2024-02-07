import {
  CategoryDraft,
  TCategoryDraft,
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

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const rusticCountryQueenBedProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedroomFurniture()
  .build<TCategoryDraft>();

const bedsDraft = CategoryDraft.presets.sampleDataGoodStore
  .beds()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataGoodStore
  .newArrivals()
  .build<TCategoryDraft>();

const rusticCountryQueenBed = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('rustic-country-queen-bed')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Rustic Country Queen Bed')
        ['en-GB']('Rustic Country Queen Bed')
        ['de-DE']('Rustikales Queensize-Bett im Landhausstil')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB'](
          "A rustic queen bed with a suede headboard is a beautiful and comfortable piece of furniture that can add warmth and texture to any bedroom. The bed features a sturdy wooden frame and a vintage look that is both rustic and inviting.  The headboard of the bed is upholstered in soft suede fabric, providing a comfortable and stylish backrest for reading or relaxing in bed. The suede material also adds a tactile and luxurious feel to the bed, creating a cozy and inviting atmosphere in the bedroom.  The bed comes with a sturdy wooden slat system that provides excellent support for the mattress and ensures a comfortable and restful night's sleep.  The rustic queen bed with a suede headboard is designed to be both functional and stylish. The bed comes with a matching dresser to create a cohesive and stylish bedroom decor.  Overall, a rustic queen bed with a suede headboard is a beautiful and comfortable piece of furniture that can add warmth and texture to any bedroom. Its sturdy construction, comfortable design, and charming rustic style make it a functional and beautiful addition to any home with a rustic or country decor style."
        )
        ['en-US'](
          "A rustic queen bed with a suede headboard is a beautiful and comfortable piece of furniture that can add warmth and texture to any bedroom. The bed features a sturdy wooden frame and a vintage look that is both rustic and inviting.  The headboard of the bed is upholstered in soft suede fabric, providing a comfortable and stylish backrest for reading or relaxing in bed. The suede material also adds a tactile and luxurious feel to the bed, creating a cozy and inviting atmosphere in the bedroom.  The bed comes with a sturdy wooden slat system that provides excellent support for the mattress and ensures a comfortable and restful night's sleep.  The rustic queen bed with a suede headboard is designed to be both functional and stylish. The bed comes with a matching dresser to create a cohesive and stylish bedroom decor.  Overall, a rustic queen bed with a suede headboard is a beautiful and comfortable piece of furniture that can add warmth and texture to any bedroom. Its sturdy construction, comfortable design, and charming rustic style make it a functional and beautiful addition to any home with a rustic or country decor style."
        )
        ['de-DE'](
          'Das rustikale Queensize-Bett mit dem Kopfteil aus Wildleder ist ein schönes und komfortables Möbelstück, das jedem Schlafzimmer Wärme und Struktur verleiht. Das Bett hat einen stabilen Holzrahmen im Vintage-Look, der zum Relaxen einlädt.  Das Kopfteil des Bettes ist mit weichem Wildleder bezogen und bietet eine bequeme und stilvolle Rückenlehne zum Lesen oder Entspannen im Bett. Das Wildledermaterial verleiht dem Bett luxuriöses Gefühl zum Anfassen und schafft eine gemütliche und einladende Atmosphäre im Schlafzimmer.  Der stabile Holzlattenrost des Betts bietet eine solide Grundlage für die Matratze und somit für einen komfortablen und erholsamen Schlaf.  Das rustikale Queensize-Bett mit Kopfteil aus Wildleder ist sowohl funktional als auch stilvoll designt. Zu dem Bett gibt es eine passende Kommode, mit der ein zusammenhängendes und stilvolles Schlafzimmerdekor geschaffen werden kann.  Ein rustikales Queensize-Bett mit einem Kopfteil aus Wildleder ist ein schönes und komfortables Möbelstück, das Wärme und Textur in jedes Schlafzimmer bringt. Seine robuste Konstruktion, sein komfortables Design und der charmant-rustikale Charakter machen es zu einer funktionalen und schönen Ergänzung für jedes Zuhause im angesagten Landhausstil.'
        )
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('rustic-country-queen-bed')
        ['en-GB']('rustic-country-queen-bed')
        ['de-DE']('rustikales-country-queen-bett')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(rusticCountryQueenBedProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.rusticCountryQueenBed01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(bedsDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(newArrivalsDraft.key!),
    ]);

export default rusticCountryQueenBed;
