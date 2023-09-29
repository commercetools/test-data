import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import tables from './tables';

describe(`with tables preset`, () => {
  it('should create a tables category type draft', () => {
    const tablesPreset = tables().build<TCategoryDraft>();
    expect(tablesPreset).toMatchObject(
      JSON.parse(`{
  "key": "tables",
  "name": {
    "en-US": "Tables",
    "en-GB": "Tables",
    "de-DE": "Tische"
  },
  "orderHint": ".25",
  "parent": {
    "key": "living-room-furniture",
    "typeId": "category"
  },
  "slug": {
    "en-US": "living-room-tables",
    "en-GB": "living-room-tables",
    "de-DE": "coffee-tables"
  }
}`)
    );
  });

  it('should create a tables category type draft when built for Graphql', () => {
    const tablesPresetGraphql = tables().buildGraphql<TCategoryDraftGraphql>();
    expect(tablesPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "tables",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Tables"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Tables"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Tische"
    }
  ],
  "orderHint": ".25",
  "parent": {
    "__typename": "Reference",
    "key": "living-room-furniture",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "living-room-tables"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "living-room-tables"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "coffee-tables"
    }
  ]
}`)
    );
  });
});
