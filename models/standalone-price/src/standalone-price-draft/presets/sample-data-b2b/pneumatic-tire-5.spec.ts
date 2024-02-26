import type { TStandalonePriceDraft } from '../../../types';
import pneumaticTire5 from './pneumatic-tire-5';

describe(`with pneumaticTire5 preset`, () => {
  it(`should return a pneumaticTire5 preset`, () => {
    const pneumaticTire5Preset =
      pneumaticTire5().build<TStandalonePriceDraft>();
    expect(pneumaticTire5Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pneumatic-tire-5",
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

  it(`should return a pneumaticTire5 preset when built for graphql`, () => {
    const pneumaticTire5PresetGraphql =
      pneumaticTire5().buildGraphql<TStandalonePriceDraft>();
    expect(pneumaticTire5PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pneumatic-tire-5",
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
