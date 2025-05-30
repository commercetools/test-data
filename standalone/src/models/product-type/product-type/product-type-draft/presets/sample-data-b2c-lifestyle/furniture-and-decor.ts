import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '../../../../../commons';
import {
  attributeConstraints,
  inputHints,
} from '../../../../attribute-definition/constants';
import {
  AttributeDefinitionDraft,
  AttributeBooleanTypeDraft,
  AttributeLocalizableTextTypeDraft,
  AttributeDefinitionDraftGraphql,
  AttributeLocalizableTextTypeDraftGraphql,
  AttributeBooleanTypeDraftGraphql,
  AttributeDefinitionDraftRest,
  AttributeLocalizableTextTypeDraftRest,
  AttributeBooleanTypeDraftRest,
} from '../../../../index';
import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
  TProductTypeDraftRest,
} from '../../../types';
import {
  ProductTypeDraft,
  ProductTypeDraftGraphql,
  ProductTypeDraftRest,
} from '../../index';

export const restPreset = (): TBuilder<TProductTypeDraftRest> =>
  ProductTypeDraftRest.presets
    .empty()
    .key('furniture-and-decor')
    .name('Furniture and decor')
    .description(
      'items with color, fabric, size, finish and/or product spec attributes'
    )
    .attributes([
      AttributeDefinitionDraftRest.presets
        .empty()
        .name('productspec')
        .type(AttributeLocalizableTextTypeDraftRest.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Product Specifications')
            ['en-US']('Product Specifications')
            ['de-DE']('Produktspezifikationen')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            [
              'en-GB'
            ]('Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points.')
            [
              'en-US'
            ]('Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points.')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(false)
        .inputHint(inputHints.MultiLine),

      AttributeDefinitionDraftRest.presets
        .empty()
        .name('color')
        .type(AttributeLocalizableTextTypeDraftRest.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Color')
            ['en-US']('Color')
            ['de-DE']('Farbe')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraftRest.presets
        .empty()
        .name('finish')
        .type(AttributeLocalizableTextTypeDraftRest.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Finish')
            ['en-US']('Finish')
            ['de-DE']('Fertig')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraftRest.presets
        .empty()
        .name('new-arrival')
        .type(AttributeBooleanTypeDraftRest.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('New Arrival')
            ['en-US']('New Arrival')
            ['de-DE']('Neuankömmling')
        )
        .isRequired(false)
        .type(AttributeBooleanTypeDraftRest.random())
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraftRest.presets
        .empty()
        .name('size')
        .type(AttributeLocalizableTextTypeDraftRest.random())
        .label(
          LocalizedStringDraft.presets.empty()['en-GB']('Size')['en-US']('Size')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('size set as a string value')
            ['en-US']('size set as a string value')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraftRest.presets
        .empty()
        .name('product-description')
        .type(AttributeLocalizableTextTypeDraftRest.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Product Description')
            ['en-US']('Product Description')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            [
              'en-GB'
            ]('Product description, made a custom attribute so product description is not used for search results.')
            [
              'en-US'
            ]('Product description, made a custom attribute so product description is not used for search results.')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),
    ]);

export const graphqlPreset = (): TBuilder<TProductTypeDraftGraphql> =>
  ProductTypeDraftGraphql.presets
    .empty()
    .key('furniture-and-decor')
    .name('Furniture and decor')
    .description(
      'items with color, fabric, size, finish and/or product spec attributes'
    )
    .attributeDefinitions([
      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('productspec')
        .type(AttributeLocalizableTextTypeDraftGraphql.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Product Specifications')
            ['en-US']('Product Specifications')
            ['de-DE']('Produktspezifikationen')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            [
              'en-GB'
            ]('Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points.')
            [
              'en-US'
            ]('Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points.')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(false)
        .inputHint(inputHints.MultiLine),

      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('color')
        .type(AttributeLocalizableTextTypeDraftGraphql.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Color')
            ['en-US']('Color')
            ['de-DE']('Farbe')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('finish')
        .type(AttributeLocalizableTextTypeDraftGraphql.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Finish')
            ['en-US']('Finish')
            ['de-DE']('Fertig')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('new-arrival')
        .type(AttributeBooleanTypeDraftGraphql.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('New Arrival')
            ['en-US']('New Arrival')
            ['de-DE']('Neuankömmling')
        )
        .isRequired(false)
        .type(AttributeBooleanTypeDraftGraphql.random())
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('size')
        .type(AttributeLocalizableTextTypeDraftGraphql.random())
        .label(
          LocalizedStringDraft.presets.empty()['en-GB']('Size')['en-US']('Size')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('size set as a string value')
            ['en-US']('size set as a string value')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('product-description')
        .type(AttributeLocalizableTextTypeDraftGraphql.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Product Description')
            ['en-US']('Product Description')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            [
              'en-GB'
            ]('Product description, made a custom attribute so product description is not used for search results.')
            [
              'en-US'
            ]('Product description, made a custom attribute so product description is not used for search results.')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),
    ]);

export const compatPreset = (): TBuilder<TProductTypeDraft> =>
  ProductTypeDraft.presets
    .empty()
    .key('furniture-and-decor')
    .name('Furniture and decor')
    .description(
      'items with color, fabric, size, finish and/or product spec attributes'
    )
    .attributes([
      AttributeDefinitionDraft.presets
        .empty()
        .name('productspec')
        .type(AttributeLocalizableTextTypeDraft.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Product Specifications')
            ['en-US']('Product Specifications')
            ['de-DE']('Produktspezifikationen')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            [
              'en-GB'
            ]('Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points.')
            [
              'en-US'
            ]('Details on the specifications of the product, including size, wood type, fabric type, to be detailed in bullet points.')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(false)
        .inputHint(inputHints.MultiLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('color')
        .type(AttributeLocalizableTextTypeDraft.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Color')
            ['en-US']('Color')
            ['de-DE']('Farbe')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('finish')
        .type(AttributeLocalizableTextTypeDraft.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Finish')
            ['en-US']('Finish')
            ['de-DE']('Fertig')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('new-arrival')
        .type(AttributeBooleanTypeDraft.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('New Arrival')
            ['en-US']('New Arrival')
            ['de-DE']('Neuankömmling')
        )
        .isRequired(false)
        .type(AttributeBooleanTypeDraft.random())
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('size')
        .type(AttributeLocalizableTextTypeDraft.random())
        .label(
          LocalizedStringDraft.presets.empty()['en-GB']('Size')['en-US']('Size')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('size set as a string value')
            ['en-US']('size set as a string value')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('product-description')
        .type(AttributeLocalizableTextTypeDraft.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Product Description')
            ['en-US']('Product Description')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            [
              'en-GB'
            ]('Product description, made a custom attribute so product description is not used for search results.')
            [
              'en-US'
            ]('Product description, made a custom attribute so product description is not used for search results.')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.SameForAll)
        .isSearchable(false)
        .inputHint(inputHints.SingleLine),
    ]);
