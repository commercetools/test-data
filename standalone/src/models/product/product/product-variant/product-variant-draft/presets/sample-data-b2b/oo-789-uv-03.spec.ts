import type { TProductVariantDraft } from '../../../types';
import oo789Uv03 from './oo-789-uv-03';

describe(`with oo789Uv03 preset`, () => {
  it(`should return a oo789Uv03 preset`, () => {
    const oo789Uv03Preset = oo789Uv03().build<TProductVariantDraft>();
    expect(oo789Uv03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 800,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/oo789-uv-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "oo789-uv-2023",
      }
    `);
  });

  it(`should return a oo789Uv03 preset when built for graphql`, () => {
    const oo789Uv03PresetGraphql =
      oo789Uv03().buildGraphql<TProductVariantDraft>();
    expect(oo789Uv03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "800",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/oo789-uv-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "oo789-uv-2023",
      }
    `);
  });
});
