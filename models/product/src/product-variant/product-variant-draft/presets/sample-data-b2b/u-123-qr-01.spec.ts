import type { TProductVariantDraft } from '../../../types';
import u123Qr01 from './u-123-qr-01';

describe(`with u123Qr01 preset`, () => {
  it(`should return a u123Qr01 preset`, () => {
    const u123Qr01Preset = u123Qr01().build<TProductVariantDraft>();
    expect(u123Qr01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 200,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/u123-qr-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "u123-qr-2015",
      }
    `);
  });

  it(`should return a u123Qr01 preset when built for graphql`, () => {
    const u123Qr01PresetGraphql =
      u123Qr01().buildGraphql<TProductVariantDraft>();
    expect(u123Qr01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "200",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/u123-qr-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "u123-qr-2015",
      }
    `);
  });
});
