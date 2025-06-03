import type { TStandalonePriceDraft } from '../../../types';
import pneumaticTire8 from './pneumatic-tire-8';

describe(`with pneumaticTire8 preset`, () => {
  it(`should return a pneumaticTire8 preset`, () => {
    const pneumaticTire8Preset =
      pneumaticTire8().build<TStandalonePriceDraft>();
    expect(pneumaticTire8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pneumatic-tire-8",
        "recurrencePolicy": undefined,
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

  it(`should return a pneumaticTire8 preset when built for graphql`, () => {
    const pneumaticTire8PresetGraphql =
      pneumaticTire8().buildGraphql<TStandalonePriceDraft>();
    expect(pneumaticTire8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pneumatic-tire-8",
        "recurrencePolicy": undefined,
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
