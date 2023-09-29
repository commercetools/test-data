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

const orionDoubleBedProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedroomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const bedsDraft = CategoryDraft.presets.sampleDataGoodStore
  .beds()
  .build<TCategoryDraft>();

const orionDoubleBed = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('orion-double-bed')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Orion Double Bed')
        ['de-DE']('Orion Doppelbett')
        ['en-US']('Orion Double Bed')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'A queen bed with a tufted headboard and platform and steel legs is a modern and stylish piece of furniture. The headboard is tall and wide, featuring a tufted design. The fabric used for the headboard is soft and luxurious, providing a comfortable place to lean against when sitting up in bed.  The bed is raised off the ground on a platform, which is supported by sleek and sturdy steel legs. The platform provides a solid and stable foundation for the mattress, while also giving the bed a clean and minimalist look.   Overall, this queen bed is a beautiful and functional piece that would be perfect for a modern bedroom with a minimalist or industrial aesthetic.'
        )
        ['de-DE'](
          'Ein Queensize-Bett mit getuftetem Kopfteil und Plattform sowie Stahlbeinen ist ein modernes und stilvolles Möbelstück. Das Kopfteil ist hoch und breit und hat ein getuftetes Design. Der für das Kopfteil verwendete Stoff ist weich und luxuriös und bietet einen bequemen Platz zum Anlehnen, wenn man sich im Bett aufrichtet.  Das Bett wird vom Boden auf einer Plattform angehoben, die von schlanken und robusten Stahlbeinen getragen wird. Die Plattform bietet eine solide und stabile Grundlage für die Matratze und verleiht dem Bett gleichzeitig ein sauberes und minimalistisches Aussehen.  Insgesamt ist dieses Queensize-Bett ein schönes und funktionales Stück, das sich perfekt für ein modernes Schlafzimmer mit minimalistischer oder industrieller Ästhetik eignet.'
        )
        ['en-US'](
          'A queen bed with a tufted headboard and platform and steel legs is a modern and stylish piece of furniture. The headboard is tall and wide, featuring a tufted design. The fabric used for the headboard is soft and luxurious, providing a comfortable place to lean against when sitting up in bed.  The bed is raised off the ground on a platform, which is supported by sleek and sturdy steel legs. The platform provides a solid and stable foundation for the mattress, while also giving the bed a clean and minimalist look.   Overall, this queen bed is a beautiful and functional piece that would be perfect for a modern bedroom with a minimalist or industrial aesthetic.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('orion-double-bed')
        ['de-DE']('orion-doppelbett')
        ['en-US']('orion-double-bed')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(orionDoubleBedProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.orionDoubleBed01()
    )
    .categories([
      KeyReference.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(bedsDraft.key!),
    ]);

export default orionDoubleBed;
