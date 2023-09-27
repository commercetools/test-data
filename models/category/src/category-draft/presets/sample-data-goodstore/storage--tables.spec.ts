import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import storageTables from './storage--tables';

describe(`with storageTables preset`, () => {
  it('should create a storageTables category type draft', () => {
    const storageTablesPreset = storageTables().build<TCategoryDraft>();
    expect(storageTablesPreset).toMatchObject(
      JSON.parse(`{
  "key": "storage--tables",
  "name": {
    "en-GB": "Storage & Tables",
    "de-DE": "Kommoden",
    "en-US": "Dressers"
  },
  "orderHint": ".1",
  "parent": {
    "key": "bedroom-furniture",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "storage-and-tables",
    "de-DE": "dressers",
    "en-US": "storage-and-tables"
  }
}`)
    );
  });

  it('should create a storageTables category type draft when built for Graphql', () => {
    const storageTablesPresetGraphql =
      storageTables().buildGraphql<TCategoryDraftGraphql>();
    expect(storageTablesPresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "storage--tables",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Storage & Tables"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Kommoden"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Dressers"
    }
  ],
  "orderHint": ".1",
  "parent": {
    "__typename": "Reference",
    "key": "bedroom-furniture",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "storage-and-tables"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "dressers"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "storage-and-tables"
    }
  ]
}`)
    );
  });
});
