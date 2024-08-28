import type { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import serveware from './serveware';

describe(`with serveware preset`, () => {
  it('should create a serveware category type draft', () => {
    const servewarePreset = serveware().build<TCategoryDraft>();
    expect(servewarePreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "serveware",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Alles zum Servieren",
          "en": undefined,
          "en-GB": "Collections",
          "en-US": "Kitchen Collections",
          "fr": undefined,
        },
        "orderHint": ".86",
        "parent": {
          "key": "kitchen",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "serveware",
          "en": undefined,
          "en-GB": "kitchen-collections",
          "en-US": "kitchen-collections",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a serveware category type draft when built for Graphql', () => {
    const servewarePresetGraphql =
      serveware().buildGraphql<TCategoryDraftGraphql>();
    expect(servewarePresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "serveware",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Collections",
          },
          {
            "locale": "en-US",
            "value": "Kitchen Collections",
          },
          {
            "locale": "de-DE",
            "value": "Alles zum Servieren",
          },
        ],
        "orderHint": ".86",
        "parent": {
          "key": "kitchen",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "en-GB",
            "value": "kitchen-collections",
          },
          {
            "locale": "en-US",
            "value": "kitchen-collections",
          },
          {
            "locale": "de-DE",
            "value": "serveware",
          },
        ],
      }
    `);
  });
});
