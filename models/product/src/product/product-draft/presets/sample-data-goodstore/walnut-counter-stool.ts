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

const walnutCounterStoolProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const tablesDraft = CategoryDraft.presets.sampleDataGoodStore
  .tables()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const storageTablesDraft = CategoryDraft.presets.sampleDataGoodStore
  .dressers()
  .build<TCategoryDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedroomFurniture()
  .build<TCategoryDraft>();

const walnutCounterStool = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('walnut-counter-stool')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Walnut Counter Stool')
        ['en-GB']('Walnut Counter Stool')
        ['de-DE']('Barhocker aus Nussbaumholz')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-US'](
          'The walnut stool is made from walnut wood, which is known for its durability and strength. The stool is a simple design, with a flat top surface and four straight legs. The legs are slightly tapered for added visual interest. The walnut wood may be left in its natural state or finished with a stain or varnish to bring out the natural beauty of the wood grain. The stool has a square top. Overall, a walnut stool is a versatile and functional piece of furniture that can be used in a variety of settings.'
        )
        ['de-DE'](
          'Der Barhocker ist aus Nussbaumholz gefertigt, das für seine Langlebigkeit und Stärke bekannt ist. Der Hocker hat ein schlichtes Design mit einer flachen Oberfläche und vier geraden Beinen. Die Beine sind für zusätzliches visuelles Interesse leicht konisch zulaufend designt. Das Nussbaumholz kann in seinem natürlichen Zustand belassen oder mit einer Beize oder einem Lack veredelt werden, um die natürliche Schönheit der Holzmaserung hervorzuheben. Der Hocker hat eine quadratische Sitzfläche. Der Barocker aus Nussbaumholz ist ein vielseitiges und funktionelles Möbelstück, das in einer Vielzahl von Wohnräumen verwendet werden kann.'
        )
        ['en-GB'](
          'The walnut stool is made from walnut wood, which is known for its durability and strength. The stool is a simple design, with a flat top surface and four straight legs. The legs are slightly tapered for added visual interest. The walnut wood may be left in its natural state or finished with a stain or varnish to bring out the natural beauty of the wood grain. The stool has a square top. Overall, a walnut stool is a versatile and functional piece of furniture that can be used in a variety of settings.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('walnut-counter-stool')
        ['en-GB']('walnut-counter-stool')
        ['de-DE']('barhocker-aus-walnussholz')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(walnutCounterStoolProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.walnutCounterStool01()
    )
    .categories([
      KeyReference.presets.category().key(tablesDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(storageTablesDraft.key!),
      KeyReference.presets.category().key(bedroomFurnitureDraft.key!),
    ]);

export default walnutCounterStool;