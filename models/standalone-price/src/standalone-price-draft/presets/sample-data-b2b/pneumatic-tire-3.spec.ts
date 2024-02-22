import type { TStandalonePriceDraft } from '../../../types';
import pneumaticTire3 from './pneumatic-tire-3';

describe(`with pneumaticTire3 preset`, () => {
  it(`should return a pneumaticTire3 preset`, () => {
    const pneumaticTire3Preset =
      pneumaticTire3().build<TStandalonePriceDraft>();
    expect(pneumaticTire3Preset).toMatchInlineSnapshot(`
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
        "key": "pneumatic-tire-3",
        "sku": "pneumatic-tire",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 50000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a pneumaticTire3 preset when built for graphql`, () => {
    const pneumaticTire3PresetGraphql =
      pneumaticTire3().buildGraphql<TStandalonePriceDraft>();
    expect(pneumaticTire3PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "pneumatic-tire-3",
        "sku": "pneumatic-tire",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 50000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
