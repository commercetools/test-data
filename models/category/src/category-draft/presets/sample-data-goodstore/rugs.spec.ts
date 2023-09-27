import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import rugs from './rugs';

describe(`with rugs preset`, () => {
  it('should create a rugs category type draft', () => {
    const rugsPreset = rugs().build<TCategoryDraft>();
    expect(rugsPreset).toMatchObject(
      JSON.parse(`{
  "key": "rugs",
  "name": {
    "en-GB": "Rugs",
    "de-DE": "Teppiche"
  },
  "orderHint": ".4",
  "parent": {
    "key": "room-decor",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "rugs",
    "de-DE": "teppiche",
    "en-US": "rugs"
  }
}`)
    );
  });

  it('should create a rugs category type draft when built for Graphql', () => {
    const rugsPresetGraphql = rugs().buildGraphql<TCategoryDraftGraphql>();
    expect(rugsPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "rugs",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Rugs"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Teppiche"
    }
  ],
  "orderHint": ".4",
  "parent": {
    "__typename": "Reference",
    "key": "room-decor",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "rugs"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "teppiche"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "rugs"
    }
  ]
}`)
    );
  });
});
