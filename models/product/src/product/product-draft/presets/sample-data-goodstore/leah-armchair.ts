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

const leahArmchairProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataGoodStore
  .armchairs()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const leahArmchair = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('leah-armchair')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Leah Armchair')
        ['en-GB']('Leah Armchair')
        ['de-DE']('Leah Sessel')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'A tufted armchair with brass legs is an elegant and luxurious piece of furniture. The chair typically features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the brass legs add a touch of glamour and sophistication. The legs give the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.'
        )
        ['en-US'](
          'A tufted armchair with brass legs is an elegant and luxurious piece of furniture. The chair typically features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the brass legs add a touch of glamour and sophistication. The legs give the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.'
        )
        ['de-DE'](
          'Ein getufteter Sessel mit Messingbeinen ist ein elegantes und luxuriöses Möbelstück. Der Stuhl verfügt typischerweise über einen tiefen Sitz und eine hohe Rückenlehne, die beide gepolstert und mit weichem und plüschigem Material bezogen sind. Das getuftete Design sorgt für einen raffinierten und zeitlosen Look, während die Messingbeine einen Hauch von Glamour und Raffinesse verleihen. Die Beine verleihen dem Stuhl ein elegantes und modernes Aussehen. Die Armlehnen sind gebogen und weich und bieten sowohl Komfort als auch Unterstützung für die Arme. Insgesamt ist ein getufteter Sessel mit Messingbeinen eine stilvolle und bequeme Ergänzung für jeden Wohn- oder Loungebereich.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('leah-armchair')
        ['en-GB']('leah-armchair')
        ['de-DE']('leah-sessel')
    )
    .productType(
      KeyReference.presets.productType().key(leahArmchairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.leahArmchair01()
    )
    .categories([
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(armchairsDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default leahArmchair;
