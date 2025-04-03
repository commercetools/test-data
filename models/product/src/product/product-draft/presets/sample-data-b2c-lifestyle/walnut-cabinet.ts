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
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const walnutCabinetProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bedroomFurniture()
  .build<TCategoryDraft>();

const storageTablesDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .dressers()
  .build<TCategoryDraft>();

const walnutCabinet = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('walnut-cabinet')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Walnut Cabinet')
        ['en-GB']('Walnut Cabinet')
        ['de-DE']('Sideboard aus Nussbaumholz')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-US'
        ]('This Walnut Cabinet has many drawers, which are arranged in rows, with several drawers per row. The drawers are large and deep, allowing for ample storage space. The drawers may have simple handles.  The top of the sideboard is flat and smooth, and can be used to display decorative items such as vases or candles.   Overall, a large sideboard with many drawers is a functional and practical piece of furniture that can add style and storage to any room.')
        [
          'de-DE'
        ]('Dieser Nussbaumschrank besticht durch seine Vielzahl an Schubladen, die in Reihen angeordnet sind, mit mehreren Schubladen pro Reihe. Die Schubladen sind groß und tief und bieten viel Stauraum. Die Schubladen sind mit einfachen Griffen zu haben.  Die Oberseite des Sideboards ist flach und glatt und kann zur Präsentation von Dekorationsartikeln wie Vasen oder Kerzen verwendet werden.  Das geräumige Sideboard mit vielen Schubladen ist ein funktionales und praktisches Möbelstück, das jedem Raum Stil und Stauraum verleiht.')
        [
          'en-GB'
        ]('This Walnut Cabinet has many drawers, which are arranged in rows, with several drawers per row. The drawers are large and deep, allowing for ample storage space. The drawers may have simple handles.  The top of the sideboard is flat and smooth, and can be used to display decorative items such as vases or candles.   Overall, a large sideboard with many drawers is a functional and practical piece of furniture that can add style and storage to any room.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('walnut-cabinet')
        ['en-GB']('walnut-cabinet')
        ['de-DE']('nussbaum-schrank')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(walnutCabinetProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.walnutCabinet01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(storageTablesDraft.key!),
    ]);

export default walnutCabinet;
