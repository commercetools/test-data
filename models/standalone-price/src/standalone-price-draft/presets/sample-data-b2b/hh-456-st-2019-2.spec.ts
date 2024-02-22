import type { TStandalonePriceDraft } from '../../../types';
import hh456St20192 from './hh-456-st-2019-2';

describe(`with hh456St20192 preset`, () => {
  it(`should return a hh456St20192 preset`, () => {
    const hh456St20192Preset = hh456St20192().build<TStandalonePriceDraft>();
    expect(hh456St20192Preset).toMatchInlineSnapshot(`
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
        "key": "hh456-st-2019-2",
        "sku": "hh456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2200000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a hh456St20192 preset when built for graphql`, () => {
    const hh456St20192PresetGraphql =
      hh456St20192().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20192PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "hh456-st-2019-2",
        "sku": "hh456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2200000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
