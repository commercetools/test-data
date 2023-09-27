import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import theTraditionalist from './the-traditionalist';

describe(`with theTraditionalist preset`, () => {
  it('should create a theTraditionalist category type draft', () => {
    const theTraditionalistPreset = theTraditionalist().build<TCategoryDraft>();
    expect(theTraditionalistPreset).toMatchObject(
      JSON.parse(`{
  "key": "the-traditionalist",
  "name": {
    "en-GB": "The Traditionalist",
    "de-DE": "The Traditionalist",
    "en-US": "The Traditionalist"
  },
  "orderHint": "0.0033",
  "parent": {
    "key": "collections",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "the-traditionalist",
    "de-DE": "the-traditionalist",
    "en-US": "the-traditionalist"
  }
}`)
    );
  });

  it('should create a theTraditionalist category type draft when built for Graphql', () => {
    const theTraditionalistPresetGraphql =
      theTraditionalist().buildGraphql<TCategoryDraftGraphql>();
    expect(theTraditionalistPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "the-traditionalist",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "The Traditionalist"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "The Traditionalist"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "The Traditionalist"
    }
  ],
  "orderHint": "0.0033",
  "parent": {
    "__typename": "Reference",
    "key": "collections",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "the-traditionalist"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "the-traditionalist"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "the-traditionalist"
    }
  ]
}`)
    );
  });
});
