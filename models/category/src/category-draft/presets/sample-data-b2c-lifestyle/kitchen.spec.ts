import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import kitchen from './kitchen';

describe(`with kitchen preset`, () => {
  it('should create a kitchen category type draft', () => {
    const kitchenPreset = kitchen().build<TCategoryDraft>();
    expect(kitchenPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "kitchen",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Küche",
          "en": undefined,
          "en-GB": "Kitchen",
          "en-US": "Kitchen",
          "fr": undefined,
        },
        "orderHint": "0.3",
        "parent": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "kitchen",
          "en": undefined,
          "en-GB": "kitchen",
          "en-US": "kitchen",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a kitchen category type draft when built for Graphql', () => {
    const kitchenPresetGraphql =
      kitchen().buildGraphql<TCategoryDraftGraphql>();
    expect(kitchenPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "kitchen",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Kitchen",
          },
          {
            "locale": "en-US",
            "value": "Kitchen",
          },
          {
            "locale": "de-DE",
            "value": "Küche",
          },
        ],
        "orderHint": "0.3",
        "parent": undefined,
        "slug": [
          {
            "locale": "en-GB",
            "value": "kitchen",
          },
          {
            "locale": "en-US",
            "value": "kitchen",
          },
          {
            "locale": "de-DE",
            "value": "kitchen",
          },
        ],
      }
    `);
  });
});
