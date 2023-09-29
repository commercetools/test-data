import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import beds from './beds';

describe(`with beds preset`, () => {
  it('should create a beds category type draft', () => {
    const bedsPreset = beds().build<TCategoryDraft>();
    expect(bedsPreset).toMatchObject(
      JSON.parse(`{
  "key": "beds",
  "name": {
    "en-US": "Beds",
    "en-GB": "Beds",
    "de-DE": "Betten"
  },
  "orderHint": ".4",
  "parent": {
    "key": "bedroom-furniture",
    "typeId": "category"
  },
  "slug": {
    "en-US": "beds",
    "en-GB": "beds",
    "de-DE": "beds"
  }
}`)
    );
  });

  it('should create a beds category type draft when built for Graphql', () => {
    const bedsPresetGraphql = beds().buildGraphql<TCategoryDraftGraphql>();
    expect(bedsPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "beds",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Beds"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Beds"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Betten"
    }
  ],
  "orderHint": ".4",
  "parent": {
    "__typename": "Reference",
    "key": "bedroom-furniture",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "beds"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "beds"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "beds"
    }
  ]
}`)
    );
  });
});
