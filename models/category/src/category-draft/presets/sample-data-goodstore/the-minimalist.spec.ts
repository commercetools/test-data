import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import theMinimalist from './the-minimalist';

describe(`with theMinimalist preset`, () => {
  it('should create a theMinimalist category type draft', () => {
    const theMinimalistPreset = theMinimalist().build<TCategoryDraft>();
    expect(theMinimalistPreset).toMatchObject(
      JSON.parse(`{
  "key": "the-minimalist",
  "name": {
    "en-GB": "The Minimalist",
    "de-DE": "The Minimalist",
    "en-US": "The Minimalist"
  },
  "orderHint": ".003",
  "parent": {
    "key": "collections",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "the-minimalist",
    "de-DE": "the-minimalist",
    "en-US": "the-minimalist"
  }
}`)
    );
  });

  it('should create a theMinimalist category type draft when built for Graphql', () => {
    const theMinimalistPresetGraphql =
      theMinimalist().buildGraphql<TCategoryDraftGraphql>();
    expect(theMinimalistPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "the-minimalist",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "The Minimalist"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "The Minimalist"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "The Minimalist"
    }
  ],
  "orderHint": ".003",
  "parent": {
    "__typename": "Reference",
    "key": "collections",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "the-minimalist"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "the-minimalist"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "the-minimalist"
    }
  ]
}`)
    );
  });
});
