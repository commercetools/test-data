import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import storageTables from './storage--tables';

describe(`with storageTables preset`, () => {
  it('should create a storageTables category type draft', () => {
    const storageTablesPreset = storageTables().build<TCategoryDraft>();
    expect(storageTablesPreset).toMatchObject(
      JSON.parse(`{
  "key": "storage--tables",
  "name": {
    "en-US": "Dressers",
    "en-GB": "Storage & Tables",
    "de-DE": "Kommoden"
  },
  "orderHint": ".1",
  "parent": {
    "key": "bedroom-furniture",
    "typeId": "category"
  },
  "slug": {
    "en-US": "storage-and-tables",
    "en-GB": "storage-and-tables",
    "de-DE": "dressers"
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
      "locale": "en-US",
      "value": "Dressers"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Storage & Tables"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Kommoden"
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
      "locale": "en-US",
      "value": "storage-and-tables"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "storage-and-tables"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "dressers"
    }
  ]
}`)
    );
  });
});
