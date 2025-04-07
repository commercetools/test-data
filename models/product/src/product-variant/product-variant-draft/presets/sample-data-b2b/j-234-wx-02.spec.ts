import type { TProductVariantDraft } from '../../../types';
import j234Wx02 from './j-234-wx-02';

describe(`with j234Wx02 preset`, () => {
  it(`should return a j234Wx02 preset`, () => {
    const j234Wx02Preset = j234Wx02().build<TProductVariantDraft>();
    expect(j234Wx02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 750,
          },
          {
            "name": "model",
            "value": 2019,
          },
          {
            "name": "iso45001",
            "value": true,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/j234-wx-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "j234-wx-2019",
      }
    `);
  });

  it(`should return a j234Wx02 preset when built for graphql`, () => {
    const j234Wx02PresetGraphql =
      j234Wx02().buildGraphql<TProductVariantDraft>();
    expect(j234Wx02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "750",
          },
          {
            "name": "model",
            "value": "2019",
          },
          {
            "name": "iso45001",
            "value": "true",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/j234-wx-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "j234-wx-2019",
        "staged": true,
      }
    `);
  });
});
