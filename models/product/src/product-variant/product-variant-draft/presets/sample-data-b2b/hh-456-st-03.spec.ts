import type { TProductVariantDraft } from '../../../types';
import hh456St03 from './hh-456-st-03';

describe(`with hh456St03 preset`, () => {
  it(`should return a hh456St03 preset`, () => {
    const hh456St03Preset = hh456St03().build<TProductVariantDraft>();
    expect(hh456St03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 700,
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
        "images": [],
        "key": undefined,
        "prices": undefined,
        "sku": "hh456-st-2023",
      }
    `);
  });

  it(`should return a hh456St03 preset when built for graphql`, () => {
    const hh456St03PresetGraphql =
      hh456St03().buildGraphql<TProductVariantDraft>();
    expect(hh456St03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "700",
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
        "images": [],
        "key": undefined,
        "prices": undefined,
        "sku": "hh456-st-2023",
      }
    `);
  });
});
