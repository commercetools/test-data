import type { TStandalonePriceDraft } from '../../../types';
import hh456St20156 from './hh-456-st-2015-6';

describe(`with hh456St20156 preset`, () => {
  it(`should return a hh456St20156 preset`, () => {
    const hh456St20156Preset = hh456St20156().build<TStandalonePriceDraft>();
    expect(hh456St20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2015-6",
        "sku": "hh456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1600000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a hh456St20156 preset when built for graphql`, () => {
    const hh456St20156PresetGraphql =
      hh456St20156().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2015-6",
        "sku": "hh456-st-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1600000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
