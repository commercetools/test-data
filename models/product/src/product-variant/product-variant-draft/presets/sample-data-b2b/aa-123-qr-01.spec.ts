import type { TProductVariantDraft } from '../../../types';
import aa123Qr01 from './aa-123-qr-01';

describe(`with aa123Qr01 preset`, () => {
  it(`should return a aa123Qr01 preset`, () => {
    const aa123Qr01Preset = aa123Qr01().build<TProductVariantDraft>();
    expect(aa123Qr01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 500,
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
              "w": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aa123-qr-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "aa123-qr-2015",
      }
    `);
  });

  it(`should return a aa123Qr01 preset when built for graphql`, () => {
    const aa123Qr01PresetGraphql =
      aa123Qr01().buildGraphql<TProductVariantDraft>();
    expect(aa123Qr01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "500",
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
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aa123-qr-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "aa123-qr-2015",
      }
    `);
  });
});
