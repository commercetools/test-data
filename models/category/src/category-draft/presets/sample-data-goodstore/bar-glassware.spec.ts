import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import barGlassware from './bar-glassware';

describe(`with barGlassware preset`, () => {
  it('should create a barGlassware category type draft', () => {
    const barGlasswarePreset = barGlassware().build<TCategoryDraft>();
    expect(barGlasswarePreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "bar-glassware",
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
          "de-DE": "glaser-und-barzubehor",
          "en": undefined,
          "en-GB": "bar-and-glassware",
          "en-US": "bar-and-glassware",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a barGlassware category type draft when built for Graphql', () => {
    const barGlasswarePresetGraphql =
      barGlassware().buildGraphql<TCategoryDraftGraphql>();
    expect(barGlasswarePresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "bar-glassware",
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
          "__typename": "Reference",
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
            "value": "glaser-und-barzubehor",
          },
        ],
      }
    `);
  });
});
