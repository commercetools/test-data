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
import * as ProductVariantDraft from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const sandTeaCupProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const glasswareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .glassware()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .barAndGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .kitchen()
  .build<TCategoryDraft>();

const sandTeaCup = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('sand-tea-cup')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Sand Tea Cup')
        ['en-GB']('Sand Tea Cup')
        ['de-DE']('Sandfarbene Tasse')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('The Sand Tea Cup is a type of drinking vessel that is designed to hold and serve tea and/or coffee. It has a cylindrical or slightly tapered shape, with a capacity of around 8 to 16 ounces, and is a light brownish color.  The mug is made of ceramic. The body of the mug is smooth-sided, with a wide opening that makes it easy to pour and drink coffee or tea.  The handle of the mug is designed to be easy to grip, with a comfortable shape and a size that fits most hands. The bottom of the mug is typically flat, with a stable base that helps to prevent tipping and spilling.  The Sand Tea Cup is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, this mug is a practical and functional type of drinking vessel that is ideal for enjoying a hot drink at home or at work. Its neutral color and simple design make it a popular choice for coffee lovers who prefer a classic and understated look.')
        [
          'en-US'
        ]('The Sand Tea Cup is a type of drinking vessel that is designed to hold and serve tea and/or coffee. It has a cylindrical or slightly tapered shape, with a capacity of around 8 to 16 ounces, and is a light brownish color.  The mug is made of ceramic. The body of the mug is smooth-sided, with a wide opening that makes it easy to pour and drink coffee or tea.  The handle of the mug is designed to be easy to grip, with a comfortable shape and a size that fits most hands. The bottom of the mug is typically flat, with a stable base that helps to prevent tipping and spilling.  The Sand Tea Cup is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, this mug is a practical and functional type of drinking vessel that is ideal for enjoying a hot drink at home or at work. Its neutral color and simple design make it a popular choice for coffee lovers who prefer a classic and understated look.')
        [
          'de-DE'
        ]('Die sandfarbene Tasse ist mit ihrer zylindrischen oder leicht konischen Form und einem Fassungsvermögen von etwa 8 bis 16 Unzen das ideale Trinkgefäß für jeden Tee- oder Kaffeeliebhaber.  Der Keramikbecher hat glatte Seiten und eine breite Öffnung, die das Eingießen und den Genuss von Kaffee oder Tee erleichtern.  Der Henkel der Tasse ist so konzipiert, dass er für jede Handgröße angenehm zu greifen ist und bequem in der Hand liegt. Der Boden des Henkeltasse ist flach und stabil, um ein Umkippen und Verschütten zu verhindern.  Die hellbraune Teetasse ist leicht zu reinigen und zu pflegen. Sie kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.  Die Tasse ist ein praktisches und funktionelles Trinkgefäß, das sich ideal für den Genuss von Heißgetränken Zuhause oder auf der Arbeit eignet. Die neutrale Farbe und das schlichte Design machen sie zu einer beliebten Wahl für alle Tee- und Kaffeeliebhaber, die einen klassischen und minimalistischen Look bevorzugen.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('sand-tea-cup')
        ['en-GB']('sand-tea-cup')
        ['de-DE']('sand-teetasse')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(sandTeaCupProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.sandTeaCup01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(glasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
    ]);

export default sandTeaCup;
