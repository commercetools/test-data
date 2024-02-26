import type { TProductVariantDraft } from '../../../types';
import d234Wx03 from './d-234-wx-03';

describe(`with d234Wx03 preset`, () => {
  it(`should return a d234Wx03 preset`, () => {
    const d234Wx03Preset = d234Wx03().build<TProductVariantDraft>();
    expect(d234Wx03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 500,
          },
          {
            "name": "model",
            "value": 2023,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/d234-wx-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "d234-wx-2023",
      }
    `);
  });

  it(`should return a d234Wx03 preset when built for graphql`, () => {
    const d234Wx03PresetGraphql =
      d234Wx03().buildGraphql<TProductVariantDraft>();
    expect(d234Wx03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "500",
          },
          {
            "name": "model",
            "value": "2023",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/d234-wx-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "d234-wx-2023",
      }
    `);
  });
});
