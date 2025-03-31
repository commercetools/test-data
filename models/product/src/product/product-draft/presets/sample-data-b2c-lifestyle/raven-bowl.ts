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

const ravenBowlProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const bowlsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bowls()
  .build<TCategoryDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .dinnerware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .kitchen()
  .build<TCategoryDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .newArrivals()
  .build<TCategoryDraft>();

const ravenBowl = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('raven-bowl')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Raven Bowl')
        ['en-GB']('Raven Bowl')
        ['de-DE']('Suppenschüssel >Raven<')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('This bowl is a dish designed to serve soup and other liquid-based foods. It is a square-shaped bowl with four straight sides and a flat bottom, creating a modern and contemporary look for dining.  Overall, a square soup bowl is a functional and stylish choice for serving soup and other liquid-based foods. Its unique shape and contemporary design make it a popular choice for those who appreciate modern aesthetics and practicality.')
        [
          'en-US'
        ]('This bowl is a dish designed to serve soup and other liquid-based foods. It is a square-shaped bowl with four straight sides and a flat bottom, creating a modern and contemporary look for dining.  Overall, a square soup bowl is a functional and stylish choice for serving soup and other liquid-based foods. Its unique shape and contemporary design make it a popular choice for those who appreciate modern aesthetics and practicality.')
        [
          'de-DE'
        ]('Die Schüssel >Raven< wurde zum Servieren von Suppen und anderer Flüssigspeisen designt. Die quadratische Form aus vier geraden Seiten und einem flachen Boden verleiht dem Suppentellerl einen modernen und zeitgemäßen Look.  Durch die einzigartige Form und das zeitgemäße Design ist >Raven< eine beliebte Wahl für all diejenigen, die Ästhetik und Praktikabilität auf ihrem Esstisch schätzen.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('raven-bowl')
        ['en-GB']('raven-bowl')
        ['de-DE']('rabenschssel')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(ravenBowlProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.ravenBowl01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(bowlsDraft.key!),
      KeyReferenceDraft.presets.category().key(dinnerwareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
      KeyReferenceDraft.presets.category().key(newArrivalsDraft.key!),
    ]);

export default ravenBowl;
