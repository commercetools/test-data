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
import * as ProductDraft from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const orionDoubleBedProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bedroomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .furniture()
  .build<TCategoryDraft>();

const bedsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .beds()
  .build<TCategoryDraft>();

const orionDoubleBed = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('orion-double-bed')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Orion Double Bed')
        ['de-DE']('Orion Doppelbett')
        ['en-US']('Orion Double Bed')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A queen bed with a tufted headboard and platform and steel legs is a modern and stylish piece of furniture. The headboard is tall and wide, featuring a tufted design. The fabric used for the headboard is soft and luxurious, providing a comfortable place to lean against when sitting up in bed.  The bed is raised off the ground on a platform, which is supported by sleek and sturdy steel legs. The platform provides a solid and stable foundation for the mattress, while also giving the bed a clean and minimalist look.   Overall, this queen bed is a beautiful and functional piece that would be perfect for a modern bedroom with a minimalist or industrial aesthetic.')
        [
          'de-DE'
        ]('Ein Queensize-Bett mit getuftetem Kopfteil und Podest und Stahlfüßen ist ein modernes und stilvolles Möbelstück. Das Kopfteil ist hoch und breit und verfügt über ein getuftetes Design. Der für das Kopfteil verwendete Stoff ist weich und luxuriös und bietet einen bequemen Platz zum Anlehnen, wenn man sich im Bett aufrichtet. Das Bett steht auf einem Podest, das von schlanken und stabilen Stahlbeinen getragen wird. Das Podest bietet eine solide und stabile Grundlage für die Matratze und verleiht dem Bett gleichzeitig einen klaren und minimalistischen Look. Insgesamt ist dieses Bett ein schönes und funktionales Möbelstück, das sich perfekt für ein modernes Schlafzimmer mit minimalistischer oder industrieller Ästhetik eignet.')
        [
          'en-US'
        ]('A queen bed with a tufted headboard and platform and steel legs is a modern and stylish piece of furniture. The headboard is tall and wide, featuring a tufted design. The fabric used for the headboard is soft and luxurious, providing a comfortable place to lean against when sitting up in bed.  The bed is raised off the ground on a platform, which is supported by sleek and sturdy steel legs. The platform provides a solid and stable foundation for the mattress, while also giving the bed a clean and minimalist look.   Overall, this queen bed is a beautiful and functional piece that would be perfect for a modern bedroom with a minimalist or industrial aesthetic.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('orion-double-bed')
        ['de-DE']('orion-doppelbett')
        ['en-US']('orion-double-bed')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(orionDoubleBedProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.orionDoubleBed01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(furnitureDraft.key!),
      KeyReferenceDraft.presets.category().key(bedsDraft.key!),
    ]);

export default orionDoubleBed;
