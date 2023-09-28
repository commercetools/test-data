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
import { ProductDraft } from '../../..';
import { ProductVariantDraft } from '../../../../product-variant';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const amaliaRugProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodStore
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const rugsDraft = CategoryDraft.presets.sampleDataGoodStore
  .rugs()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeDecor()
  .build<TCategoryDraft>();

const amaliaRug = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('amalia-rug')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Amalia Rug')
        ['en-GB']('Amalia Rug')
        ['de-DE']('Teppich "Amalia"')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'A round plush accent rug is designed to be soft and comfortable underfoot, with a thick and dense pile that provides a plush feel. The fibers are densely packed together, giving the rug a lush and luxurious feel. The rug is a great decorative accent in a bedroom, living room, or other area where a small touch of softness and comfort is desired.  Because of their small size, round plush accent rugs are easy to move and reposition, making them a versatile addition to any home. They are also easy to clean and maintain, making them a practical choice for high-traffic areas.  Overall, a round plush accent rug is a cozy and inviting addition to any room. Its soft texture and luxurious feel make it a popular choice for those who want to add a touch of comfort and style to their living space.'
        )
        ['en-US'](
          'A round plush accent rug is designed to be soft and comfortable underfoot, with a thick and dense pile that provides a plush feel. The fibers are densely packed together, giving the rug a lush and luxurious feel. The rug is a great decorative accent in a bedroom, living room, or other area where a small touch of softness and comfort is desired.  Because of their small size, round plush accent rugs are easy to move and reposition, making them a versatile addition to any home. They are also easy to clean and maintain, making them a practical choice for high-traffic areas.  Overall, a round plush accent rug is a cozy and inviting addition to any room. Its soft texture and luxurious feel make it a popular choice for those who want to add a touch of comfort and style to their living space.'
        )
        ['de-DE'](
          'Ein runder Plüsch-Akzent-Teppich ist so konzipiert, dass er weich und bequem unter den Füßen ist, mit einem dicken und dichten Flor, der ein weiches Gefühl vermittelt. Die Fasern sind dicht gepackt und verleihen dem Teppich ein üppiges und luxuriöses Gefühl. Der Teppich ist ein großartiger dekorativer Akzent in einem Schlafzimmer, Wohnzimmer oder anderen Bereichen, in denen ein kleiner Hauch von Weichheit und Komfort erwünscht ist.  Aufgrund ihrer geringen Größe lassen sich runde Plüschteppiche leicht bewegen und neu positionieren, was sie zu einer vielseitigen Ergänzung für jedes Zuhause macht. Sie sind außerdem leicht zu reinigen und zu pflegen, was sie zu einer praktischen Wahl für stark frequentierte Bereiche macht.  Insgesamt ist ein runder Teppich mit Plüschakzenten eine gemütliche und einladende Ergänzung für jeden Raum. Seine weiche Textur und luxuriöse Haptik machen es zu einer beliebten Wahl für diejenigen, die ihrem Wohnraum einen Hauch von Komfort und Stil verleihen möchten.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('amalia-rug')
        ['en-GB']('amalia-rug')
        ['de-DE']('amalia-teppich')
    )
    .productType(
      KeyReference.presets.productType().key(amaliaRugProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.amaliaRug01()
    )
    .categories([
      KeyReference.presets.category().key(rugsDraft.key!),
      KeyReference.presets.category().key(roomDecorDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default amaliaRug;
