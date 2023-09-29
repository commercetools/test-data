import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import furniture from './furniture';

describe(`with furniture preset`, () => {
  it('should create a furniture category type draft', () => {
    const furniturePreset = furniture().build<TCategoryDraft>();
    expect(furniturePreset).toMatchObject(
      JSON.parse(`{
  "key": "furniture",
  "name": {
    "en-US": "Furniture",
    "en-GB": "Furniture",
    "de-DE": "Möbel"
  },
  "orderHint": "0.2",
  "slug": {
    "en-US": "furniture",
    "en-GB": "furniture",
    "de-DE": "furniture"
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
      "locale": "en-US",
      "value": "Furniture"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Furniture"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Möbel"
    }
  ],
  "orderHint": "0.2",
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "furniture"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "furniture"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "furniture"
    }
  ]
}`)
    );
  });
});
