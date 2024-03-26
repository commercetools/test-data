import type { TProductVariantDraft } from '../../../types';
import hh456St01 from './hh-456-st-01';

describe(`with hh456St01 preset`, () => {
  it(`should return a hh456St01 preset`, () => {
    const hh456St01Preset = hh456St01().build<TProductVariantDraft>();
    expect(hh456St01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 700,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hh456-st-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "hh456-st-2015",
      }
    `);
  });

  it(`should return a hh456St01 preset when built for graphql`, () => {
    const hh456St01PresetGraphql =
      hh456St01().buildGraphql<TProductVariantDraft>();
    expect(hh456St01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "700",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hh456-st-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "hh456-st-2015",
      }
    `);
  });
});
