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

const walnutCabinetProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedroomFurniture()
  .build<TCategoryDraft>();

const storageTablesDraft = CategoryDraft.presets.sampleDataGoodStore
  .dressers()
  .build<TCategoryDraft>();

const walnutCabinet = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('walnut-cabinet')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Walnut Cabinet')
        ['en-GB']('Walnut Cabinet')
        ['de-DE']('Sideboard aus Nussbaumholz')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US'](
          'This Walnut Cabinet has many drawers, which are arranged in rows, with several drawers per row. The drawers are large and deep, allowing for ample storage space. The drawers may have simple handles.  The top of the sideboard is flat and smooth, and can be used to display decorative items such as vases or candles.   Overall, a large sideboard with many drawers is a functional and practical piece of furniture that can add style and storage to any room.'
        )
        ['de-DE'](
          'Dieser Nussbaumschrank besticht durch seine Vielzahl an Schubladen, die in Reihen angeordnet sind, mit mehreren Schubladen pro Reihe. Die Schubladen sind groß und tief und bieten viel Stauraum. Die Schubladen sind mit einfachen Griffen zu haben.  Die Oberseite des Sideboards ist flach und glatt und kann zur Präsentation von Dekorationsartikeln wie Vasen oder Kerzen verwendet werden.  Das geräumige Sideboard mit vielen Schubladen ist ein funktionales und praktisches Möbelstück, das jedem Raum Stil und Stauraum verleiht.'
        )
        ['en-GB'](
          'This Walnut Cabinet has many drawers, which are arranged in rows, with several drawers per row. The drawers are large and deep, allowing for ample storage space. The drawers may have simple handles.  The top of the sideboard is flat and smooth, and can be used to display decorative items such as vases or candles.   Overall, a large sideboard with many drawers is a functional and practical piece of furniture that can add style and storage to any room.'
        )
    )
    .slug(
      LocalizedString.presets
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
      ProductVariantDraft.presets.sampleDataGoodStore.walnutCabinet01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(storageTablesDraft.key!),
    ]);

export default walnutCabinet;
