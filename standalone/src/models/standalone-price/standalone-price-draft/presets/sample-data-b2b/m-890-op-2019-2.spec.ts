import type { TStandalonePriceDraft } from '../../../types';
import m890Op20192 from './m-890-op-2019-2';

describe(`with m890Op20192 preset`, () => {
  it(`should return a m890Op20192 preset`, () => {
    const m890Op20192Preset = m890Op20192().build<TStandalonePriceDraft>();
    expect(m890Op20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2019-2",
        "sku": "m890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1210000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a m890Op20192 preset when built for graphql`, () => {
    const m890Op20192PresetGraphql =
      m890Op20192().buildGraphql<TStandalonePriceDraft>();
    expect(m890Op20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "m890-op-2019-2",
        "sku": "m890-op-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1210000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
