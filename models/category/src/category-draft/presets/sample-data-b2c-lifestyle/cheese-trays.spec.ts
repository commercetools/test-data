import type { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import cheeseTrays from './cheese-trays';

describe(`with cheeseTrays preset`, () => {
  it('should create a cheeseTrays category type draft', () => {
    const cheeseTraysPreset = cheeseTrays().build<TCategoryDraft>();
    expect(cheeseTraysPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "cheese-trays",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Käseplatten",
          "en": undefined,
          "en-GB": "Cheese Trays",
          "en-US": "Cheese Trays",
          "fr": undefined,
        },
        "orderHint": ".12",
        "parent": {
          "key": "serveware",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "cheese-trays",
          "en": undefined,
          "en-GB": "cheese-trays",
          "en-US": "cheese-trays",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a cheeseTrays category type draft when built for Graphql', () => {
    const cheeseTraysPresetGraphql =
      cheeseTrays().buildGraphql<TCategoryDraftGraphql>();
    expect(cheeseTraysPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "cheese-trays",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Cheese Trays",
          },
          {
            "locale": "en-US",
            "value": "Cheese Trays",
          },
          {
            "locale": "de-DE",
            "value": "Käseplatten",
          },
        ],
        "orderHint": ".12",
        "parent": {
          "key": "serveware",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "en-GB",
            "value": "cheese-trays",
          },
          {
            "locale": "en-US",
            "value": "cheese-trays",
          },
          {
            "locale": "de-DE",
            "value": "cheese-trays",
          },
        ],
      }
    `);
  });
});
