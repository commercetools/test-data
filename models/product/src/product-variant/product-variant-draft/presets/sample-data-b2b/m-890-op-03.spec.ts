import type { TProductVariantDraft } from '../../../types';
import m890Op03 from './m-890-op-03';

describe(`with m890Op03 preset`, () => {
  it(`should return a m890Op03 preset`, () => {
    const m890Op03Preset = m890Op03().build<TProductVariantDraft>();
    expect(m890Op03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 650,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/m890-op-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "m890-op-2023",
      }
    `);
  });

  it(`should return a m890Op03 preset when built for graphql`, () => {
    const m890Op03PresetGraphql =
      m890Op03().buildGraphql<TProductVariantDraft>();
    expect(m890Op03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "650",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/m890-op-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "m890-op-2023",
        "staged": true,
      }
    `);
  });
});
