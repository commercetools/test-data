import { TBuilder } from '@/core';
import { LocalizedStringDraft } from '../../../../../commons';
import {
  attributeConstraints,
  inputHints,
} from '../../../../attribute-definition/constants';
import {
  AttributeLocalizableTextTypeDraft,
  AttributeSetTypeDraft,
  AttributeDefinitionDraft,
  AttributeDefinitionDraftRest,
  AttributeSetTypeDraftRest,
  AttributeLocalizableTextTypeDraftRest,
  AttributeDefinitionDraftGraphql,
  AttributeSetTypeDraftGraphql,
  AttributeLocalizableTextTypeDraftGraphql,
  AttributeTextTypeDraftGraphql,
} from '../../../../index';
import {
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
    .key('product-sets')
    .name('Product sets')
    .description('products also sold as sets with their variants')
    .attributes([
      AttributeDefinitionDraftRest.presets
        .empty()
        .name('type')
        .type(
          AttributeSetTypeDraftRest.random().elementType(
            AttributeLocalizableTextTypeDraftRest.random()
          )
        )
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Type')
            ['en-US']('Type')
            ['de-DE']('Typ')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
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
        .type(AttributeTextTypeDraftGraphql.random())
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
        .type(AttributeTextTypeDraftGraphql.random())
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
    .key('product-sets')
    .name('Product sets')
    .description('products also sold as sets with their variants')
    .attributeDefinitions([
      AttributeDefinitionDraftGraphql.presets
        .empty()
        .name('type')
        .type(
          AttributeSetTypeDraftGraphql.random().elementType(
            AttributeLocalizableTextTypeDraftGraphql.random()
          )
        )
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Type')
            ['en-US']('Type')
            ['de-DE']('Typ')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
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
    .key('product-sets')
    .name('Product sets')
    .description('products also sold as sets with their variants')
    .attributes([
      AttributeDefinitionDraft.presets
        .empty()
        .name('type')
        .type(
          AttributeSetTypeDraft.random().elementType(
            AttributeLocalizableTextTypeDraft.random()
          )
        )
        .label(
          LocalizedStringDraft.presets
            .empty()
            ['en-GB']('Type')
            ['en-US']('Type')
            ['de-DE']('Typ')
        )
        .isRequired(false)
        .attributeConstraint(attributeConstraints.None)
        .isSearchable(true)
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
