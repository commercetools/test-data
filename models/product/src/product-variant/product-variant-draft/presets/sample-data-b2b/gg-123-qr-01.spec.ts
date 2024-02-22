import type { TProductVariantDraft } from '../../../types';
import gg123Qr01 from './gg-123-qr-01';

describe(`with gg123Qr01 preset`, () => {
  it(`should return a gg123Qr01 preset`, () => {
    const gg123Qr01Preset = gg123Qr01().build<TProductVariantDraft>();
    expect(gg123Qr01Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/gg123-qr-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "gg123-qr-2015",
      }
    `);
  });

  it(`should return a gg123Qr01 preset when built for graphql`, () => {
    const gg123Qr01PresetGraphql =
      gg123Qr01().buildGraphql<TProductVariantDraft>();
    expect(gg123Qr01PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/gg123-qr-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "gg123-qr-2015",
      }
    `);
  });
});
