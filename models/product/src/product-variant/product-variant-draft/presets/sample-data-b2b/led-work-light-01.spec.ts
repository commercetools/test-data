import type { TProductVariantDraft } from '../../../types';
import ledWorkLight01 from './led-work-light-01';

describe(`with ledWorkLight01 preset`, () => {
  it(`should return a ledWorkLight01 preset`, () => {
    const ledWorkLight01Preset = ledWorkLight01().build<TProductVariantDraft>();
    expect(ledWorkLight01Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/led-work-light.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "led-work-light",
      }
    `);
  });

  it(`should return a ledWorkLight01 preset when built for graphql`, () => {
    const ledWorkLight01PresetGraphql =
      ledWorkLight01().buildGraphql<TProductVariantDraft>();
    expect(ledWorkLight01PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/led-work-light.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "led-work-light",
        "staged": true,
      }
    `);
  });
});
