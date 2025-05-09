import type { TProductVariantDraft } from '../../../types';
import e567Yz01 from './e-567-yz-01';

describe(`with e567Yz01 preset`, () => {
  it(`should return a e567Yz01 preset`, () => {
    const e567Yz01Preset = e567Yz01().build<TProductVariantDraft>();
    expect(e567Yz01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 550,
          },
          {
            "name": "model",
            "value": 2015,
          },
          {
            "name": "iso45001",
            "value": false,
          },
          {
            "name": "mobility",
            "value": {
              "key": "tracked",
              "label": "Tracked",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 1024,
              "w": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/e567-yz-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "e567-yz-2015",
      }
    `);
  });

  it(`should return a e567Yz01 preset when built for graphql`, () => {
    const e567Yz01PresetGraphql =
      e567Yz01().buildGraphql<TProductVariantDraft>();
    expect(e567Yz01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "550",
          },
          {
            "name": "model",
            "value": "2015",
          },
          {
            "name": "iso45001",
            "value": "false",
          },
          {
            "name": "mobility",
            "value": "{"key":"tracked","label":"Tracked"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 1024,
              "width": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/e567-yz-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "e567-yz-2015",
      }
    `);
  });
});
