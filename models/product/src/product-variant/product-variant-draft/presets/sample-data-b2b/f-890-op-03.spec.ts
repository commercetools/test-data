import type { TProductVariantDraft } from '../../../types';
import f890Op03 from './f-890-op-03';

describe(`with f890Op03 preset`, () => {
  it(`should return a f890Op03 preset`, () => {
    const f890Op03Preset = f890Op03().build<TProductVariantDraft>();
    expect(f890Op03Preset).toMatchInlineSnapshot(`
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
              "w": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/f890-op-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "f890-op-2023",
      }
    `);
  });

  it(`should return a f890Op03 preset when built for graphql`, () => {
    const f890Op03PresetGraphql =
      f890Op03().buildGraphql<TProductVariantDraft>();
    expect(f890Op03PresetGraphql).toMatchInlineSnapshot(`
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
              "width": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/f890-op-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "f890-op-2023",
        "staged": true,
      }
    `);
  });
});
