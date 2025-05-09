import { TBuilder } from '../../../../../../core';
import {
  CategoryDraft,
  TCategoryDraft,
} from '../../../../../category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '../../../../../commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '../../../../../product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '../../../../../tax-category';
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const walnutCounterStoolProductTypeDraft =
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

const storageTablesDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .dressers()
  .build<TCategoryDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bedroomFurniture()
  .build<TCategoryDraft>();

const walnutCounterStool = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('walnut-counter-stool')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Walnut Counter Stool')
        ['en-GB']('Walnut Counter Stool')
        ['de-DE']('Barhocker aus Nussbaumholz')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-US'
        ]('The walnut stool is made from walnut wood, which is known for its durability and strength. The stool is a simple design, with a flat top surface and four straight legs. The legs are slightly tapered for added visual interest. The walnut wood may be left in its natural state or finished with a stain or varnish to bring out the natural beauty of the wood grain. The stool has a square top. Overall, a walnut stool is a versatile and functional piece of furniture that can be used in a variety of settings.')
        [
          'de-DE'
        ]('Der Barhocker ist aus Nussbaumholz gefertigt, das für seine Langlebigkeit und Stärke bekannt ist. Der Hocker hat ein schlichtes Design mit einer flachen Oberfläche und vier geraden Beinen. Die Beine sind für zusätzliches visuelles Interesse leicht konisch zulaufend designt. Das Nussbaumholz kann in seinem natürlichen Zustand belassen oder mit einer Beize oder einem Lack veredelt werden, um die natürliche Schönheit der Holzmaserung hervorzuheben. Der Hocker hat eine quadratische Sitzfläche. Der Barocker aus Nussbaumholz ist ein vielseitiges und funktionelles Möbelstück, das in einer Vielzahl von Wohnräumen verwendet werden kann.')
        [
          'en-GB'
        ]('The walnut stool is made from walnut wood, which is known for its durability and strength. The stool is a simple design, with a flat top surface and four straight legs. The legs are slightly tapered for added visual interest. The walnut wood may be left in its natural state or finished with a stain or varnish to bring out the natural beauty of the wood grain. The stool has a square top. Overall, a walnut stool is a versatile and functional piece of furniture that can be used in a variety of settings.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('walnut-counter-stool')
        ['en-GB']('walnut-counter-stool')
        ['de-DE']('barhocker-aus-walnussholz')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(walnutCounterStoolProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.walnutCounterStool01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(tablesDraft.key!),
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(storageTablesDraft.key!),
      KeyReferenceDraft.presets.category().key(bedroomFurnitureDraft.key!),
    ]);

export default walnutCounterStool;
