import type { TStandalonePriceDraft } from '../../../types';
import hh456St20191 from './hh-456-st-2019-1';

describe(`with hh456St20191 preset`, () => {
  it(`should return a hh456St20191 preset`, () => {
    const hh456St20191Preset = hh456St20191().build<TStandalonePriceDraft>();
    expect(hh456St20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2019-1",
        "sku": "hh456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2420000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a hh456St20191 preset when built for graphql`, () => {
    const hh456St20191PresetGraphql =
      hh456St20191().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2019-1",
        "sku": "hh456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2420000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
