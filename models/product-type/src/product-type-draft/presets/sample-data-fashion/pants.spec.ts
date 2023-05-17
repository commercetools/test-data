import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import pants from './pants';

describe(`with pants preset`, () => {
  it(`should create a pants product type draft`, () => {
    const pantsProductType = pants().build<TProductTypeDraft>();

    expect(pantsProductType).toMatchInlineSnapshot(`
      {
        "attributes": [
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": {
              "de": undefined,
              "en": undefined,
              "en-US": "Size",
              "fr": undefined,
            },
            "isRequired": true,
            "isSearchable": true,
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
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": {
              "de": undefined,
              "en": undefined,
              "en-US": "Fit",
              "fr": undefined,
            },
            "isRequired": false,
            "isSearchable": true,
            "label": {
              "de": undefined,
              "en": undefined,
              "en-US": "Fit",
              "fr": undefined,
            },
            "name": "fit",
            "type": {
              "name": "enum",
              "values": [
                {
                  "key": "Slim",
                  "label": "Slim",
                },
                {
                  "key": "Straight",
                  "label": "Straight",
                },
                {
                  "key": "Flair",
                  "label": "Flair",
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
              "en-US": "Color",
              "fr": undefined,
            },
            "isRequired": false,
            "isSearchable": true,
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
                  "key": "Blue",
                  "label": "Blue",
                },
                {
                  "key": "Black",
                  "label": "Black",
                },
                {
                  "key": "White",
                  "label": "White",
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
              "en-US": "Length",
              "fr": undefined,
            },
            "isRequired": false,
            "isSearchable": false,
            "label": {
              "de": undefined,
              "en": undefined,
              "en-US": "Length",
              "fr": undefined,
            },
            "name": "length",
            "type": {
              "name": "enum",
              "values": [
                {
                  "key": "Ankle",
                  "label": "Ankle",
                },
                {
                  "key": "Crop",
                  "label": "Crop",
                },
                {
                  "key": "Extra Long",
                  "label": "Extra Long",
                },
              ],
            },
          },
        ],
        "description": "Pants",
        "key": "pants",
        "name": "Pants",
      }
    `);
  });

  it(`should create a pants product type draft when built for graphql`, () => {
    const pantsProductTypeGraphql =
      pants().buildGraphql<TProductTypeDraftGraphql>();

    expect(pantsProductTypeGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "ProductTypeDraft",
        "attributeDefinitions": [
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": [
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Size",
              },
            ],
            "isRequired": true,
            "isSearchable": true,
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
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": [
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Fit",
              },
            ],
            "isRequired": false,
            "isSearchable": true,
            "label": [
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Fit",
              },
            ],
            "name": "fit",
            "type": {
              "enum": {
                "values": [
                  {
                    "key": "Slim",
                    "label": "Slim",
                  },
                  {
                    "key": "Straight",
                    "label": "Straight",
                  },
                  {
                    "key": "Flair",
                    "label": "Flair",
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
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Color",
              },
            ],
            "isRequired": false,
            "isSearchable": true,
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
                    "key": "Blue",
                    "label": "Blue",
                  },
                  {
                    "key": "Black",
                    "label": "Black",
                  },
                  {
                    "key": "White",
                    "label": "White",
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
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Length",
              },
            ],
            "isRequired": false,
            "isSearchable": false,
            "label": [
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Length",
              },
            ],
            "name": "length",
            "type": {
              "enum": {
                "values": [
                  {
                    "key": "Ankle",
                    "label": "Ankle",
                  },
                  {
                    "key": "Crop",
                    "label": "Crop",
                  },
                  {
                    "key": "Extra Long",
                    "label": "Extra Long",
                  },
                ],
              },
            },
          },
        ],
        "description": "Pants",
        "key": "pants",
        "name": "Pants",
      }
    `);
  });
});
