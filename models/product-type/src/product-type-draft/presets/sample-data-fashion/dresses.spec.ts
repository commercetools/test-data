import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import dresses from './dresses';

describe(`with dresses preset`, () => {
  it(`should create a dresses product type draft`, () => {
    const dressesProductType = dresses().build<TProductTypeDraft>();
    expect(dressesProductType.name).toMatchInlineSnapshot(`"Dresses"`);
    expect(dressesProductType.key).toMatchInlineSnapshot(`"dresses"`);
    expect(dressesProductType.description).toMatchInlineSnapshot(`"Dresses"`);
    expect(dressesProductType.attributes).toMatchInlineSnapshot(`
      [
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
      ]
    `);
  });

  it(`should create a dresses product type draft when built for graphql`, () => {
    const dressesProductTypeGraphql =
      dresses().buildGraphql<TProductTypeDraftGraphql>();
    expect(dressesProductTypeGraphql.name).toMatchInlineSnapshot(`"Dresses"`);
    expect(dressesProductTypeGraphql.key).toMatchInlineSnapshot(`"dresses"`);
    expect(dressesProductTypeGraphql.description).toMatchInlineSnapshot(
      `"Dresses"`
    );
    expect(dressesProductTypeGraphql.attributeDefinitions)
      .toMatchInlineSnapshot(`
      [
        {
          "__typename": "AttributeDefinitionDraft",
          "attributeConstraint": "CombinationUnique",
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
            "__typename": "enum",
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
          "__typename": "AttributeDefinitionDraft",
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
            "__typename": "enum",
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
      ]
    `);
  });
});
