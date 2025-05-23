import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import dresses from './dresses';

describe(`with dresses preset`, () => {
  it(`should create a dresses product type draft`, () => {
    const dressesProductType = dresses().build<TProductTypeDraft>();

    expect(dressesProductType).toMatchInlineSnapshot(`
      {
        "attributes": [
          {
            "attributeConstraint": "CombinationUnique",
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
                  "key": "Maxi",
                  "label": "Maxi",
                },
                {
                  "key": "Knee Length",
                  "label": "Knee Length",
                },
                {
                  "key": "Mini",
                  "label": "Mini",
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
                  "key": "White",
                  "label": "White",
                },
                {
                  "key": "Pink",
                  "label": "Pink",
                },
                {
                  "key": "Floral",
                  "label": "Floral",
                },
              ],
            },
          },
        ],
        "description": "Dresses",
        "key": "dresses",
        "name": "Dresses",
      }
    `);
  });

  it(`should create a dresses product type draft when built for graphql`, () => {
    const dressesProductTypeGraphql =
      dresses().buildGraphql<TProductTypeDraftGraphql>();

    expect(dressesProductTypeGraphql).toMatchInlineSnapshot(`
      {
        "attributeDefinitions": [
          {
            "attributeConstraint": "CombinationUnique",
            "inputHint": "SingleLine",
            "inputTip": [
              {
                "locale": "en-US",
                "value": "Length",
              },
            ],
            "isRequired": false,
            "isSearchable": false,
            "label": [
              {
                "locale": "en-US",
                "value": "Length",
              },
            ],
            "name": "length",
            "type": {
              "name": "enum",
              "values": [
                {
                  "key": "Maxi",
                  "label": "Maxi",
                },
                {
                  "key": "Knee Length",
                  "label": "Knee Length",
                },
                {
                  "key": "Mini",
                  "label": "Mini",
                },
              ],
            },
          },
          {
            "attributeConstraint": "CombinationUnique",
            "inputHint": "SingleLine",
            "inputTip": [
              {
                "locale": "en-US",
                "value": "Color",
              },
            ],
            "isRequired": false,
            "isSearchable": false,
            "label": [
              {
                "locale": "en-US",
                "value": "Color",
              },
            ],
            "name": "color",
            "type": {
              "name": "enum",
              "values": [
                {
                  "key": "White",
                  "label": "White",
                },
                {
                  "key": "Pink",
                  "label": "Pink",
                },
                {
                  "key": "Floral",
                  "label": "Floral",
                },
              ],
            },
          },
        ],
        "description": "Dresses",
        "key": "dresses",
        "name": "Dresses",
      }
    `);
  });
});
