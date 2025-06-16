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
  AttributeTextTypeDraftGraphql,
  AttributeTextTypeDraftRest,
  AttributeTextTypeDraft,
  AttributeLocalizedEnumTypeDraft,
  AttributeLocalizedEnumTypeDraftGraphql,
  AttributeLocalizedEnumTypeDraftRest,
  AttributeLocalizedEnumValueDraftRest,
  AttributeLocalizedEnumValueDraftGraphql,
  AttributeLocalizedEnumValueDraft,
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
          AttributeLocalizedEnumTypeDraftRest.random().values([
            AttributeLocalizedEnumValueDraftRest.random()
              .key('black')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Black')
                  ['en-GB']('Black')
                  ['de-DE']('Schwarz')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('gray')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Gray')
                  ['en-GB']('Grey')
                  ['de-DE']('Grau')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('white')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('White')
                  ['en-GB']('White')
                  ['de-DE']('Weiß')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('blue')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Blue')
                  ['en-GB']('Blue')
                  ['de-DE']('Blau')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('brown')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Brown')
                  ['en-GB']('Brown')
                  ['de-DE']('Braun')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('green')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Green')
                  ['en-GB']('Green')
                  ['de-DE']('Grün')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('red')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Red')
                  ['en-GB']('Red')
                  ['de-DE']('Rot')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('purple')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Purple')
                  ['en-GB']('Purple')
                  ['de-DE']('Violett')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('pink')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Pink')
                  ['en-GB']('Pink')
                  ['de-DE']('Rosa')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('yellow')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Yellow')
                  ['en-GB']('Yellow')
                  ['de-DE']('Gelb')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('gold')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Gold')
                  ['en-GB']('Gold')
                  ['de-DE']('Gold')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('silver')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Silver')
                  ['en-GB']('Silver')
                  ['de-DE']('Silber')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('multicolored')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Multicolored')
                  ['en-GB']('Multicoloured')
                  ['de-DE']('Mehrfarbig')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('transparent')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Transparent')
                  ['en-GB']('Transparent')
                  ['de-DE']('Transparent')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('glass')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Glass')
                  ['en-GB']('Glass')
                  ['de-DE']('Glas')
              ),
          ])
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
          AttributeLocalizedEnumTypeDraftRest.random().values([
            AttributeLocalizedEnumValueDraftRest.random()
              .key('black')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Black')
                  ['en-GB']('Black')
                  ['de-DE']('Schwarz')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('gray')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Gray')
                  ['en-GB']('Grey')
                  ['de-DE']('Grau')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('white')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('White')
                  ['en-GB']('White')
                  ['de-DE']('Weiß')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('blue')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Blue')
                  ['en-GB']('Blue')
                  ['de-DE']('Blau')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('brown')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Brown')
                  ['en-GB']('Brown')
                  ['de-DE']('Braun')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('green')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Green')
                  ['en-GB']('Green')
                  ['de-DE']('Grün')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('red')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Red')
                  ['en-GB']('Red')
                  ['de-DE']('Rot')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('purple')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Purple')
                  ['en-GB']('Purple')
                  ['de-DE']('Violett')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('pink')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Pink')
                  ['en-GB']('Pink')
                  ['de-DE']('Rosa')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('yellow')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Yellow')
                  ['en-GB']('Yellow')
                  ['de-DE']('Gelb')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('gold')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Gold')
                  ['en-GB']('Gold')
                  ['de-DE']('Gold')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('silver')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Silver')
                  ['en-GB']('Silver')
                  ['de-DE']('Silber')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('multicolored')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Multicolored')
                  ['en-GB']('Multicoloured')
                  ['de-DE']('Mehrfarbig')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('transparent')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Transparent')
                  ['en-GB']('Transparent')
                  ['de-DE']('Transparent')
              ),
            AttributeLocalizedEnumValueDraftRest.random()
              .key('glass')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Glass')
                  ['en-GB']('Glass')
                  ['de-DE']('Glas')
              ),
          ])
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
        .type(AttributeTextTypeDraftRest.random())
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
        .type(AttributeTextTypeDraftRest.random())
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
          AttributeLocalizedEnumTypeDraftGraphql.random().values([
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('black')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Black')
                  ['en-GB']('Black')
                  ['de-DE']('Schwarz')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('gray')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Gray')
                  ['en-GB']('Grey')
                  ['de-DE']('Grau')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('white')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('White')
                  ['en-GB']('White')
                  ['de-DE']('Weiß')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('blue')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Blue')
                  ['en-GB']('Blue')
                  ['de-DE']('Blau')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('brown')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Brown')
                  ['en-GB']('Brown')
                  ['de-DE']('Braun')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('green')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Green')
                  ['en-GB']('Green')
                  ['de-DE']('Grün')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('red')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Red')
                  ['en-GB']('Red')
                  ['de-DE']('Rot')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('purple')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Purple')
                  ['en-GB']('Purple')
                  ['de-DE']('Violett')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('pink')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Pink')
                  ['en-GB']('Pink')
                  ['de-DE']('Rosa')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('yellow')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Yellow')
                  ['en-GB']('Yellow')
                  ['de-DE']('Gelb')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('gold')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Gold')
                  ['en-GB']('Gold')
                  ['de-DE']('Gold')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('silver')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Silver')
                  ['en-GB']('Silver')
                  ['de-DE']('Silber')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('multicolored')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Multicolored')
                  ['en-GB']('Multicoloured')
                  ['de-DE']('Mehrfarbig')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('transparent')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Transparent')
                  ['en-GB']('Transparent')
                  ['de-DE']('Transparent')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('glass')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Glass')
                  ['en-GB']('Glass')
                  ['de-DE']('Glas')
              ),
          ])
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
          AttributeLocalizedEnumTypeDraftGraphql.random().values([
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('black')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Black')
                  ['en-GB']('Black')
                  ['de-DE']('Schwarz')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('gray')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Gray')
                  ['en-GB']('Grey')
                  ['de-DE']('Grau')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('white')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('White')
                  ['en-GB']('White')
                  ['de-DE']('Weiß')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('blue')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Blue')
                  ['en-GB']('Blue')
                  ['de-DE']('Blau')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('brown')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Brown')
                  ['en-GB']('Brown')
                  ['de-DE']('Braun')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('green')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Green')
                  ['en-GB']('Green')
                  ['de-DE']('Grün')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('red')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Red')
                  ['en-GB']('Red')
                  ['de-DE']('Rot')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('purple')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Purple')
                  ['en-GB']('Purple')
                  ['de-DE']('Violett')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('pink')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Pink')
                  ['en-GB']('Pink')
                  ['de-DE']('Rosa')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('yellow')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Yellow')
                  ['en-GB']('Yellow')
                  ['de-DE']('Gelb')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('gold')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Gold')
                  ['en-GB']('Gold')
                  ['de-DE']('Gold')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('silver')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Silver')
                  ['en-GB']('Silver')
                  ['de-DE']('Silber')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('multicolored')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Multicolored')
                  ['en-GB']('Multicoloured')
                  ['de-DE']('Mehrfarbig')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('transparent')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Transparent')
                  ['en-GB']('Transparent')
                  ['de-DE']('Transparent')
              ),
            AttributeLocalizedEnumValueDraftGraphql.random()
              .key('glass')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Glass')
                  ['en-GB']('Glass')
                  ['de-DE']('Glas')
              ),
          ])
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

      AttributeDefinitionDraftGraphql.presets
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
          AttributeLocalizedEnumTypeDraft.random().values([
            AttributeLocalizedEnumValueDraft.random()
              .key('black')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Black')
                  ['en-GB']('Black')
                  ['de-DE']('Schwarz')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('gray')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Gray')
                  ['en-GB']('Grey')
                  ['de-DE']('Grau')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('white')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('White')
                  ['en-GB']('White')
                  ['de-DE']('Weiß')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('blue')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Blue')
                  ['en-GB']('Blue')
                  ['de-DE']('Blau')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('brown')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Brown')
                  ['en-GB']('Brown')
                  ['de-DE']('Braun')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('green')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Green')
                  ['en-GB']('Green')
                  ['de-DE']('Grün')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('red')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Red')
                  ['en-GB']('Red')
                  ['de-DE']('Rot')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('purple')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Purple')
                  ['en-GB']('Purple')
                  ['de-DE']('Violett')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('pink')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Pink')
                  ['en-GB']('Pink')
                  ['de-DE']('Rosa')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('yellow')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Yellow')
                  ['en-GB']('Yellow')
                  ['de-DE']('Gelb')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('gold')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Gold')
                  ['en-GB']('Gold')
                  ['de-DE']('Gold')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('silver')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Silver')
                  ['en-GB']('Silver')
                  ['de-DE']('Silber')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('multicolored')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Multicolored')
                  ['en-GB']('Multicoloured')
                  ['de-DE']('Mehrfarbig')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('transparent')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Transparent')
                  ['en-GB']('Transparent')
                  ['de-DE']('Transparent')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('glass')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Glass')
                  ['en-GB']('Glass')
                  ['de-DE']('Glas')
              ),
          ])
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
          AttributeLocalizedEnumTypeDraft.random().values([
            AttributeLocalizedEnumValueDraft.random()
              .key('black')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Black')
                  ['en-GB']('Black')
                  ['de-DE']('Schwarz')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('gray')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Gray')
                  ['en-GB']('Grey')
                  ['de-DE']('Grau')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('white')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('White')
                  ['en-GB']('White')
                  ['de-DE']('Weiß')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('blue')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Blue')
                  ['en-GB']('Blue')
                  ['de-DE']('Blau')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('brown')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Brown')
                  ['en-GB']('Brown')
                  ['de-DE']('Braun')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('green')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Green')
                  ['en-GB']('Green')
                  ['de-DE']('Grün')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('red')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Red')
                  ['en-GB']('Red')
                  ['de-DE']('Rot')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('purple')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Purple')
                  ['en-GB']('Purple')
                  ['de-DE']('Violett')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('pink')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Pink')
                  ['en-GB']('Pink')
                  ['de-DE']('Rosa')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('yellow')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Yellow')
                  ['en-GB']('Yellow')
                  ['de-DE']('Gelb')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('gold')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Gold')
                  ['en-GB']('Gold')
                  ['de-DE']('Gold')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('silver')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Silver')
                  ['en-GB']('Silver')
                  ['de-DE']('Silber')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('multicolored')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Multicolored')
                  ['en-GB']('Multicoloured')
                  ['de-DE']('Mehrfarbig')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('transparent')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Transparent')
                  ['en-GB']('Transparent')
                  ['de-DE']('Transparent')
              ),
            AttributeLocalizedEnumValueDraft.random()
              .key('glass')
              .label(
                LocalizedStringDraft.presets
                  .empty()
                  ['en-US']('Glass')
                  ['en-GB']('Glass')
                  ['de-DE']('Glas')
              ),
          ])
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
        .type(AttributeTextTypeDraft.random())
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
        .type(AttributeTextTypeDraft.random())
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
