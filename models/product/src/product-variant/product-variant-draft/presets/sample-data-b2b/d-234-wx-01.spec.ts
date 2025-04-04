import type { TProductVariantDraft } from '../../../types';
import d234Wx01 from './d-234-wx-01';

describe(`with d234Wx01 preset`, () => {
  it(`should return a d234Wx01 preset`, () => {
    const d234Wx01Preset = d234Wx01().build<TProductVariantDraft>();
    expect(d234Wx01Preset).toMatchInlineSnapshot(`
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
            "value": true,
          },
          {
            "name": "mobility",
            "value": {
              "key": "wheeled",
              "label": "Wheeled",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/d234-wx-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "d234-wx-2015",
      }
    `);
  });

  it(`should return a d234Wx01 preset when built for graphql`, () => {
    const d234Wx01PresetGraphql =
      d234Wx01().buildGraphql<TProductVariantDraft>();
    expect(d234Wx01PresetGraphql).toMatchInlineSnapshot(`
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
            "value": "true",
          },
          {
            "name": "mobility",
            "value": "{"key":"wheeled","label":"Wheeled"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 1024,
              "width": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/d234-wx-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "d234-wx-2015",
        "staged": true,
      }
    `);
  });
});
