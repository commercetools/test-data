import type { TProductVariantDraft } from '../../../types';
import mm123Qr03 from './mm-123-qr-03';

describe(`with mm123Qr03 preset`, () => {
  it(`should return a mm123Qr03 preset`, () => {
    const mm123Qr03Preset = mm123Qr03().build<TProductVariantDraft>();
    expect(mm123Qr03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 600,
          },
          {
            "name": "model",
            "value": 2023,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/mm123-qr-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "mm123-qr-2023",
      }
    `);
  });

  it(`should return a mm123Qr03 preset when built for graphql`, () => {
    const mm123Qr03PresetGraphql =
      mm123Qr03().buildGraphql<TProductVariantDraft>();
    expect(mm123Qr03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "600",
          },
          {
            "name": "model",
            "value": "2023",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/mm123-qr-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "mm123-qr-2023",
        "staged": true,
      }
    `);
  });
});
