import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import barAccessories from './bar-accessories';

describe(`with barAccessories preset`, () => {
  it('should create a barAccessories category type draft', () => {
    const barAccessoriesPreset = barAccessories().build<TCategoryDraft>();
    expect(barAccessoriesPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "bar-accessories",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Barzubehör",
          "en": undefined,
          "en-GB": "Bar Accessories",
          "en-US": "Bar Accessories",
          "fr": undefined,
        },
        "orderHint": ".36",
        "parent": {
          "key": "bar-and-glassware",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "bar-accessories",
          "en": undefined,
          "en-GB": "bar-accessories",
          "en-US": "bar-accessories",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a barAccessories category type draft when built for Graphql', () => {
    const barAccessoriesPresetGraphql =
      barAccessories().buildGraphql<TCategoryDraftGraphql>();
    expect(barAccessoriesPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "bar-accessories",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Bar Accessories",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Bar Accessories",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Barzubehör",
          },
        ],
        "orderHint": ".36",
        "parent": {
          "__typename": "Reference",
          "key": "bar-and-glassware",
          "typeId": "category",
        },
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "bar-accessories",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "bar-accessories",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "bar-accessories",
          },
        ],
      }
    `);
  });
});
