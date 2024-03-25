import type { TProductVariantDraft } from '../../../types';
import p234Qw02 from './p-234-qw-02';

describe(`with p234Qw02 preset`, () => {
  it(`should return a p234Qw02 preset`, () => {
    const p234Qw02Preset = p234Qw02().build<TProductVariantDraft>();
    expect(p234Qw02Preset).toMatchInlineSnapshot(`
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
            "value": true,
          },
          {
            "name": "mobility",
            "value": {
              "key": "marine",
              "label": "Marine",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/p234-qw-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "p234-qw-2019",
      }
    `);
  });

  it(`should return a p234Qw02 preset when built for graphql`, () => {
    const p234Qw02PresetGraphql =
      p234Qw02().buildGraphql<TProductVariantDraft>();
    expect(p234Qw02PresetGraphql).toMatchInlineSnapshot(`
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
            "value": "true",
          },
          {
            "name": "mobility",
            "value": "{"key":"marine","label":"Marine"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 1024,
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/p234-qw-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "p234-qw-2019",
      }
    `);
  });
});
