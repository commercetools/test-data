import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import servingPlatters from './serving-platters';

describe(`with servingPlatters preset`, () => {
  it('should create a servingPlatters category type draft', () => {
    const servingPlattersPreset = servingPlatters().build<TCategoryDraft>();
    expect(servingPlattersPreset).toMatchObject(
      JSON.parse(`{
  "key": "serving-platters",
  "name": {
    "en-GB": "Serving Platters",
    "de-DE": "Servierplatten",
    "en-US": "Serving Platters"
  },
  "orderHint": ".0004",
  "parent": {
    "key": "serveware",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "serving-platters",
    "de-DE": "serving-platters",
    "en-US": "serving-platters"
  }
}`)
    );
  });

  it('should create a servingPlatters category type draft when built for Graphql', () => {
    const servingPlattersPresetGraphql =
      servingPlatters().buildGraphql<TCategoryDraftGraphql>();
    expect(servingPlattersPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "serving-platters",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Serving Platters"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Servierplatten"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Serving Platters"
    }
  ],
  "orderHint": ".0004",
  "parent": {
    "__typename": "Reference",
    "key": "serveware",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "serving-platters"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "serving-platters"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "serving-platters"
    }
  ]
}`)
    );
  });
});
