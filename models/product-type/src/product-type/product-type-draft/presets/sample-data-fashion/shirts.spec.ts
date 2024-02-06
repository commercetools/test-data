import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import shirts from './shirts';

describe(`with shirts preset`, () => {
  it(`should create a shirts product type draft`, () => {
    const shirtsProductType = shirts().build<TProductTypeDraft>();

    expect(shirtsProductType).toMatchInlineSnapshot(`
      {
        "attributes": [
          {
            "attributeConstraint": "CombinationUnique",
            "inputHint": "SingleLine",
            "inputTip": {
              "de": undefined,
              "en": undefined,
              "en-US": "Size",
              "fr": undefined,
            },
            "isRequired": false,
            "isSearchable": false,
            "label": {
              "de": undefined,
              "en": undefined,
              "en-US": "Size",
              "fr": undefined,
            },
            "name": "size",
            "type": {
              "name": "enum",
              "values": [
                {
                  "key": "Small",
                  "label": "Small",
                },
                {
                  "key": "Medium",
                  "label": "Medium",
                },
                {
                  "key": "Large",
                  "label": "Large",
                },
              ],
            },
          },
          {
            "attributeConstraint": "CombinationUnique",
            "inputHint": "SingleLine",
            "inputTip": {
              "de": undefined,
              "en": undefined,
              "en-US": "Color",
              "fr": undefined,
            },
            "isRequired": false,
            "isSearchable": false,
            "label": {
              "de": undefined,
              "en": undefined,
              "en-US": "Color",
              "fr": undefined,
            },
            "name": "color",
            "type": {
              "name": "enum",
              "values": [
                {
                  "key": "Red",
                  "label": "Red",
                },
                {
                  "key": "Green",
                  "label": "Green",
                },
                {
                  "key": "Purple",
                  "label": "Purple",
                },
                {
                  "key": "Multi-Color",
                  "label": "Multi-Color",
                },
              ],
            },
          },
        ],
        "description": "Shirts",
        "key": "shirts",
        "name": "Shirts",
      }
    `);
  });

  it(`should create a shirts product type draft when built for graphql`, () => {
    const shirtsProductTypeGraphql =
      shirts().buildGraphql<TProductTypeDraftGraphql>();

    expect(shirtsProductTypeGraphql).toMatchInlineSnapshot(`
      {
        "attributeDefinitions": [
          {
            "attributeConstraint": "CombinationUnique",
            "inputHint": "SingleLine",
            "inputTip": [
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Size",
              },
            ],
            "isRequired": false,
            "isSearchable": false,
            "label": [
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Size",
              },
            ],
            "name": "size",
            "type": {
              "enum": {
                "values": [
                  {
                    "key": "Small",
                    "label": "Small",
                  },
                  {
                    "key": "Medium",
                    "label": "Medium",
                  },
                  {
                    "key": "Large",
                    "label": "Large",
                  },
                ],
              },
            },
          },
          {
            "attributeConstraint": "CombinationUnique",
            "inputHint": "SingleLine",
            "inputTip": [
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Color",
              },
            ],
            "isRequired": false,
            "isSearchable": false,
            "label": [
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Color",
              },
            ],
            "name": "color",
            "type": {
              "enum": {
                "values": [
                  {
                    "key": "Red",
                    "label": "Red",
                  },
                  {
                    "key": "Green",
                    "label": "Green",
                  },
                  {
                    "key": "Purple",
                    "label": "Purple",
                  },
                  {
                    "key": "Multi-Color",
                    "label": "Multi-Color",
                  },
                ],
              },
            },
          },
        ],
        "description": "Shirts",
        "key": "shirts",
        "name": "Shirts",
      }
    `);
  });
});
