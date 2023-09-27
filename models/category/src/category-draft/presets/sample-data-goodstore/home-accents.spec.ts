import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import homeAccents from './home-accents';

describe(`with homeAccents preset`, () => {
  it('should create a homeAccents category type draft', () => {
    const homeAccentsPreset = homeAccents().build<TCategoryDraft>();
    expect(homeAccentsPreset).toMatchObject(
      JSON.parse(`{
  "key": "home-accents",
  "name": {
    "en-GB": "Home Accents",
    "de-DE": "Accessoires"
  },
  "orderHint": ".5",
  "parent": {
    "key": "room-decor",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "home-accents",
    "de-DE": "home-akzente",
    "en-US": "home-accents"
  }
}`)
    );
  });

  it('should create a homeAccents category type draft when built for Graphql', () => {
    const homeAccentsPresetGraphql =
      homeAccents().buildGraphql<TCategoryDraftGraphql>();
    expect(homeAccentsPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "home-accents",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Home Accents"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Accessoires"
    }
  ],
  "orderHint": ".5",
  "parent": {
    "__typename": "Reference",
    "key": "room-decor",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "home-accents"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "home-akzente"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "home-accents"
    }
  ]
}`)
    );
  });
});
