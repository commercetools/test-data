import type { TStandalonePriceDraft } from '../../../types';
import m890Op20235 from './m-890-op-2023-5';

describe(`with m890Op20235 preset`, () => {
  it(`should return a m890Op20235 preset`, () => {
    const m890Op20235Preset = m890Op20235().build<TStandalonePriceDraft>();
    expect(m890Op20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2023-5",
        "sku": "m890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 990000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a m890Op20235 preset when built for graphql`, () => {
    const m890Op20235PresetGraphql =
      m890Op20235().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2023-5",
        "sku": "m890-op-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 990000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
