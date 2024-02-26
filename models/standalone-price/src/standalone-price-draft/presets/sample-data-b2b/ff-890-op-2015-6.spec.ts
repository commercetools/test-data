import type { TStandalonePriceDraft } from '../../../types';
import ff890Op20156 from './ff-890-op-2015-6';

describe(`with ff890Op20156 preset`, () => {
  it(`should return a ff890Op20156 preset`, () => {
    const ff890Op20156Preset = ff890Op20156().build<TStandalonePriceDraft>();
    expect(ff890Op20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2015-6",
        "sku": "ff890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a ff890Op20156 preset when built for graphql`, () => {
    const ff890Op20156PresetGraphql =
      ff890Op20156().buildGraphql<TStandalonePriceDraft>();
    expect(ff890Op20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ff890-op-2015-6",
        "sku": "ff890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
