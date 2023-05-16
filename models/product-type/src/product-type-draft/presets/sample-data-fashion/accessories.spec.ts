import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import accessories from './accessories';

describe(`with accessories preset`, () => {
  it(`should create an accesories product type draft`, () => {
    const accessoriesProductType = accessories().build<TProductTypeDraft>();
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

  it(`should create an accesories product type draft when built for GraphQl`, () => {
    const accessoriesProductType =
      accessories().buildGraphql<TProductTypeDraftGraphql>();

    expect(accessoriesProductType).toMatchInlineSnapshot(`
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
                "value": "Type",
              },
            ],
            "isRequired": true,
            "isSearchable": true,
            "label": [
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Type",
              },
            ],
            "name": "type",
            "type": {
              "__typename": "enum",
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
            "inputTip": [
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Engraving",
              },
            ],
            "isRequired": false,
            "isSearchable": false,
            "label": [
              {
                "__typename": "LocalizedString",
                "locale": "en-US",
                "value": "Engraving",
              },
            ],
            "name": "engraving",
            "type": {
              "__typename": "text",
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
});
