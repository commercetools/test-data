import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import shirts from './shirts';

describe(`with shirts preset`, () => {
  it(`should create a shirts product type draft`, () => {
    const shirtsProductType = shirts().build<TProductTypeDraft>();
    expect(shirtsProductType.name).toMatchInlineSnapshot(`"Shirts"`);
    expect(shirtsProductType.key).toMatchInlineSnapshot(`"shirts"`);
    expect(shirtsProductType.description).toMatchInlineSnapshot(`"Shirts"`);
    expect(shirtsProductType.attributes).toMatchInlineSnapshot(`
      [
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
      ]
    `);
  });

  it(`should create a shirts product type draft when built for graphql`, () => {
    const shirtsProductTypeGraphql =
      shirts().buildGraphql<TProductTypeDraftGraphql>();
    expect(shirtsProductTypeGraphql.name).toMatchInlineSnapshot(`"Shirts"`);
    expect(shirtsProductTypeGraphql.key).toMatchInlineSnapshot(`"shirts"`);
    expect(shirtsProductTypeGraphql.description).toMatchInlineSnapshot(
      `"Shirts"`
    );
    expect(shirtsProductTypeGraphql.attributeDefinitions)
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
            "__typename": "enum",
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
      ]
    `);
  });
});
