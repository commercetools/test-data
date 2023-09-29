import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import plates from './plates';

describe(`with plates preset`, () => {
  it('should create a plates category type draft', () => {
    const platesPreset = plates().build<TCategoryDraft>();
    expect(platesPreset).toMatchObject(
      JSON.parse(`{
  "key": "plates",
  "name": {
    "en-US": "Plates",
    "en-GB": "Plates",
    "de-DE": "Platten"
  },
  "orderHint": ".82",
  "parent": {
    "key": "dinnerware",
    "typeId": "category"
  },
  "slug": {
    "en-US": "plates",
    "en-GB": "plates",
    "de-DE": "plates"
  }
}`)
    );
  });

  it('should create a plates category type draft when built for Graphql', () => {
    const platesPresetGraphql = plates().buildGraphql<TCategoryDraftGraphql>();
    expect(platesPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "plates",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Plates"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Plates"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Platten"
    }
  ],
  "orderHint": ".82",
  "parent": {
    "__typename": "Reference",
    "key": "dinnerware",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "plates"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "plates"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "plates"
    }
  ]
}`)
    );
  });
});
