import type {
  TProductTypeDraftGraphql,
  TProductTypeDraftRest,
} from '../../../types';
import { restPreset, graphqlPreset } from './accessories';

describe(`with accessories preset`, () => {
  it(`should create an accessories product type draft`, () => {
    const accessoriesProductType = restPreset().build<TProductTypeDraftRest>();
    expect(accessoriesProductType).toMatchInlineSnapshot(`
      {
        "attributes": [
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": {
              "de": undefined,
              "en": undefined,
              "en-US": "Type",
              "fr": undefined,
            },
            "isRequired": true,
            "isSearchable": true,
            "label": {
              "de": undefined,
              "en": undefined,
              "en-US": "Type",
              "fr": undefined,
            },
            "name": "type",
            "type": {
              "name": "enum",
              "values": [
                {
                  "key": "Jewelry",
                  "label": "Jewelry",
                },
                {
                  "key": "Bag",
                  "label": "Bag",
                },
                {
                  "key": "Shoes",
                  "label": "Shoes",
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
              "en-US": "Engraving",
              "fr": undefined,
            },
            "isRequired": false,
            "isSearchable": false,
            "label": {
              "de": undefined,
              "en": undefined,
              "en-US": "Engraving",
              "fr": undefined,
            },
            "name": "engraving",
            "type": {
              "name": "text",
            },
          },
        ],
        "description": "Accessories",
        "key": "accessories",
        "name": "Accessories",
      }
    `);
  });

  it(`should create an accessories product type draft when built for GraphQl`, () => {
    const accessoriesProductType =
      graphqlPreset().build<TProductTypeDraftGraphql>();

    expect(accessoriesProductType).toMatchInlineSnapshot(`
      {
        "attributeDefinitions": [
          {
            "attributeConstraint": "None",
            "inputHint": "SingleLine",
            "inputTip": [
              {
                "locale": "en-US",
                "value": "Type",
              },
            ],
            "isRequired": true,
            "isSearchable": true,
            "label": [
              {
                "locale": "en-US",
                "value": "Type",
              },
            ],
            "level": "Variant",
            "name": "type",
            "type": {
              "enum": {
                "values": [
                  {
                    "key": "Jewelry",
                    "label": "Jewelry",
                  },
                  {
                    "key": "Bag",
                    "label": "Bag",
                  },
                  {
                    "key": "Shoes",
                    "label": "Shoes",
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
                "value": "Engraving",
              },
            ],
            "isRequired": false,
            "isSearchable": false,
            "label": [
              {
                "locale": "en-US",
                "value": "Engraving",
              },
            ],
            "level": "Variant",
            "name": "engraving",
            "type": {
              "text": {
                "dummy": null,
              },
            },
          },
        ],
        "description": "Accessories",
        "key": "accessories",
        "name": "Accessories",
      }
    `);
  });
});
