import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import * as jacketsPresets from './jackets';

describe(`with jackets preset`, () => {
  it(`should create a jackets product type draft`, () => {
    const jacketsProductType = jacketsPresets
      .restPreset()
      .build<TProductTypeDraft>();

    expect(jacketsProductType).toMatchInlineSnapshot(`
      {
        "attributes": [
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
        ],
        "description": "Jackets",
        "key": "jackets",
        "name": "Jackets",
      }
    `);
  });

  it(`should create a jackets product type draft when built for graphql`, () => {
    const jacketsProductTypeGraphql = jacketsPresets
      .graphqlPreset()
      .buildGraphql<TProductTypeDraftGraphql>();

    expect(jacketsProductTypeGraphql).toMatchInlineSnapshot(`
      {
        "attributeDefinitions": [
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": [
              {
                "locale": "en-US",
                "value": "sleeve_length",
              },
            ],
            "isRequired": false,
            "isSearchable": false,
            "label": [
              {
                "locale": "en-US",
                "value": "sleeve_length",
              },
            ],
            "level": "Variant",
            "name": "sleeve_length",
            "type": {
              "enum": {
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
          },
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": [
              {
                "locale": "en-US",
                "value": "cotton",
              },
            ],
            "isRequired": false,
            "isSearchable": false,
            "label": [
              {
                "locale": "en-US",
                "value": "cotton",
              },
            ],
            "level": "Variant",
            "name": "cotton",
            "type": {
              "boolean": {
                "dummy": null,
              },
            },
          },
        ],
        "description": "Jackets",
        "key": "jackets",
        "name": "Jackets",
      }
    `);
  });
});
