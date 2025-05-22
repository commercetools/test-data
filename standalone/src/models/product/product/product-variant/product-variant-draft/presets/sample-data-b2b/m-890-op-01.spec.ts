import type { TProductVariantDraft } from '../../../types';
import m890Op01 from './m-890-op-01';

describe(`with m890Op01 preset`, () => {
  it(`should return a m890Op01 preset`, () => {
    const m890Op01Preset = m890Op01().build<TProductVariantDraft>();
    expect(m890Op01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 650,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/m890-op-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "m890-op-2015",
      }
    `);
  });

  it(`should return a m890Op01 preset when built for graphql`, () => {
    const m890Op01PresetGraphql =
      m890Op01().buildGraphql<TProductVariantDraft>();
    expect(m890Op01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "650",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/m890-op-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "m890-op-2015",
      }
    `);
  });
});
