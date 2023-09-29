import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bedroomFurniture from './bedroom-furniture';

describe(`with bedroomFurniture preset`, () => {
  it('should create a bedroomFurniture category type draft', () => {
    const bedroomFurniturePreset = bedroomFurniture().build<TCategoryDraft>();
    expect(bedroomFurniturePreset).toMatchObject(
      JSON.parse(`{
  "key": "bedroom-furniture",
  "name": {
    "en-US": "Bedroom Furniture",
    "en-GB": "Bedroom Furniture",
    "de-DE": "Schlafzimmer"
  },
  "orderHint": ".9",
  "parent": {
    "key": "furniture",
    "typeId": "category"
  },
  "slug": {
    "en-US": "bedroom-furniture",
    "en-GB": "bedroom-furniture",
    "de-DE": "bedroom-furniture"
  }
}`)
    );
  });

  it('should create a bedroomFurniture category type draft when built for Graphql', () => {
    const bedroomFurniturePresetGraphql =
      bedroomFurniture().buildGraphql<TCategoryDraftGraphql>();
    expect(bedroomFurniturePresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "bedroom-furniture",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Bedroom Furniture"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Bedroom Furniture"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Schlafzimmer"
    }
  ],
  "orderHint": ".9",
  "parent": {
    "__typename": "Reference",
    "key": "furniture",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "bedroom-furniture"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "bedroom-furniture"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "bedroom-furniture"
    }
  ]
}`)
    );
  });
});
