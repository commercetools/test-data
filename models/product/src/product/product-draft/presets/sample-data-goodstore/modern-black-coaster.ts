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

const modernBlackCoasterProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const barAccessoriesDraft = CategoryDraft.presets.sampleDataGoodStore
  .barAccessories()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .barAndGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const modernBlackCoaster = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('modern-black-coaster')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Modern Black Coaster')
        ['de-DE']('Moderner schwarzer Untersetzer')
        ['en-US']('Modern Black Coaster')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          "A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting."
        )
        ['de-DE'](
          'Ein runder schwarzer Untersetzer ist ein kleiner, flacher, scheibenförmiger Gegenstand, der unter ein Trinkglas oder eine Tasse gestellt wird, um die Oberfläche eines Tisches oder anderer Möbel vor Wasserringen oder Spritzern zu schützen. Der Untersetzer hat eine runde Form und eine solide schwarze Farbe, die ihm ein schlankes und minimalistisches Aussehen verleiht. Seine Oberfläche ist glatt, um dem Glas oder der Tasse einen rutschfesten Halt zu bieten. Die Kanten sind mit Ziernähten versehen, die den ästhetischen Reiz des Untersetzers noch verstärken. Insgesamt ist ein runder schwarzer Untersetzer ein funktionales und stilvolles Accessoire, das sich perfekt für jede Wohn- oder Büroumgebung eignet.'
        )
        ['en-US'](
          "A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting."
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('modern-black-coaster')
        ['de-DE']('moderner-schwarzer-untersetzer')
        ['en-US']('modern-black-coaster')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(modernBlackCoasterProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.modernBlackCoaster01()
    )
    .categories([
      KeyReference.presets.category().key(barAccessoriesDraft.key!),
      KeyReference.presets.category().key(barAndGlasswareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default modernBlackCoaster;
