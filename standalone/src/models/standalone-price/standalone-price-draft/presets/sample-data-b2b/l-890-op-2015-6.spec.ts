import type { TStandalonePriceDraft } from '../../../types';
import l890Op20156 from './l-890-op-2015-6';

describe(`with l890Op20156 preset`, () => {
  it(`should return a l890Op20156 preset`, () => {
    const l890Op20156Preset = l890Op20156().build<TStandalonePriceDraft>();
    expect(l890Op20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2015-6",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1200000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a l890Op20156 preset when built for graphql`, () => {
    const l890Op20156PresetGraphql =
      l890Op20156().buildGraphql<TStandalonePriceDraft>();
    expect(l890Op20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "l890-op-2015-6",
        "recurrencePolicy": undefined,
        "sku": "l890-op-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1200000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
