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
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const leatherCoasterProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const barAccessoriesDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .barAccessories()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .barAndGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .kitchen()
  .build<TCategoryDraft>();

const leatherCoaster = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('leather-coaster')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Leather Coaster')
        ['en-GB']('Leather Coaster')
        ['de-DE']('Leder Untersetzer')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A round leather coaster is designed to be placed underneath a drink to protect the surface beneath from moisture and heat. It measures around 4 inches in diameter and is made of high-quality leather material. The edges of the coaster is finished with brass. The underside of the coaster features a non-slip material to prevent it from sliding on smooth surfaces.')
        [
          'en-US'
        ]('A round leather coaster is designed to be placed underneath a drink to protect the surface beneath from moisture and heat. It measures around 4 inches in diameter and is made of high-quality leather material. The edges of the coaster is finished with brass. The underside of the coaster features a non-slip material to prevent it from sliding on smooth surfaces.')
        [
          'de-DE'
        ]('Ein runder Lederuntersetzer ist so konzipiert, dass er unter einem Getränk platziert werden kann, um die darunter liegende Oberfläche vor Feuchtigkeit und Hitze zu schützen. Es misst etwa 4 Zoll im Durchmesser und besteht aus hochwertigem Ledermaterial. Die Kanten des Untersetzers sind mit Messing veredelt. Die Unterseite des Untersetzers ist mit einem rutschfesten Material versehen, um ein Verrutschen auf glatten Oberflächen zu verhindern.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('leather-coaster')
        ['en-GB']('leather-coaster')
        ['de-DE']('untersetzer-aus-leder')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(leatherCoasterProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.leatherCoaster01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(barAccessoriesDraft.key!),
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
    ]);

export default leatherCoaster;
