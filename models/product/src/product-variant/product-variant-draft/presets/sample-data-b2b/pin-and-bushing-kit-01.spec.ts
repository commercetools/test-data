import type { TProductVariantDraft } from '../../../types';
import pinAndBushingKit01 from './pin-and-bushing-kit-01';

describe(`with pinAndBushingKit01 preset`, () => {
  it(`should return a pinAndBushingKit01 preset`, () => {
    const pinAndBushingKit01Preset =
      pinAndBushingKit01().build<TProductVariantDraft>();
    expect(pinAndBushingKit01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [],
        "images": [
          {
            "dimensions": {
              "h": 1024,
              "w": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pin-and-bushing-kit.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "pin-and-bushing-kit",
      }
    `);
  });

  it(`should return a pinAndBushingKit01 preset when built for graphql`, () => {
    const pinAndBushingKit01PresetGraphql =
      pinAndBushingKit01().buildGraphql<TProductVariantDraft>();
    expect(pinAndBushingKit01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [],
        "images": [
          {
            "dimensions": {
              "height": 1024,
              "width": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pin-and-bushing-kit.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "pin-and-bushing-kit",
        "staged": true,
      }
    `);
  });
});
