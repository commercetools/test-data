import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import cheeseTrays from './cheese-trays';

describe(`with cheeseTrays preset`, () => {
  it('should create a cheeseTrays category type draft', () => {
    const cheeseTraysPreset = cheeseTrays().build<TCategoryDraft>();
    expect(cheeseTraysPreset).toMatchObject(
      JSON.parse(`{
  "key": "cheese-trays",
  "name": {
    "en-US": "Cheese Trays",
    "en-GB": "Cheese Trays",
    "de-DE": "Käseplatten"
  },
  "orderHint": ".12",
  "parent": {
    "key": "serveware",
    "typeId": "category"
  },
  "slug": {
    "en-US": "cheese-trays",
    "en-GB": "cheese-trays",
    "de-DE": "cheese-trays"
  }
}`)
    );
  });

  it('should create a cheeseTrays category type draft when built for Graphql', () => {
    const cheeseTraysPresetGraphql =
      cheeseTrays().buildGraphql<TCategoryDraftGraphql>();
    expect(cheeseTraysPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "cheese-trays",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Cheese Trays"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Cheese Trays"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Käseplatten"
    }
  ],
  "orderHint": ".12",
  "parent": {
    "__typename": "Reference",
    "key": "serveware",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "cheese-trays"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "cheese-trays"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "cheese-trays"
    }
  ]
}`)
    );
  });
});
