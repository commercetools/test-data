import type { TStandalonePriceDraft } from '../../../types';
import alternator8 from './alternator-8';

describe(`with alternator8 preset`, () => {
  it(`should return a alternator8 preset`, () => {
    const alternator8Preset = alternator8().build<TStandalonePriceDraft>();
    expect(alternator8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "alternator-8",
        "recurrencePolicy": undefined,
        "sku": "alternator",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 27500,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a alternator8 preset when built for graphql`, () => {
    const alternator8PresetGraphql =
      alternator8().buildGraphql<TStandalonePriceDraft>();
    expect(alternator8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "alternator-8",
        "recurrencePolicy": undefined,
        "sku": "alternator",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 27500,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
