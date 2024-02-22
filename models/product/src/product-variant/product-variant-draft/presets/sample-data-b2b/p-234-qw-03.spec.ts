import type { TProductVariantDraft } from '../../../types';
import p234Qw03 from './p-234-qw-03';

describe(`with p234Qw03 preset`, () => {
  it(`should return a p234Qw03 preset`, () => {
    const p234Qw03Preset = p234Qw03().build<TProductVariantDraft>();
    expect(p234Qw03Preset).toMatchInlineSnapshot(`
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
              "w": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/p234-qw-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "p234-qw-2023",
      }
    `);
  });

  it(`should return a p234Qw03 preset when built for graphql`, () => {
    const p234Qw03PresetGraphql =
      p234Qw03().buildGraphql<TProductVariantDraft>();
    expect(p234Qw03PresetGraphql).toMatchInlineSnapshot(`
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
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/p234-qw-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "p234-qw-2023",
      }
    `);
  });
});
