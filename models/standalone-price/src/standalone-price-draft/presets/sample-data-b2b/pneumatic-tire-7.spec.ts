import type { TStandalonePriceDraft } from '../../../types';
import pneumaticTire7 from './pneumatic-tire-7';

describe(`with pneumaticTire7 preset`, () => {
  it(`should return a pneumaticTire7 preset`, () => {
    const pneumaticTire7Preset =
      pneumaticTire7().build<TStandalonePriceDraft>();
    expect(pneumaticTire7Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pneumatic-tire-7",
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

  it(`should return a pneumaticTire7 preset when built for graphql`, () => {
    const pneumaticTire7PresetGraphql =
      pneumaticTire7().buildGraphql<TStandalonePriceDraft>();
    expect(pneumaticTire7PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-medium-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pneumatic-tire-7",
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
