import type { TProductVariantDraft } from '../../../types';
import ll890Op01 from './ll-890-op-01';

describe(`with ll890Op01 preset`, () => {
  it(`should return a ll890Op01 preset`, () => {
    const ll890Op01Preset = ll890Op01().build<TProductVariantDraft>();
    expect(ll890Op01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 1000,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ll890-op-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ll890-op-2015",
      }
    `);
  });

  it(`should return a ll890Op01 preset when built for graphql`, () => {
    const ll890Op01PresetGraphql =
      ll890Op01().buildGraphql<TProductVariantDraft>();
    expect(ll890Op01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "1000",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ll890-op-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ll890-op-2015",
        "staged": true,
      }
    `);
  });
});
