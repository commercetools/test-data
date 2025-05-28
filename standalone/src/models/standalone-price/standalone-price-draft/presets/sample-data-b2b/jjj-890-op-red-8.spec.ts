import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpRed8 from './jjj-890-op-red-8';

describe(`with jjj890OpRed8 preset`, () => {
  it(`should return a jjj890OpRed8 preset`, () => {
    const jjj890OpRed8Preset = jjj890OpRed8().build<TStandalonePriceDraft>();
    expect(jjj890OpRed8Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-red-8",
        "recurrencePolicy": undefined,
        "sku": "jjj890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9900000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a jjj890OpRed8 preset when built for graphql`, () => {
    const jjj890OpRed8PresetGraphql =
      jjj890OpRed8().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpRed8PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-red-8",
        "recurrencePolicy": undefined,
        "sku": "jjj890-op-red",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9900000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
