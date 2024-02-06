import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import barAndGlassware from './bar-and-glassware';

describe(`with barAndGlassware preset`, () => {
  it('should create a barAndGlassware category type draft', () => {
    const barAndGlasswarePreset = barAndGlassware().build<TCategoryDraft>();
    expect(barAndGlasswarePreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "bar-and-glassware",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Gläser und Barzubehör",
          "en": undefined,
          "en-GB": "Bar and Glassware",
          "en-US": "Bar and Glassware",
          "fr": undefined,
        },
        "orderHint": ".82",
        "parent": {
          "key": "kitchen",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "bar-and-glassware",
          "en": undefined,
          "en-GB": "bar-and-glassware",
          "en-US": "bar-and-glassware",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a barAndGlassware category type draft when built for Graphql', () => {
    const barAndGlasswarePresetGraphql =
      barAndGlassware().buildGraphql<TCategoryDraftGraphql>();
    expect(barAndGlasswarePresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "bar-and-glassware",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Bar and Glassware",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Bar and Glassware",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Gläser und Barzubehör",
          },
        ],
        "orderHint": ".82",
        "parent": {
          "key": "kitchen",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "bar-and-glassware",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "bar-and-glassware",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "bar-and-glassware",
          },
        ],
      }
    `);
  });
});
