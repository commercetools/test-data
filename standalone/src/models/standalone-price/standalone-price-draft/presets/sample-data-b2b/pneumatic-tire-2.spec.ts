import type { TStandalonePriceDraft } from '../../../types';
import pneumaticTire2 from './pneumatic-tire-2';

describe(`with pneumaticTire2 preset`, () => {
  it(`should return a pneumaticTire2 preset`, () => {
    const pneumaticTire2Preset =
      pneumaticTire2().build<TStandalonePriceDraft>();
    expect(pneumaticTire2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pneumatic-tire-2",
        "recurrencePolicy": undefined,
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

  it(`should return a pneumaticTire2 preset when built for graphql`, () => {
    const pneumaticTire2PresetGraphql =
      pneumaticTire2().buildGraphql<TStandalonePriceDraft>();
    expect(pneumaticTire2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "pneumatic-tire-2",
        "recurrencePolicy": undefined,
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
