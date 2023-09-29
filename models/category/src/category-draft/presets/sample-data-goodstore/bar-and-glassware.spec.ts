import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import barAndGlassware from './bar-and-glassware';

describe(`with barAndGlassware preset`, () => {
  it('should create a barAndGlassware category type draft', () => {
    const barAndGlasswarePreset = barAndGlassware().build<TCategoryDraft>();
    expect(barAndGlasswarePreset).toMatchObject(
      JSON.parse(`{
  "key": "bar-and-glassware",
  "name": {
    "en-US": "Bar and Glassware",
    "en-GB": "Bar and Glassware",
    "de-DE": "Gläser und Barzubehör"
  },
  "orderHint": ".82",
  "parent": {
    "key": "kitchen",
    "typeId": "category"
  },
  "slug": {
    "en-US": "bar-and-glassware",
    "en-GB": "bar-and-glassware",
    "de-DE": "bar-and-glassware"
  }
}`)
    );
  });

  it('should create a barAndGlassware category type draft when built for Graphql', () => {
    const barAndGlasswarePresetGraphql =
      barAndGlassware().buildGraphql<TCategoryDraftGraphql>();
    expect(barAndGlasswarePresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "bar-and-glassware",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Bar and Glassware"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Bar and Glassware"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Gläser und Barzubehör"
    }
  ],
  "orderHint": ".82",
  "parent": {
    "__typename": "Reference",
    "key": "kitchen",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "bar-and-glassware"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "bar-and-glassware"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "bar-and-glassware"
    }
  ]
}`)
    );
  });
});
