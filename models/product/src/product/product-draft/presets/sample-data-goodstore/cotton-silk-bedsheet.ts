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

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const cottonSilkBedsheetProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedding()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeDecor()
  .build<TCategoryDraft>();

const cottonSilkBedsheet = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('cotton-silk-bedsheet')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Cotton Silk Bedsheet')
        ['en-GB']('Cotton Silk Bedsheet')
        ['de-DE']('Bettwäsche aus Baumwollseide')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'Cotton silk bed sheets are made from a blend of cotton and silk fibers. Cotton is known for its durability, breathability, and ease of care. Silk, on the other hand, is renowned for its smoothness, lustrous sheen, and luxurious feel. By combining the two, we offer a product that balances durability, breathability, and luxury.  Cotton silk bed sheets often have a subtle sheen from the silk, making them look more luxurious. '
        )
        ['en-US'](
          'Cotton silk bed sheets are made from a blend of cotton and silk fibers. Cotton is known for its durability, breathability, and ease of care. Silk, on the other hand, is renowned for its smoothness, lustrous sheen, and luxurious feel. By combining the two, we offer a product that balances durability, breathability, and luxury.  Cotton silk bed sheets often have a subtle sheen from the silk, making them look more luxurious. '
        )
        ['de-DE'](
          'Diese Bettwäsche aus Baumwollseide besteht aus einer Mischung aus Baumwoll- und Seidenfasern. Baumwolle ist für ihre Strapazierfähigkeit, Atmungsaktivität und Pflegeleichtigkeit bekannt. Seide hingegen ist bekannt für ihre Geschmeidigkeit, ihren strahlenden Glanz und ihr luxuriöses Gefühl. Durch die Kombination beider Fasersorten bieten wir ein Produkt an, das Haltbarkeit, Atmungsaktivität und Luxus in Einklang bringt. '
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('cotton-silk-bedsheet')
        ['de-DE']('bettwsche-aus-baumwollseide')
        ['en-US']('cotton-silk-bedsheet')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(cottonSilkBedsheetProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.cottonSilkBedsheet01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodStore.cottonSilkBedsheet02(),
      ProductVariantDraft.presets.sampleDataGoodStore.cottonSilkBedsheet03(),
      ProductVariantDraft.presets.sampleDataGoodStore.cottonSilkBedsheet04(),
      ProductVariantDraft.presets.sampleDataGoodStore.cottonSilkBedsheet05(),
      ProductVariantDraft.presets.sampleDataGoodStore.cottonSilkBedsheet06(),
      ProductVariantDraft.presets.sampleDataGoodStore.cottonSilkBedsheet07(),
      ProductVariantDraft.presets.sampleDataGoodStore.cottonSilkBedsheet08(),
      ProductVariantDraft.presets.sampleDataGoodStore.cottonSilkBedsheet09(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(beddingDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default cottonSilkBedsheet;
