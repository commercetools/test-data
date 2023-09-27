import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import barAccessories from './bar-accessories';

describe(`with barAccessories preset`, () => {
  it('should create a barAccessories category type draft', () => {
    const barAccessoriesPreset = barAccessories().build<TCategoryDraft>();
    expect(barAccessoriesPreset).toMatchObject(
      JSON.parse(`{
  "key": "bar-accessories",
  "name": {
    "en-GB": "Bar Accessories",
    "de-DE": "Barzubehör",
    "en-US": "Bar Accessories"
  },
  "orderHint": ".36",
  "parent": {
    "key": "bar-and-glassware",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "bar-accessories",
    "de-DE": "bar-accessories",
    "en-US": "bar-accessories"
  }
}`)
    );
  });

  it('should create a barAccessories category type draft when built for Graphql', () => {
    const barAccessoriesPresetGraphql =
      barAccessories().buildGraphql<TCategoryDraftGraphql>();
    expect(barAccessoriesPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "bar-accessories",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Bar Accessories"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Barzubehör"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Bar Accessories"
    }
  ],
  "orderHint": ".36",
  "parent": {
    "__typename": "Reference",
    "key": "bar-and-glassware",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "bar-accessories"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "bar-accessories"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "bar-accessories"
    }
  ]
}`)
    );
  });
});
