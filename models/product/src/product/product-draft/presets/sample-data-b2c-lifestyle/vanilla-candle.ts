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
import * as ProductVariantDraft from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const vanillaCandleProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const homeAccentsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .homeAccents()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .homeDecor()
  .build<TCategoryDraft>();

const vanillaCandle = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('vanilla-candle')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Vanilla Candle')
        ['en-GB']('Vanilla Candle')
        ['de-DE']('Kerze mit Vanilleduft')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-US'
        ]('A vanilla candle is a popular and timeless choice for adding a warm and inviting atmosphere to any home. The candle is made from high-quality wax, which is infused with the rich and creamy fragrance of vanilla.  The candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.   When lit, the candle will release a soothing and comforting aroma, filling the room with the sweet and comforting scent of vanilla. The fragrance is often associated with warmth, coziness, and relaxation, making it perfect for use during a cozy night in or for creating a calming atmosphere in a bedroom or living room.  A vanilla candle is a classic and comforting choice for adding a touch of warmth and coziness to any home. Its sweet and soothing aroma can help to create a relaxed and welcoming atmosphere, making it a popular choice for use in bedrooms, living rooms, and bathrooms.')
        [
          'de-DE'
        ]('Eine Kerze mit Vanilleduft ist eine beliebte und zeitlose Wahl, um jedem Zuhause eine warme und einladende Atmosphäre zu verleihen. Die Kerze besteht aus hochwertigem Wachs, das mit dem reichhaltigem und cremigen Vanilleduft versehen ist.  Die Kerze wird in einem Glasbehälter präsentiert, der zum Schutz der Flamme beiträgt und der Kerze auch eine dekorative Note verleiht. Angezündet verströmt sie ein beruhigendes Aroma und erfüllt den Raum mit dem süßen Duft von Vanille. Der Duft wird oft mit Wärme, Gemütlichkeit und Entspannung in Verbindung gebracht und eignet sich daher perfekt für die Einstimmung auf einen gemütlichen Abend oder um eine beruhigende Atmosphäre in einem Schlaf- oder Wohnbereich zu schaffen.  Diese Kerze ist eine klassische und beruhigende Wahl, um jedem Zuhause etwas mehr Wärme und Gemütlichkeit zu verleihen. Ihr süßes und beruhigendes Aroma trägt dazu bei, eine entspannte und einladende Atmosphäre zu schaffen, was sie zu einer beliebten Wahl für den Einsatz im Schlaf- oder Wohnbereich und in Badezimmern macht.')
        [
          'en-GB'
        ]('A vanilla candle is a popular and timeless choice for adding a warm and inviting atmosphere to any home. The candle is made from high-quality wax, which is infused with the rich and creamy fragrance of vanilla.  The candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.   When lit, the candle will release a soothing and comforting aroma, filling the room with the sweet and comforting scent of vanilla. The fragrance is often associated with warmth, coziness, and relaxation, making it perfect for use during a cozy night in or for creating a calming atmosphere in a bedroom or living room.  A vanilla candle is a classic and comforting choice for adding a touch of warmth and coziness to any home. Its sweet and soothing aroma can help to create a relaxed and welcoming atmosphere, making it a popular choice for use in bedrooms, living rooms, and bathrooms.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('vanilla-candle')
        ['en-GB']('vanilla-candle')
        ['de-DE']('vanille-kerze')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(vanillaCandleProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.vanillaCandle01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(homeAccentsDraft.key!),
      KeyReferenceDraft.presets.category().key(roomDecorDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default vanillaCandle;
