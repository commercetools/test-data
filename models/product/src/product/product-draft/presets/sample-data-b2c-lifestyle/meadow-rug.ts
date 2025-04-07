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
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const meadowRugProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .roomDecor()
  .build<TCategoryDraft>();

const rugsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .rugs()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .homeDecor()
  .build<TCategoryDraft>();

const meadowRug = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('meadow-rug')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Meadow Rug')
        ['de-DE']('Wiesenteppich')
        ['en-US']('Meadow Rug')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]("A plush area rug is a type of rug that is designed to be soft and comfortable underfoot. Plush rugs are characterized by their thick pile. The fibers are densely packed together, giving the rug a lush and luxurious feel.   Because of their softness and comfort, plush area rugs are often used in bedrooms, living rooms, and other areas where people spend a lot of time sitting or lounging on the floor. They are also a popular choice for nurseries and children's rooms, as they provide a safe and comfortable play area for kids.  Overall, a plush area rug is a cozy and inviting addition to any home. Its soft texture and luxurious feel make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.")
        [
          'de-DE'
        ]('Ein Plüschteppich ist eine Art von Teppich, der weich und bequem unter den Füßen liegt. Plüschteppiche zeichnen sich durch ihren dichten Flor aus. Die Fasern sind dicht gepackt und verleihen dem Teppich ein üppiges und luxuriöses Gefühl. Aufgrund ihrer Weichheit und ihres Komforts werden Plüschteppiche häufig in Schlafzimmern, Wohnzimmern und anderen Bereichen verwendet, in denen die Menschen viel Zeit sitzend oder faulenzend auf dem Boden verbringen. Sie sind auch eine beliebte Wahl für Kindergärten und Kinderzimmer, da sie einen sicheren und bequemen Spielbereich für Kinder bieten. Insgesamt ist ein Plüschteppich eine gemütliche und einladende Ergänzung für jedes Zuhause. Seine weiche Textur und sein luxuriöses Gefühl machen ihn zu einer beliebten Wahl für alle, die eine warme und einladende Atmosphäre in ihrem Wohnraum schaffen wollen.')
        [
          'en-US'
        ]("A plush area rug is a type of rug that is designed to be soft and comfortable underfoot. Plush rugs are characterized by their thick pile. The fibers are densely packed together, giving the rug a lush and luxurious feel.   Because of their softness and comfort, plush area rugs are often used in bedrooms, living rooms, and other areas where people spend a lot of time sitting or lounging on the floor. They are also a popular choice for nurseries and children's rooms, as they provide a safe and comfortable play area for kids.  Overall, a plush area rug is a cozy and inviting addition to any home. Its soft texture and luxurious feel make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.")
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('meadow-rug')
        ['de-DE']('meadow-teppich')
        ['en-US']('meadow-rug')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(meadowRugProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.meadowRug01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataB2CLifestyle.meadowRug02(),
      ProductVariantDraft.presets.sampleDataB2CLifestyle.meadowRug03(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(roomDecorDraft.key!),
      KeyReferenceDraft.presets.category().key(rugsDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default meadowRug;
