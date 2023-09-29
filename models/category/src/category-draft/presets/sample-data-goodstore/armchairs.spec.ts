import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import armchairs from './armchairs';

describe(`with armchairs preset`, () => {
  it('should create a armchairs category type draft', () => {
    const armchairsPreset = armchairs().build<TCategoryDraft>();
    expect(armchairsPreset).toMatchObject(
      JSON.parse(`{
  "key": "armchairs",
  "name": {
    "en-US": "Chairs",
    "en-GB": "Armchairs",
    "de-DE": "Stühle"
  },
  "orderHint": ".3",
  "parent": {
    "key": "living-room-furniture",
    "typeId": "category"
  },
  "slug": {
    "en-US": "armchairs",
    "en-GB": "armchairs",
    "de-DE": "chairs"
  }
}`)
    );
  });

  it('should create a armchairs category type draft when built for Graphql', () => {
    const armchairsPresetGraphql =
      armchairs().buildGraphql<TCategoryDraftGraphql>();
    expect(armchairsPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "armchairs",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Chairs"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Armchairs"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Stühle"
    }
  ],
  "orderHint": ".3",
  "parent": {
    "__typename": "Reference",
    "key": "living-room-furniture",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "armchairs"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "armchairs"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "chairs"
    }
  ]
}`)
    );
  });
});
