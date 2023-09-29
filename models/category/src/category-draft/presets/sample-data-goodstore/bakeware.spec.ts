import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bakeware from './bakeware';

describe(`with bakeware preset`, () => {
  it('should create a bakeware category type draft', () => {
    const bakewarePreset = bakeware().build<TCategoryDraft>();
    expect(bakewarePreset).toMatchObject(
      JSON.parse(`{
  "key": "bakeware",
  "name": {
    "en-US": "Bakeware",
    "en-GB": "Bakeware",
    "de-DE": "Backutensilien"
  },
  "orderHint": ".42",
  "parent": {
    "key": "dinnerware",
    "typeId": "category"
  },
  "slug": {
    "en-US": "bakeware",
    "en-GB": "bakeware",
    "de-DE": "bakeware"
  }
}`)
    );
  });

  it('should create a bakeware category type draft when built for Graphql', () => {
    const bakewarePresetGraphql =
      bakeware().buildGraphql<TCategoryDraftGraphql>();
    expect(bakewarePresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "bakeware",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Bakeware"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Bakeware"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Backutensilien"
    }
  ],
  "orderHint": ".42",
  "parent": {
    "__typename": "Reference",
    "key": "dinnerware",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "bakeware"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "bakeware"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "bakeware"
    }
  ]
}`)
    );
  });
});
