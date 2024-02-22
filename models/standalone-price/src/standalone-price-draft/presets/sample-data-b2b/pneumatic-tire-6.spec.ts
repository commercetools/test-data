import type { TStandalonePriceDraft } from '../../../types';
import pneumaticTire6 from './pneumatic-tire-6';

describe(`with pneumaticTire6 preset`, () => {
  it(`should return a pneumaticTire6 preset`, () => {
    const pneumaticTire6Preset =
      pneumaticTire6().build<TStandalonePriceDraft>();
    expect(pneumaticTire6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pneumatic-tire-6",
        "sku": "pneumatic-tire",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 50000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a pneumaticTire6 preset when built for graphql`, () => {
    const pneumaticTire6PresetGraphql =
      pneumaticTire6().buildGraphql<TStandalonePriceDraft>();
    expect(pneumaticTire6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pneumatic-tire-6",
        "sku": "pneumatic-tire",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 50000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
