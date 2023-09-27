import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import glassware from './glassware';

describe(`with glassware preset`, () => {
  it('should create a glassware category type draft', () => {
    const glasswarePreset = glassware().build<TCategoryDraft>();
    expect(glasswarePreset).toMatchObject(
      JSON.parse(`{
  "key": "glassware",
  "name": {
    "en-GB": "Glassware",
    "de-DE": "Gläser",
    "en-US": "Glassware"
  },
  "orderHint": ".23",
  "parent": {
    "key": "bar-and-glassware",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "glassware",
    "de-DE": "glassware",
    "en-US": "glassware"
  }
}`)
    );
  });

  it('should create a glassware category type draft when built for Graphql', () => {
    const glasswarePresetGraphql =
      glassware().buildGraphql<TCategoryDraftGraphql>();
    expect(glasswarePresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "glassware",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Glassware"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Gläser"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Glassware"
    }
  ],
  "orderHint": ".23",
  "parent": {
    "__typename": "Reference",
    "key": "bar-and-glassware",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "glassware"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "glassware"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "glassware"
    }
  ]
}`)
    );
  });
});
