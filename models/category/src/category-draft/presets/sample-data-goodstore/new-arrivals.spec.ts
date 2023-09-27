import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import newArrivals from './new-arrivals';

describe(`with newArrivals preset`, () => {
  it('should create a newArrivals category type draft', () => {
    const newArrivalsPreset = newArrivals().build<TCategoryDraft>();
    expect(newArrivalsPreset).toMatchObject(
      JSON.parse(`{
  "key": "new-arrivals",
  "name": {
    "en-GB": "New Arrivals",
    "de-DE": "Neuheiten",
    "en-US": "New Arrivals"
  },
  "orderHint": "0.4",
  "slug": {
    "en-GB": "new-arrivals",
    "de-DE": "ganz-neu",
    "en-US": "new-arrivals"
  }
}`)
    );
  });

  it('should create a newArrivals category type draft when built for Graphql', () => {
    const newArrivalsPresetGraphql =
      newArrivals().buildGraphql<TCategoryDraftGraphql>();
    expect(newArrivalsPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "new-arrivals",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "New Arrivals"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Neuheiten"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "New Arrivals"
    }
  ],
  "orderHint": "0.4",
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "new-arrivals"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "ganz-neu"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "new-arrivals"
    }
  ]
}`)
    );
  });
});
