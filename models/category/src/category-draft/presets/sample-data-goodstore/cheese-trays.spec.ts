import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
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
          "de-DE": "kaseplatten",
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
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Cheese Trays",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Cheese Trays",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Käseplatten",
          },
        ],
        "orderHint": ".12",
        "parent": {
          "__typename": "Reference",
          "key": "serveware",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "cheese-trays",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "cheese-trays",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "kaseplatten",
          },
        ],
      }
    `);
  });
});
