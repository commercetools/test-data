import type { TProductVariantDraft } from '../../../types';
import jj234Wx02 from './jj-234-wx-02';

describe(`with jj234Wx02 preset`, () => {
  it(`should return a jj234Wx02 preset`, () => {
    const jj234Wx02Preset = jj234Wx02().build<TProductVariantDraft>();
    expect(jj234Wx02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 800,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/jj234-wx-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "jj234-wx-2019",
      }
    `);
  });

  it(`should return a jj234Wx02 preset when built for graphql`, () => {
    const jj234Wx02PresetGraphql =
      jj234Wx02().buildGraphql<TProductVariantDraft>();
    expect(jj234Wx02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "800",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/jj234-wx-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "jj234-wx-2019",
        "staged": true,
      }
    `);
  });
});
