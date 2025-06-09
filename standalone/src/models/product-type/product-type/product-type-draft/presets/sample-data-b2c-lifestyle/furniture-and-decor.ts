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
  AttributeSetTypeDraft,
  AttributeDefinitionDraftGraphql,
  AttributeLocalizableTextTypeDraftGraphql,
  AttributeBooleanTypeDraftGraphql,
  AttributeSetTypeDraftGraphql,
  AttributeDefinitionDraftRest,
  AttributeLocalizableTextTypeDraftRest,
  AttributeBooleanTypeDraftRest,
  AttributeSetTypeDraftRest,
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

      AttributeDefinitionDraftRest.presets
        .empty()
        .name('search-color')
        .type(
          AttributeSetTypeDraftRest.random().elementType(
            AttributeLocalizableTextTypeDraftRest.random()
          )
        )
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Search Color')
            ['en-GB']('Search Colour')
            ['de-DE']('Suchfarbe')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Color used for faceting on Product Listing Pages')
            ['en-GB']('Colour used for faceting on Product Listing Pages')
            [
              'de-DE'
            ]('Farbe, die für die Facettierung auf Produktlistenseiten verwendet wird')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraftRest.presets
        .empty()
        .name('search-finish')
        .type(
          AttributeSetTypeDraftRest.random().elementType(
            AttributeLocalizableTextTypeDraftRest.random()
          )
        )
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Search Finish')
            ['en-GB']('Search Finish')
            ['de-DE']('Suchfarbe')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Finish used for facetting on Product Listing Pages')
            ['en-GB']('Finish used for facetting on Product Listing Pages')
            [
              'de-DE'
            ]('Oberfläche, die für die Facettierung auf Produktlistenseiten verwendet wird')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraftRest.presets
        .empty()
        .name('color-label')
        .type(AttributeLocalizableTextTypeDraftRest.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Color Label')
            ['en-GB']('Colour Label')
            ['de-DE']('Spezifische Farbe')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Specific color description for product details page')
            ['en-GB']('Specific colour description for product details page')
            ['de-DE']('Spezifische Farbe Beschreibung')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraftRest.presets
        .empty()
        .name('finish-label')
        .type(AttributeLocalizableTextTypeDraftRest.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Finish Label')
            ['en-GB']('Finish Label')
            ['de-DE']('Spezifische Oberflächen Beschreibung')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            [
              'en-US'
            ]('Specific finish color description for product details page')
            [
              'en-GB'
            ]('Specific finish colour description for product details page')
            ['de-DE']('Spezifische Oberflächen Beschreibung')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraftRest.presets
        .empty()
        .name('color-code')
        .type(AttributeLocalizableTextTypeDraftRest.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Color Code')
            ['en-GB']('Colour Code')
            ['de-DE']('Farbcode')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            [
              'en-US'
            ]('Specific color code to be displayed on product details page')
            [
              'en-GB'
            ]('Specific colour code to be displayed on product details page')
            [
              'de-DE'
            ]('Spezifischer Farbcode, der auf der Produktdetailseite angezeigt wird')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraftRest.presets
        .empty()
        .name('finish-code')
        .type(AttributeLocalizableTextTypeDraftRest.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Finish Color Code')
            ['en-GB']('Finish Colour Code')
            ['de-DE']('Oberflächen-Farbcode')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            [
              'en-US'
            ]('Specific finish color code to be displayed on product details page')
            [
              'en-GB'
            ]('Specific finish colour code to be displayed on product details page')
            [
              'de-DE'
            ]('Spezifischer Oberflächen-Farbcode, der auf der Produktdetailseite angezeigt wird')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
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

      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('search-color')
        .type(
          AttributeSetTypeDraftGraphql.random().elementType(
            AttributeLocalizableTextTypeDraftGraphql.random()
          )
        )
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Search Color')
            ['en-GB']('Search Colour')
            ['de-DE']('Suchfarbe')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Color used for faceting on Product Listing Pages')
            ['en-GB']('Colour used for faceting on Product Listing Pages')
            [
              'de-DE'
            ]('Farbe, die für die Facettierung auf Produktlistenseiten verwendet wird')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('search-finish')
        .type(
          AttributeSetTypeDraftGraphql.random().elementType(
            AttributeLocalizableTextTypeDraftGraphql.random()
          )
        )
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Search Finish')
            ['en-GB']('Search Finish')
            ['de-DE']('Suchfarbe')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Finish used for facetting on Product Listing Pages')
            ['en-GB']('Finish used for facetting on Product Listing Pages')
            [
              'de-DE'
            ]('Oberfläche, die für die Facettierung auf Produktlistenseiten verwendet wird')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('color-label')
        .type(AttributeLocalizableTextTypeDraftGraphql.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Color Label')
            ['en-GB']('Colour Label')
            ['de-DE']('Spezifische Farbe')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Specific color description for product details page')
            ['en-GB']('Specific colour description for product details page')
            ['de-DE']('Spezifische Farbe Beschreibung')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('finish-label')
        .type(AttributeLocalizableTextTypeDraftGraphql.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Finish Label')
            ['en-GB']('Finish Label')
            ['de-DE']('Spezifische Oberflächen Beschreibung')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            [
              'en-US'
            ]('Specific finish color description for product details page')
            [
              'en-GB'
            ]('Specific finish colour description for product details page')
            ['de-DE']('Spezifische Oberflächen Beschreibung')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('color-code')
        .type(AttributeLocalizableTextTypeDraftGraphql.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Color Code')
            ['en-GB']('Colour Code')
            ['de-DE']('Farbcode')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            [
              'en-US'
            ]('Specific color code to be displayed on product details page')
            [
              'en-GB'
            ]('Specific colour code to be displayed on product details page')
            [
              'de-DE'
            ]('Spezifischer Farbcode, der auf der Produktdetailseite angezeigt wird')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('finish-code')
        .type(AttributeLocalizableTextTypeDraftGraphql.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Finish Color Code')
            ['en-GB']('Finish Colour Code')
            ['de-DE']('Oberflächen-Farbcode')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            [
              'en-US'
            ]('Specific finish color code to be displayed on product details page')
            [
              'en-GB'
            ]('Specific finish colour code to be displayed on product details page')
            [
              'de-DE'
            ]('Spezifischer Oberflächen-Farbcode, der auf der Produktdetailseite angezeigt wird')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
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

      AttributeDefinitionDraft.presets
        .empty()
        .name('search-color')
        .type(
          AttributeSetTypeDraft.random().elementType(
            AttributeLocalizableTextTypeDraft.random()
          )
        )
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Search Color')
            ['en-GB']('Search Colour')
            ['de-DE']('Suchfarbe')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Color used for faceting on Product Listing Pages')
            ['en-GB']('Colour used for faceting on Product Listing Pages')
            [
              'de-DE'
            ]('Farbe, die für die Facettierung auf Produktlistenseiten verwendet wird')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('search-finish')
        .type(
          AttributeSetTypeDraft.random().elementType(
            AttributeLocalizableTextTypeDraft.random()
          )
        )
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Search Finish')
            ['en-GB']('Search Finish')
            ['de-DE']('Suchfarbe')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Finish used for facetting on Product Listing Pages')
            ['en-GB']('Finish used for facetting on Product Listing Pages')
            [
              'de-DE'
            ]('Oberfläche, die für die Facettierung auf Produktlistenseiten verwendet wird')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('color-label')
        .type(AttributeLocalizableTextTypeDraft.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Color Label')
            ['en-GB']('Colour Label')
            ['de-DE']('Spezifische Farbe')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Specific color description for product details page')
            ['en-GB']('Specific colour description for product details page')
            ['de-DE']('Spezifische Farbe Beschreibung')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('finish-label')
        .type(AttributeLocalizableTextTypeDraft.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Finish Label')
            ['en-GB']('Finish Label')
            ['de-DE']('Spezifische Oberflächen Beschreibung')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            [
              'en-US'
            ]('Specific finish color description for product details page')
            [
              'en-GB'
            ]('Specific finish colour description for product details page')
            ['de-DE']('Spezifische Oberflächen Beschreibung')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('color-code')
        .type(AttributeLocalizableTextTypeDraft.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Color Code')
            ['en-GB']('Colour Code')
            ['de-DE']('Farbcode')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            [
              'en-US'
            ]('Specific color code to be displayed on product details page')
            [
              'en-GB'
            ]('Specific colour code to be displayed on product details page')
            [
              'de-DE'
            ]('Spezifischer Farbcode, der auf der Produktdetailseite angezeigt wird')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),

      AttributeDefinitionDraft.presets
        .empty()
        .name('finish-code')
        .type(AttributeLocalizableTextTypeDraft.random())
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-US']('Finish Color Code')
            ['en-GB']('Finish Colour Code')
            ['de-DE']('Oberflächen-Farbcode')
        )
        .inputTip(
          LocalizedStringDraft.presets
            .empty()
            [
              'en-US'
            ]('Specific finish color code to be displayed on product details page')
            [
              'en-GB'
            ]('Specific finish colour code to be displayed on product details page')
            [
              'de-DE'
            ]('Spezifischer Oberflächen-Farbcode, der auf der Produktdetailseite angezeigt wird')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
        .inputHint(inputHints.SingleLine),
    ]);
