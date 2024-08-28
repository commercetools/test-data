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

const modernGoldCoffeeTableProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const tablesDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .tables()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .collections()
  .build<TCategoryDraft>();

const theModernistDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .theModernist()
  .build<TCategoryDraft>();

const modernGoldCoffeeTable = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('modern-gold-coffee-table')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Modern Gold Coffee Table')
        ['de-DE']('Moderner Gold Couchtisch')
        ['en-US']('Modern Gold Coffee Table')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A modern gold coffee table with 2 tiers of quartz table tops is a stunning and stylish piece of furniture that can elevate the look of any living room or sitting area. The table is characterized by a sleek and streamlined design, with clean lines and minimalistic details.  The coffee table features a sturdy metal frame that is finished in a luxurious gold color, providing a touch of sophistication and glamour. The frame is designed to support two tiers of table tops, both made of high-quality quartz material. The quartz table tops are cut in a rectangular shape, with a smooth and glossy surface that adds a touch of elegance to the table.  The two tiers of table tops provide ample storage and display space, allowing you to showcase decorative items such as books, candles, or vases, while still providing plenty of room for drinks and snacks. The two-tier design also adds visual interest and dimension to the table, creating a unique and eye-catching look.  The modern gold coffee table is a versatile piece of furniture that can complement a range of interior design styles, from contemporary and minimalist to more traditional and eclectic. It can be paired with a variety of seating options, from sofas and chairs to benches and stools, to create a cohesive and stylish living space.  Overall, a modern gold coffee table is a chic and elegant piece of furniture that can add a touch of luxury and sophistication to any living room or sitting area. Its sleek design, high-quality materials, and practical features make it a functional and stylish choice for any home.')
        [
          'de-DE'
        ]('Der moderne goldene Couchtisch mit 2 Ebenen aus Quarzplatten ist ein atemberaubendes und stilvolles Möbelstück, das jedes Wohnzimmer oder jeden Sitzbereich aufwerten kann. Der Tisch zeichnet sich durch ein schlankes und stromlinienförmiges Design aus, mit klaren Linien und minimalistischen Details.  Der Couchtisch verfügt über ein robustes Metallgestell, das in einer luxuriösen Goldfarbe ausgeführt ist und einen Hauch von Raffinesse und Glamour vermittelt. Das Gestell ist so konzipiert, dass es zwei Ebenen von Tischplatten trägt, die beide aus hochwertigem Quarzmaterial bestehen. Die Quarz-Tischplatten sind rechteckig geschnitten und haben eine glatte und glänzende Oberfläche, die dem Tisch einen Hauch von Eleganz verleiht. Die zwei Ebenen der Tischplatten bieten reichlich Ablage- und Ausstellungsfläche, so dass Sie dekorative Gegenstände wie Bücher, Kerzen oder Vasen präsentieren können, während Sie gleichzeitig genügend Platz für Getränke und Snacks haben. Das zweistufige Design verleiht dem Tisch auch visuelles Interesse und Dimensionen und schafft einen einzigartigen und auffälligen Look. Der moderne Couchtisch in Gold ist ein vielseitiges Möbelstück, das zu einer Reihe von Einrichtungsstilen passt, von modern und minimalistisch bis hin zu traditionell und eklektisch. Er kann mit einer Vielzahl von Sitzgelegenheiten kombiniert werden, von Sofas und Stühlen bis hin zu Bänken und Hockern, um einen zusammenhängenden und stilvollen Wohnbereich zu schaffen. Insgesamt ist ein moderner goldener Couchtisch ein schickes und elegantes Möbelstück, das jedem Wohnzimmer oder jeder Sitzecke einen Hauch von Luxus und Raffinesse verleihen kann. Sein schlankes Design, die hochwertigen Materialien und die praktischen Funktionen machen ihn zu einer funktionalen und stilvollen Wahl für jedes Zuhause.')
        [
          'en-US'
        ]('A modern gold coffee table with 2 tiers of quartz table tops is a stunning and stylish piece of furniture that can elevate the look of any living room or sitting area. The table is characterized by a sleek and streamlined design, with clean lines and minimalistic details.  The coffee table features a sturdy metal frame that is finished in a luxurious gold color, providing a touch of sophistication and glamour. The frame is designed to support two tiers of table tops, both made of high-quality quartz material. The quartz table tops are cut in a rectangular shape, with a smooth and glossy surface that adds a touch of elegance to the table.  The two tiers of table tops provide ample storage and display space, allowing you to showcase decorative items such as books, candles, or vases, while still providing plenty of room for drinks and snacks. The two-tier design also adds visual interest and dimension to the table, creating a unique and eye-catching look.  The modern gold coffee table is a versatile piece of furniture that can complement a range of interior design styles, from contemporary and minimalist to more traditional and eclectic. It can be paired with a variety of seating options, from sofas and chairs to benches and stools, to create a cohesive and stylish living space.  Overall, a modern gold coffee table is a chic and elegant piece of furniture that can add a touch of luxury and sophistication to any living room or sitting area. Its sleek design, high-quality materials, and practical features make it a functional and stylish choice for any home.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('modern-gold-coffee-table')
        ['de-DE']('moderner-couchtisch-in-gold')
        ['en-US']('modern-gold-coffee-table')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(modernGoldCoffeeTableProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.modernGoldCoffeeTable01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(tablesDraft.key!),
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(collectionsDraft.key!),
      KeyReferenceDraft.presets.category().key(theModernistDraft.key!),
    ]);

export default modernGoldCoffeeTable;
