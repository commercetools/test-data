import type { TProductVariantDraft } from '../../../types';
import f890Op01 from './f-890-op-01';

describe(`with f890Op01 preset`, () => {
  it(`should return a f890Op01 preset`, () => {
    const f890Op01Preset = f890Op01().build<TProductVariantDraft>();
    expect(f890Op01Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/f890-op-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "f890-op-2015",
      }
    `);
  });

  it(`should return a f890Op01 preset when built for graphql`, () => {
    const f890Op01PresetGraphql =
      f890Op01().buildGraphql<TProductVariantDraft>();
    expect(f890Op01PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/f890-op-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "f890-op-2015",
      }
    `);
  });
});
