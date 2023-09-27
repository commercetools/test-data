import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import bowls from './bowls';

describe(`with bowls preset`, () => {
  it('should create a bowls category type draft', () => {
    const bowlsPreset = bowls().build<TCategoryDraft>();
    expect(bowlsPreset).toMatchObject(
      JSON.parse(`{
  "key": "bowls",
  "name": {
    "en-GB": "Bowls",
    "de-DE": "Schalen",
    "en-US": "Bowls"
  },
  "orderHint": ".56",
  "parent": {
    "key": "dinnerware",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "bowls",
    "de-DE": "bowls",
    "en-US": "bowls"
  }
}`)
    );
  });

  it('should create a bowls category type draft when built for Graphql', () => {
    const bowlsPresetGraphql = bowls().buildGraphql<TCategoryDraftGraphql>();
    expect(bowlsPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "bowls",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Bowls"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Schalen"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Bowls"
    }
  ],
  "orderHint": ".56",
  "parent": {
    "__typename": "Reference",
    "key": "dinnerware",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "bowls"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "bowls"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "bowls"
    }
  ]
}`)
    );
  });
});
