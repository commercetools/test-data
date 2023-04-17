import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import accessories from './accessories';

describe(`with accessories preset`, () => {
  it(`should create an accesories product type draft`, () => {
    const accesoriesProductType = accessories().build<TProductTypeDraft>();
    expect(accesoriesProductType.name).toMatchInlineSnapshot(`"Accessories"`);
    expect(accesoriesProductType.key).toMatchInlineSnapshot(`"accessories"`);
    expect(accesoriesProductType.description).toMatchInlineSnapshot(
      `"Accessories"`
    );
    expect(accesoriesProductType.attributes).toMatchInlineSnapshot(`
      [
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
      ]
    `);
  });

  it(`should create an accesories product type draft when built for GraphQl`, () => {
    const accesoriesProductType =
      accessories().buildGraphql<TProductTypeDraftGraphql>();
    expect(accesoriesProductType.name).toMatchInlineSnapshot(`"Accessories"`);
    expect(accesoriesProductType.key).toMatchInlineSnapshot(`"accessories"`);
    expect(accesoriesProductType.description).toMatchInlineSnapshot(
      `"Accessories"`
    );
    expect(accesoriesProductType.attributeDefinitions).toMatchInlineSnapshot(`
      [
        {
          "__typename": "AttributeDefinitionDraft",
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
          "__typename": "AttributeDefinitionDraft",
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
      ]
    `);
  });
});
