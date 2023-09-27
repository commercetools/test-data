import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import dinnerware from './dinnerware';

describe(`with dinnerware preset`, () => {
  it('should create a dinnerware category type draft', () => {
    const dinnerwarePreset = dinnerware().build<TCategoryDraft>();
    expect(dinnerwarePreset).toMatchObject(
      JSON.parse(`{
  "key": "dinnerware",
  "name": {
    "en-GB": "Serving & Tableware",
    "de-DE": "Geschirr",
    "en-US": "Dinnerware"
  },
  "orderHint": ".75",
  "parent": {
    "key": "kitchen",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "serving-and-tableware",
    "de-DE": "dinnerware",
    "en-US": "serving-and-tableware"
  }
}`)
    );
  });

  it('should create a dinnerware category type draft when built for Graphql', () => {
    const dinnerwarePresetGraphql =
      dinnerware().buildGraphql<TCategoryDraftGraphql>();
    expect(dinnerwarePresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "dinnerware",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Serving & Tableware"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Geschirr"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Dinnerware"
    }
  ],
  "orderHint": ".75",
  "parent": {
    "__typename": "Reference",
    "key": "kitchen",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "serving-and-tableware"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "dinnerware"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "serving-and-tableware"
    }
  ]
}`)
    );
  });
});
