import type { TProductVariantDraft } from '../../../types';
import ff890Op01 from './ff-890-op-01';

describe(`with ff890Op01 preset`, () => {
  it(`should return a ff890Op01 preset`, () => {
    const ff890Op01Preset = ff890Op01().build<TProductVariantDraft>();
    expect(ff890Op01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 550,
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
              "w": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ff890-op-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ff890-op-2015",
      }
    `);
  });

  it(`should return a ff890Op01 preset when built for graphql`, () => {
    const ff890Op01PresetGraphql =
      ff890Op01().buildGraphql<TProductVariantDraft>();
    expect(ff890Op01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "550",
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
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ff890-op-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ff890-op-2015",
      }
    `);
  });
});
