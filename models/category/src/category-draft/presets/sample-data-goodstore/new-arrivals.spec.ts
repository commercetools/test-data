import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import newArrivals from './new-arrivals';

describe(`with newArrivals preset`, () => {
  it('should create a newArrivals category type draft', () => {
    const newArrivalsPreset = newArrivals().build<TCategoryDraft>();
    expect(newArrivalsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "new-arrivals",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Neuheiten",
          "en": undefined,
          "en-GB": "New Arrivals",
          "en-US": "New Arrivals",
          "fr": undefined,
        },
        "orderHint": "0.4",
        "parent": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "ganz-neu",
          "en": undefined,
          "en-GB": "new-arrivals",
          "en-US": "new-arrivals",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a newArrivals category type draft when built for Graphql', () => {
    const newArrivalsPresetGraphql =
      newArrivals().buildGraphql<TCategoryDraftGraphql>();
    expect(newArrivalsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "new-arrivals",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "New Arrivals",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "New Arrivals",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Neuheiten",
          },
        ],
        "orderHint": "0.4",
        "parent": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "new-arrivals",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "new-arrivals",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "ganz-neu",
          },
        ],
      }
    `);
  });
});
