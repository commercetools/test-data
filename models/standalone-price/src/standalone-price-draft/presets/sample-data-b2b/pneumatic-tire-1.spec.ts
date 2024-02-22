import type { TStandalonePriceDraft } from '../../../types';
import pneumaticTire1 from './pneumatic-tire-1';

describe(`with pneumaticTire1 preset`, () => {
  it(`should return a pneumaticTire1 preset`, () => {
    const pneumaticTire1Preset =
      pneumaticTire1().build<TStandalonePriceDraft>();
    expect(pneumaticTire1Preset).toMatchInlineSnapshot(`
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
        "key": "pneumatic-tire-1",
        "sku": "pneumatic-tire",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 50000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a pneumaticTire1 preset when built for graphql`, () => {
    const pneumaticTire1PresetGraphql =
      pneumaticTire1().buildGraphql<TStandalonePriceDraft>();
    expect(pneumaticTire1PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "pneumatic-tire-1",
        "sku": "pneumatic-tire",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 50000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
