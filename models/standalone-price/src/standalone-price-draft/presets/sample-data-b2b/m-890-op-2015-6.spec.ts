import type { TStandalonePriceDraft } from '../../../types';
import m890Op20156 from './m-890-op-2015-6';

describe(`with m890Op20156 preset`, () => {
  it(`should return a m890Op20156 preset`, () => {
    const m890Op20156Preset = m890Op20156().build<TStandalonePriceDraft>();
    expect(m890Op20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2015-6",
        "sku": "m890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 880000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a m890Op20156 preset when built for graphql`, () => {
    const m890Op20156PresetGraphql =
      m890Op20156().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2015-6",
        "sku": "m890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 880000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
