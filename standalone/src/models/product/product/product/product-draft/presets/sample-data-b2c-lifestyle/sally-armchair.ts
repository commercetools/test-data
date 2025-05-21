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

const sallyArmchairProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .armchairs()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const sallyArmchair = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('sally-armchair')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Sally Armchair')
        ['en-GB']('Sally Armchair')
        ['de-DE']('Sessel >Sally<')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A tufted armchair with wooden legs is an elegant and comfortable piece of furniture. The chair features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the wooden legs adding a touch of softness and warmth. The legs are thin and tapered, giving the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.')
        [
          'en-US'
        ]('A tufted armchair with wooden legs is an elegant and comfortable piece of furniture. The chair features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the wooden legs adding a touch of softness and warmth. The legs are thin and tapered, giving the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.')
        [
          'de-DE'
        ]('Dieser getuftete Sessel mit Holzbeinen ist ein elegantes und bequemes Sitzmöbel. Der Lounge-Sessel verfügt über eine tiefe gepolsterte Sitzfläche mit hoher Rückenlehne, die beide mit weichem Plüschmaterial bezogen sind. Das getuftete Design sorgt für einen raffinierten und dennoch zeitlosen Look, der von der Wärme der abgerundet wird. Die Beine des Lounge-Möbels sind schmal und verjüngt, was dem Stuhl ein leichtes und modernes Aussehen verleiht. Die Armlehnen sind gebogen und weich und bieten sowohl Komfort als auch Halt für die Arme. Ein getufteter Sessel mit Holzbeinen ist eine stilvolle und bequeme Ergänzung für jeden Wohn- oder Lounge-Bereich.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('sally-armchair')
        ['en-GB']('sally-armchair')
        ['de-DE']('sally-sessel')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(sallyArmchairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.sallyArmchair01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(armchairsDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default sallyArmchair;
