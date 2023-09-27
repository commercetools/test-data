import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import furniture from './furniture';

describe(`with furniture preset`, () => {
  it('should create a furniture category type draft', () => {
    const furniturePreset = furniture().build<TCategoryDraft>();
    expect(furniturePreset).toMatchObject(
      JSON.parse(`{
  "key": "furniture",
  "name": {
    "en-GB": "Furniture",
    "de-DE": "Möbel",
    "en-US": "Furniture"
  },
  "orderHint": "0.2",
  "slug": {
    "en-GB": "furniture",
    "de-DE": "furniture",
    "en-US": "furniture"
  }
}`)
    );
  });

  it('should create a furniture category type draft when built for Graphql', () => {
    const furniturePresetGraphql =
      furniture().buildGraphql<TCategoryDraftGraphql>();
    expect(furniturePresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "furniture",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Furniture"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Möbel"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Furniture"
    }
  ],
  "orderHint": "0.2",
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "furniture"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "furniture"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "furniture"
    }
  ]
}`)
    );
  });
});
