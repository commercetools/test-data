import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import collections from './collections';

describe(`with collections preset`, () => {
  it('should create a collections category type draft', () => {
    const collectionsPreset = collections().build<TCategoryDraft>();
    expect(collectionsPreset).toMatchObject(
      JSON.parse(`{
  "key": "collections",
  "name": {
    "en-GB": "Collections",
    "de-DE": "Sonderkollektionen",
    "en-US": "Collections"
  },
  "orderHint": ".7",
  "parent": {
    "key": "furniture",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "furniture-collections",
    "de-DE": "collections",
    "en-US": "furniture-collections"
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
      "locale": "en-GB",
      "value": "Collections"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Sonderkollektionen"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Collections"
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
      "locale": "en-GB",
      "value": "furniture-collections"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "collections"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "furniture-collections"
    }
  ]
}`)
    );
  });
});
