import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import jackets from './jackets';

describe(`with jackets preset`, () => {
  it(`should create a jackets product type draft`, () => {
    const jacketsProductType = jackets().build<TProductTypeDraft>();
    expect(jacketsProductType.name).toMatchInlineSnapshot(`"Jackets"`);
    expect(jacketsProductType.key).toMatchInlineSnapshot(`"jackets"`);
    expect(jacketsProductType.description).toMatchInlineSnapshot(`"Jackets"`);
    expect(jacketsProductType.attributes).toMatchInlineSnapshot(`
      [
        {
          "attributeConstraint": "None",
          "inputHint": "SingleLine",
          "inputTip": {
            "de": undefined,
            "en": undefined,
            "en-US": "sleeve_length",
            "fr": undefined,
          },
          "isRequired": false,
          "isSearchable": false,
          "label": {
            "de": undefined,
            "en": undefined,
            "en-US": "sleeve_length",
            "fr": undefined,
          },
          "name": "sleeve_length",
          "type": {
            "name": "enum",
            "values": [
              {
                "key": "Crop",
                "label": "Crop",
              },
              {
                "key": "Normal",
                "label": "Normal",
              },
              {
                "key": "Extra Long",
                "label": "Extra Long",
              },
            ],
          },
        },
        {
          "attributeConstraint": "None",
          "inputHint": "SingleLine",
          "inputTip": {
            "de": undefined,
            "en": undefined,
            "en-US": "cotton",
            "fr": undefined,
          },
          "isRequired": false,
          "isSearchable": false,
          "label": {
            "de": undefined,
            "en": undefined,
            "en-US": "cotton",
            "fr": undefined,
          },
          "name": "cotton",
          "type": {
            "name": "boolean",
          },
        },
      ]
    `);
  });

  it(`should create a jackets product type draft when built for graphql`, () => {
    const jacketsProductTypeGraphql =
      jackets().buildGraphql<TProductTypeDraftGraphql>();
    expect(jacketsProductTypeGraphql.name).toMatchInlineSnapshot(`"Jackets"`);
    expect(jacketsProductTypeGraphql.key).toMatchInlineSnapshot(`"jackets"`);
    expect(jacketsProductTypeGraphql.description).toMatchInlineSnapshot(
      `"Jackets"`
    );
    expect(jacketsProductTypeGraphql.attributeDefinitions)
      .toMatchInlineSnapshot(`
      [
        {
          "__typename": "AttributeDefinitionDraft",
          "attributeConstraint": "None",
          "inputHint": "SingleLine",
          "inputTip": [
            {
              "__typename": "LocalizedString",
              "locale": "en-US",
              "value": "sleeve_length",
            },
          ],
          "isRequired": false,
          "isSearchable": false,
          "label": [
            {
              "__typename": "LocalizedString",
              "locale": "en-US",
              "value": "sleeve_length",
            },
          ],
          "name": "sleeve_length",
          "type": {
            "__typename": "enum",
            "name": "enum",
            "values": [
              {
                "key": "Crop",
                "label": "Crop",
              },
              {
                "key": "Normal",
                "label": "Normal",
              },
              {
                "key": "Extra Long",
                "label": "Extra Long",
              },
            ],
          },
        },
        {
          "__typename": "AttributeDefinitionDraft",
          "attributeConstraint": "None",
          "inputHint": "SingleLine",
          "inputTip": [
            {
              "__typename": "LocalizedString",
              "locale": "en-US",
              "value": "cotton",
            },
          ],
          "isRequired": false,
          "isSearchable": false,
          "label": [
            {
              "__typename": "LocalizedString",
              "locale": "en-US",
              "value": "cotton",
            },
          ],
          "name": "cotton",
          "type": {
            "__typename": "boolean",
            "name": "boolean",
          },
        },
      ]
    `);
  });
});
