import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import kitchen from './kitchen';

describe(`with kitchen preset`, () => {
  it('should create a kitchen category type draft', () => {
    const kitchenPreset = kitchen().build<TCategoryDraft>();
    expect(kitchenPreset).toMatchObject(
      JSON.parse(`{
  "key": "kitchen",
  "name": {
    "en-US": "Kitchen",
    "en-GB": "Kitchen",
    "de-DE": "Küche"
  },
  "orderHint": "0.3",
  "slug": {
    "en-US": "kitchen",
    "en-GB": "kitchen",
    "de-DE": "kitchen"
  }
}`)
    );
  });

  it('should create a kitchen category type draft when built for Graphql', () => {
    const kitchenPresetGraphql =
      kitchen().buildGraphql<TCategoryDraftGraphql>();
    expect(kitchenPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "kitchen",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Kitchen"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Kitchen"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Küche"
    }
  ],
  "orderHint": "0.3",
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "kitchen"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "kitchen"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "kitchen"
    }
  ]
}`)
    );
  });
});
