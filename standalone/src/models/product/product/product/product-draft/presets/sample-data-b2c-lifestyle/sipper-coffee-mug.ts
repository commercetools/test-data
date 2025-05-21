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

const sipperCoffeeMugProductTypeDraft =
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

const sipperCoffeeMug = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('sipper-coffee-mug')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Sipper Coffee Mug')
        ['en-GB']('Sipper Coffee Mug')
        ['de-DE']('Sipper-Kaffeetasse')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('The Sipper Coffee Mug is made from ceramic. The design of the mug is intended to make it easy to hold and drink from, with a handle on one side for comfortable grip.  The mug is plain, but its basic design is generally simple and functional. The body of the mug is often smooth-sided, with a wide opening that makes it easy to pour and drink coffee.  The Sipper Coffee Mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Sipper Coffee Mug is a practical and functional type of drinking vessel that is ideal for enjoying a cup of coffee at home or at work. Its basic design and ease of use make it a popular choice for coffee lovers of all types.')
        [
          'en-US'
        ]('The Sipper Coffee Mug is made from ceramic. The design of the mug is intended to make it easy to hold and drink from, with a handle on one side for comfortable grip.  The mug is plain, but its basic design is generally simple and functional. The body of the mug is often smooth-sided, with a wide opening that makes it easy to pour and drink coffee.  The Sipper Coffee Mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Sipper Coffee Mug is a practical and functional type of drinking vessel that is ideal for enjoying a cup of coffee at home or at work. Its basic design and ease of use make it a popular choice for coffee lovers of all types.')
        [
          'de-DE'
        ]('Die Sipper-Tasse besteht aus Keramik und besticht durch ihr schlichtes Design mit seitlichem Henkel, der ein bequemes Halten und Trinken ermöglicht.  Das grundlegende Design ist minimalistisch und funktional. Der Körper des Bechers ist glatt abgerundet und hat eine breite Trinköffnung, die das Eingießen und Trinken von Heißgetränken erleichtert.  Der Sipper-Kaffeebecher ist leicht zu reinigen und zu pflegen. Er kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.  Die Sipper-Kaffeetasse ein praktisches und funktionelles Trinkgefäß, das sich ideal für den Tee- oder Kaffeegenuss zu Hause oder auf der Arbeit eignet. Ihr schlichtes Design und die benutzerfreundliche Handhabung machen sie zu einer beliebten Wahl für Kaffeeliebhaber aller Art.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('sipper-coffee-mug')
        ['en-GB']('sipper-coffee-mug')
        ['de-DE']('sipper-kaffeetasse')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(sipperCoffeeMugProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.sipperCoffeeMug01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(glasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
    ]);

export default sipperCoffeeMug;
