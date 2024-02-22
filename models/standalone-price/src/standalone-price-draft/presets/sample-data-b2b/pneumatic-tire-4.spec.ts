import type { TStandalonePriceDraft } from '../../../types';
import pneumaticTire4 from './pneumatic-tire-4';

describe(`with pneumaticTire4 preset`, () => {
  it(`should return a pneumaticTire4 preset`, () => {
    const pneumaticTire4Preset =
      pneumaticTire4().build<TStandalonePriceDraft>();
    expect(pneumaticTire4Preset).toMatchInlineSnapshot(`
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
        "key": "pneumatic-tire-4",
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

  it(`should return a pneumaticTire4 preset when built for graphql`, () => {
    const pneumaticTire4PresetGraphql =
      pneumaticTire4().buildGraphql<TStandalonePriceDraft>();
    expect(pneumaticTire4PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "pneumatic-tire-4",
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
