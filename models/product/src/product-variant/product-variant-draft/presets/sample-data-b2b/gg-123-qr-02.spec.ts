import type { TProductVariantDraft } from '../../../types';
import gg123Qr02 from './gg-123-qr-02';

describe(`with gg123Qr02 preset`, () => {
  it(`should return a gg123Qr02 preset`, () => {
    const gg123Qr02Preset = gg123Qr02().build<TProductVariantDraft>();
    expect(gg123Qr02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 600,
          },
          {
            "name": "model",
            "value": 2019,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/gg123-qr-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "gg123-qr-2019",
      }
    `);
  });

  it(`should return a gg123Qr02 preset when built for graphql`, () => {
    const gg123Qr02PresetGraphql =
      gg123Qr02().buildGraphql<TProductVariantDraft>();
    expect(gg123Qr02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "600",
          },
          {
            "name": "model",
            "value": "2019",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/gg123-qr-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "gg123-qr-2019",
      }
    `);
  });
});
