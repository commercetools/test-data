import type { TProductVariantDraft } from '../../../types';
import mm123Qr01 from './mm-123-qr-01';

describe(`with mm123Qr01 preset`, () => {
  it(`should return a mm123Qr01 preset`, () => {
    const mm123Qr01Preset = mm123Qr01().build<TProductVariantDraft>();
    expect(mm123Qr01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 600,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/mm123-qr-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "mm123-qr-2015",
      }
    `);
  });

  it(`should return a mm123Qr01 preset when built for graphql`, () => {
    const mm123Qr01PresetGraphql =
      mm123Qr01().buildGraphql<TProductVariantDraft>();
    expect(mm123Qr01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "600",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/mm123-qr-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "mm123-qr-2015",
        "staged": true,
      }
    `);
  });
});
