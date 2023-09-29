import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import collections from './collections';

describe(`with collections preset`, () => {
  it('should create a collections category type draft', () => {
    const collectionsPreset = collections().build<TCategoryDraft>();
    expect(collectionsPreset).toMatchObject(
      JSON.parse(`{
  "key": "collections",
  "name": {
    "en-US": "Collections",
    "en-GB": "Collections",
    "de-DE": "Sonderkollektionen"
  },
  "orderHint": ".7",
  "parent": {
    "key": "furniture",
    "typeId": "category"
  },
  "slug": {
    "en-US": "furniture-collections",
    "en-GB": "furniture-collections",
    "de-DE": "collections"
  }
}`)
    );
  });

  it('should create a collections category type draft when built for Graphql', () => {
    const collectionsPresetGraphql =
      collections().buildGraphql<TCategoryDraftGraphql>();
    expect(collectionsPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "collections",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Collections"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Collections"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Sonderkollektionen"
    }
  ],
  "orderHint": ".7",
  "parent": {
    "__typename": "Reference",
    "key": "furniture",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "furniture-collections"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "furniture-collections"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "collections"
    }
  ]
}`)
    );
  });
});
