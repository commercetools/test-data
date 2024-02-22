import type { TStandalonePriceDraft } from '../../../types';
import bb456St20191 from './bb-456-st-2019-1';

describe(`with bb456St20191 preset`, () => {
  it(`should return a bb456St20191 preset`, () => {
    const bb456St20191Preset = bb456St20191().build<TStandalonePriceDraft>();
    expect(bb456St20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2019-1",
        "sku": "bb456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2178001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a bb456St20191 preset when built for graphql`, () => {
    const bb456St20191PresetGraphql =
      bb456St20191().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2019-1",
        "sku": "bb456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2178001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
