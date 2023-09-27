import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import sofas from './sofas';

describe(`with sofas preset`, () => {
  it('should create a sofas category type draft', () => {
    const sofasPreset = sofas().build<TCategoryDraft>();
    expect(sofasPreset).toMatchObject(
      JSON.parse(`{
  "key": "sofas",
  "name": {
    "en-GB": "Sofas",
    "de-DE": "Sofas",
    "en-US": "Sofas"
  },
  "orderHint": ".3",
  "parent": {
    "key": "living-room-furniture",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "sofas",
    "de-DE": "sofas",
    "en-US": "sofas"
  }
}`)
    );
  });

  it('should create a sofas category type draft when built for Graphql', () => {
    const sofasPresetGraphql = sofas().buildGraphql<TCategoryDraftGraphql>();
    expect(sofasPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "sofas",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Sofas"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Sofas"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Sofas"
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
      "locale": "en-GB",
      "value": "sofas"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "sofas"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "sofas"
    }
  ]
}`)
    );
  });
});
