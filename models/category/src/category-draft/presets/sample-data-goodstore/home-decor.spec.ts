import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import homeDecor from './home-decor';

describe(`with homeDecor preset`, () => {
  it('should create a homeDecor category type draft', () => {
    const homeDecorPreset = homeDecor().build<TCategoryDraft>();
    expect(homeDecorPreset).toMatchObject(
      JSON.parse(`{
  "key": "home-decor",
  "name": {
    "en-GB": "Home Decor",
    "de-DE": "Dekoration",
    "en-US": "Home Decor"
  },
  "orderHint": "0.1",
  "slug": {
    "en-GB": "home-decor",
    "de-DE": "home-decor",
    "en-US": "home-decor"
  }
}`)
    );
  });

  it('should create a homeDecor category type draft when built for Graphql', () => {
    const homeDecorPresetGraphql =
      homeDecor().buildGraphql<TCategoryDraftGraphql>();
    expect(homeDecorPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "home-decor",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Home Decor"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Dekoration"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Home Decor"
    }
  ],
  "orderHint": "0.1",
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "home-decor"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "home-decor"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "home-decor"
    }
  ]
}`)
    );
  });
});
