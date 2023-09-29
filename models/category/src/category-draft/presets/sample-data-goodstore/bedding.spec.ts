import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bedding from './bedding';

describe(`with bedding preset`, () => {
  it('should create a bedding category type draft', () => {
    const beddingPreset = bedding().build<TCategoryDraft>();
    expect(beddingPreset).toMatchObject(
      JSON.parse(`{
  "key": "bedding",
  "name": {
    "en-US": "Bedding",
    "en-GB": "Bedding",
    "de-DE": "Bettwäsche"
  },
  "orderHint": ".5",
  "parent": {
    "key": "home-decor",
    "typeId": "category"
  },
  "slug": {
    "en-US": "bedding",
    "en-GB": "bedding",
    "de-DE": "bettwsche"
  }
}`)
    );
  });

  it('should create a bedding category type draft when built for Graphql', () => {
    const beddingPresetGraphql =
      bedding().buildGraphql<TCategoryDraftGraphql>();
    expect(beddingPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "bedding",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Bedding"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Bedding"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Bettwäsche"
    }
  ],
  "orderHint": ".5",
  "parent": {
    "__typename": "Reference",
    "key": "home-decor",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "bedding"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "bedding"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "bettwsche"
    }
  ]
}`)
    );
  });
});
