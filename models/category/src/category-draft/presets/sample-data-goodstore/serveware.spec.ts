import { TCategoryDraft, TCategoryDraftGraphql } from '../../../types';
import serveware from './serveware';

describe(`with serveware preset`, () => {
  it('should create a serveware category type draft', () => {
    const servewarePreset = serveware().build<TCategoryDraft>();
    expect(servewarePreset).toMatchObject(
      JSON.parse(`{
  "key": "serveware",
  "name": {
    "en-GB": "Collections",
    "de-DE": "Alles zum Servieren",
    "en-US": "Serveware"
  },
  "orderHint": ".86",
  "parent": {
    "key": "kitchen",
    "typeId": "category"
  },
  "slug": {
    "en-GB": "kitchen-collections",
    "de-DE": "serveware",
    "en-US": "kitchen-collections"
  }
}`)
    );
  });

  it('should create a serveware category type draft when built for Graphql', () => {
    const servewarePresetGraphql =
      serveware().buildGraphql<TCategoryDraftGraphql>();
    expect(servewarePresetGraphql).toMatchObject(
      JSON.parse(`{
  "key": "serveware",
  "name": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "Collections"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "Alles zum Servieren"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "Serveware"
    }
  ],
  "orderHint": ".86",
  "parent": {
    "__typename": "Reference",
    "key": "kitchen",
    "typeId": "category"
  },
  "slug": [
    {
      "__typename": "LocalizedString",
      "locale": "en-GB",
      "value": "kitchen-collections"
    },
    {
      "__typename": "LocalizedString",
      "locale": "de-DE",
      "value": "serveware"
    },
    {
      "__typename": "LocalizedString",
      "locale": "en-US",
      "value": "kitchen-collections"
    }
  ]
}`)
    );
  });
});
