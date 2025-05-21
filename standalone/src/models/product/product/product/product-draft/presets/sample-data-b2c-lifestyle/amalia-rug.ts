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
import type { TProductDraft } from '../../../types';
import { ProductDraft } from '../../index';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const amaliaRugProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const rugsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .rugs()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .homeDecor()
  .build<TCategoryDraft>();

const amaliaRug = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('amalia-rug')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Amalia Rug')
        ['en-GB']('Amalia Rug')
        ['de-DE']('Teppich "Amalia"')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A round plush accent rug is designed to be soft and comfortable underfoot, with a thick and dense pile that provides a plush feel. The fibers are densely packed together, giving the rug a lush and luxurious feel. The rug is a great decorative accent in a bedroom, living room, or other area where a small touch of softness and comfort is desired.  Because of their small size, round plush accent rugs are easy to move and reposition, making them a versatile addition to any home. They are also easy to clean and maintain, making them a practical choice for high-traffic areas.  Overall, a round plush accent rug is a cozy and inviting addition to any room. Its soft texture and luxurious feel make it a popular choice for those who want to add a touch of comfort and style to their living space.')
        [
          'en-US'
        ]('A round plush accent rug is designed to be soft and comfortable underfoot, with a thick and dense pile that provides a plush feel. The fibers are densely packed together, giving the rug a lush and luxurious feel. The rug is a great decorative accent in a bedroom, living room, or other area where a small touch of softness and comfort is desired.  Because of their small size, round plush accent rugs are easy to move and reposition, making them a versatile addition to any home. They are also easy to clean and maintain, making them a practical choice for high-traffic areas.  Overall, a round plush accent rug is a cozy and inviting addition to any room. Its soft texture and luxurious feel make it a popular choice for those who want to add a touch of comfort and style to their living space.')
        [
          'de-DE'
        ]('Dieser runde Plüsch-Akzent-Teppich weich und bequem. Der dichte Flor vermittelt ein weiches Gefühl. Die Fasern sind dicht gepackt und verleihen dem Teppich ein üppiges und luxuriöses Gefühl. Der Teppich ist ein großartiger dekorativer Akzent in einem Schlafzimmer, Wohnzimmer oder anderen Bereichen, in denen ein kleiner Hauch von Weichheit und Komfort erwünscht ist.  Aufgrund ihrer geringen Größe lassen sich runde Plüschteppiche leicht bewegen und neu positionieren, was sie zu einer vielseitigen Ergänzung für jedes Zuhause macht. Sie sind außerdem leicht zu reinigen und zu pflegen, was sie zu einer praktischen Wahl für stark frequentierte Bereiche macht.  Insgesamt ist ein runder Teppich mit Plüschakzenten eine gemütliche und einladende Ergänzung für jeden Raum. Seine weiche Textur und luxuriöse Haptik machen es zu einer beliebten Wahl für diejenigen, die ihrem Wohnraum einen Hauch von Komfort und Stil verleihen möchten.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('amalia-rug')
        ['en-GB']('amalia-rug')
        ['de-DE']('amalia-teppich')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(amaliaRugProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.amaliaRug01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(rugsDraft.key!),
      KeyReferenceDraft.presets.category().key(roomDecorDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default amaliaRug;
