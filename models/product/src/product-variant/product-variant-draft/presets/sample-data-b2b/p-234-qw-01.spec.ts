import type { TProductVariantDraft } from '../../../types';
import p234Qw01 from './p-234-qw-01';

describe(`with p234Qw01 preset`, () => {
  it(`should return a p234Qw01 preset`, () => {
    const p234Qw01Preset = p234Qw01().build<TProductVariantDraft>();
    expect(p234Qw01Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/p234-qw-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "p234-qw-2015",
      }
    `);
  });

  it(`should return a p234Qw01 preset when built for graphql`, () => {
    const p234Qw01PresetGraphql =
      p234Qw01().buildGraphql<TProductVariantDraft>();
    expect(p234Qw01PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/p234-qw-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "p234-qw-2015",
      }
    `);
  });
});
