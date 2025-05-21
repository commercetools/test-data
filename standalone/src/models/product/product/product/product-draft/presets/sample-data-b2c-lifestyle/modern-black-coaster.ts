import { TBuilder } from '../../../../../../core';
import { CategoryDraft, TCategoryDraft } from '../../../../../category';
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
import { ProductDraft } from '../..';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const modernBlackCoasterProductTypeDraft =
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

const modernBlackCoaster = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('modern-black-coaster')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Modern Black Coaster')
        ['de-DE']('Moderner schwarzer Untersetzer')
        ['en-US']('Modern Black Coaster')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]("A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting.")
        [
          'de-DE'
        ]('Ein runder schwarzer Untersetzer ist ein kleines, flaches, scheibenförmiges Objekt, das unter ein Trinkglas oder eine Tasse gestellt wird, um die Oberfläche eines Tisches oder anderer Möbel vor Wasserringen oder Verschüttungen zu schützen. Der Untersetzer hat eine runde Form und ist einfarbig schwarz, was ihm ein schlichtes und minimalistisches Aussehen verleiht. Seine Oberfläche ist glatt, damit das Glas oder die Tasse rutschfest steht. Die Ränder sind mit einer Nahtverzierung versehen, die die Ästhetik des Untersetzers unterstreicht. Insgesamt ist ein runder schwarzer Untersetzer ein funktionelles und stilvolles Accessoire, das sich perfekt für jedes Zuhause oder Büro eignet.')
        [
          'en-US'
        ]("A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting.")
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('modern-black-coaster')
        ['de-DE']('moderner-schwarzer-untersetzer')
        ['en-US']('modern-black-coaster')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(modernBlackCoasterProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.modernBlackCoaster01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(barAccessoriesDraft.key!),
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
    ]);

export default modernBlackCoaster;
