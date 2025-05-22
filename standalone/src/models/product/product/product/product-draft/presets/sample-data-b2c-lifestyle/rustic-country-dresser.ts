import { TBuilder } from '@/core';
import { CategoryDraft, TCategoryDraft } from '@/models/category';
import { KeyReferenceDraft, LocalizedStringDraft } from '@/models/commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@/models/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@/models/tax-category';
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import { ProductDraft } from '../..';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const rusticCountryDresserProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bedroomFurniture()
  .build<TCategoryDraft>();

const storageTablesDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .dressers()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const rusticCountryDresser = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('rustic-country-dresser')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Rustic Country Dresser')
        ['en-GB']('Rustic Country Dresser')
        ['de-DE']('Rustikale Landhauskommode')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A rustic country dresser with ample storage is a charming and practical piece of furniture that can add warmth and character to any bedroom or living space. The dresser features a sturdy wooden frame and a vintage look that is both rustic and inviting.  The dresser is equipped with a range of drawers in various sizes, providing ample storage space for clothing, linens, and other items. The drawers are constructed with dovetail joints and gliding hardware, ensuring that they are durable and easy to use. The drawer fronts are adorned with rustic metal pulls, adding to the charm and character of the piece.  The top of the dresser provides additional storage space, allowing you to display decorative items, such as vases, candles, or picture frames.   Overall, a rustic country dresser with ample storage is a practical and stylish piece of furniture that can add warmth and character to any bedroom or living space. Its sturdy construction, ample storage space, and charming design make it a functional and beautiful addition to any home with a rustic or country decor style.')
        [
          'en-US'
        ]('A rustic country dresser with ample storage is a charming and practical piece of furniture that can add warmth and character to any bedroom or living space. The dresser features a sturdy wooden frame and a vintage look that is both rustic and inviting.  The dresser is equipped with a range of drawers in various sizes, providing ample storage space for clothing, linens, and other items. The drawers are constructed with dovetail joints and gliding hardware, ensuring that they are durable and easy to use. The drawer fronts are adorned with rustic metal pulls, adding to the charm and character of the piece.  The top of the dresser provides additional storage space, allowing you to display decorative items, such as vases, candles, or picture frames.   Overall, a rustic country dresser with ample storage is a practical and stylish piece of furniture that can add warmth and character to any bedroom or living space. Its sturdy construction, ample storage space, and charming design make it a functional and beautiful addition to any home with a rustic or country decor style.')
        [
          'de-DE'
        ]('Die rustikale Landhauskommode mit viel Stauraum ist ein charmantes und praktisches Möbelstück, das jedem Schlafzimmer oder Wohnzimmer Wärme und Charakter verleiht. Die stabile Kommode mit Holzrahmen ist im Vintage-Look gehalten und wirkt sowohl rustikal als auch einladend.  Die Kommode ist mit einer Reihe von Schubladen in verschiedenen Größen ausgestattet, die ausreichend Stauraum für Kleidung, Bettwäsche und andere Gegenstände bieten. Die Schubladen sind mit Schwalbenschwanzverbindungen und Gleitbeschlägen konstruiert, um sicherzustellen, dass sie langlebig und einfach zu bedienen sind. Die Schubladenfronten sind mit rustikalen Metallgriffen geschmückt, die den Charme und Charakter des Möbelstücks noch verstärken. Die Platte der Kommode bietet zusätzlichen Stauraum für dekorative Gegenstände wie Vasen, Kerzen oder Bilderrahmen.  Eine rustikale Landhauskommode schafft auf praktische und stilvolle Weise Stauraum für und verleiht jedem Schlaf- oder Wohnraum gleichzeitig Wärme und Charme. Die robuste Konstruktion und das schlichte Design machen sie zu einer funktionalen und schönen Ergänzung für jedes Zuhause mit rustikalem oder ländlichem Einrichtungsstil.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('rustic-country-dresser')
        ['en-GB']('rustic-country-dresser')
        ['de-DE']('rustikale-landhauskommode')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(rusticCountryDresserProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.rusticCountryDresser01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(storageTablesDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
    ]);

export default rusticCountryDresser;
