import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bedroomFurniture from './bedroom-furniture';
describe(`with bedroomFurniture preset`, () => {
  it('should create a bedroomFurniture category type draft', () => {
    const bedroomFurniturePreset = bedroomFurniture().build<TCategoryDraft>();
    expect(bedroomFurniturePreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "bedroom-furniture",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Schlafzimmer",
          "en": undefined,
          "en-GB": "Bedroom Furniture",
          "en-US": "Bedroom Furniture",
          "fr": undefined,
        },
        "orderHint": ".9",
        "parent": {
          "key": "furniture",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "bedroom-furniture",
          "en": undefined,
          "en-GB": "bedroom-furniture",
          "en-US": "bedroom-furniture",
          "fr": undefined,
        },
      }
    `);
  });

  it('should create a bedroomFurniture category type draft when built for Graphql', () => {
    const bedroomFurniturePresetGraphql =
      bedroomFurniture().buildGraphql<TCategoryDraftGraphql>();
    expect(bedroomFurniturePresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "bedroom-furniture",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Bedroom Furniture",
          },
          {
            "locale": "en-US",
            "value": "Bedroom Furniture",
          },
          {
            "locale": "de-DE",
            "value": "Schlafzimmer",
          },
        ],
        "orderHint": ".9",
        "parent": {
          "key": "furniture",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "en-GB",
            "value": "bedroom-furniture",
          },
          {
            "locale": "en-US",
            "value": "bedroom-furniture",
          },
          {
            "locale": "de-DE",
            "value": "bedroom-furniture",
          },
        ],
      }
    `);
  });
});
