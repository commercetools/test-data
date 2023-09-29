import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import theModernist from './the-modernist';

describe(`with theModernist preset`, () => {
  it('should create a theModernist category type draft', () => {
    const theModernistPreset = theModernist().build<TCategoryDraft>();
    expect(theModernistPreset).toMatchObject(
      JSON.parse(`{
  "key": "the-modernist",
  "name": {
    "en-US": "The Modernist",
    "en-GB": "The Modernist",
    "de-DE": "The Modernist"
  },
  "orderHint": ".0035",
  "parent": {
    "key": "collections",
    "typeId": "category"
  },
  "slug": {
    "en-US": "the-modernist",
    "en-GB": "the-modernist",
    "de-DE": "the-modernist"
  }
}`)
    );
  });

  it('should create a theModernist category type draft when built for Graphql', () => {
    const theModernistPresetGraphql =
      theModernist().buildGraphql<TCategoryDraftGraphql>();
    expect(theModernistPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "the-modernist",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "The Modernist"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "The Modernist"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "The Modernist"
    }
  ],
  "orderHint": ".0035",
  "parent": {
    "__typename": "Reference",
    "key": "collections",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "the-modernist"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "the-modernist"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "the-modernist"
    }
  ]
}`)
    );
  });
});
