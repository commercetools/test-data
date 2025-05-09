import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import dressers from './dressers';

describe(`with dressers preset`, () => {
  it('should create a dressers category type draft', () => {
    const dressersPreset = dressers().build<TCategoryDraft>();
    expect(dressersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "storage--tables",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Kommoden",
          "en": undefined,
          "en-GB": "Storage & Tables",
          "en-US": "Dressers",
          "fr": undefined,
        },
        "orderHint": ".1",
        "parent": {
          "key": "bedroom-furniture",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "dressers",
          "en": undefined,
          "en-GB": "storage-and-tables",
          "en-US": "storage-and-tables",
          "fr": undefined,
        },
      }
    `);
  });
  it('should create a dressers category type draft when built for Graphql', () => {
    const dressersPresetGraphql =
      dressers().buildGraphql<TCategoryDraftGraphql>();
    expect(dressersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "storage--tables",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Storage & Tables",
          },
          {
            "locale": "en-US",
            "value": "Dressers",
          },
          {
            "locale": "de-DE",
            "value": "Kommoden",
          },
        ],
        "orderHint": ".1",
        "parent": {
          "key": "bedroom-furniture",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "en-GB",
            "value": "storage-and-tables",
          },
          {
            "locale": "en-US",
            "value": "storage-and-tables",
          },
          {
            "locale": "de-DE",
            "value": "dressers",
          },
        ],
      }
    `);
  });
});
