import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpGreen4 from './jjj-890-op-green-4';

describe(`with jjj890OpGreen4 preset`, () => {
  it(`should return a jjj890OpGreen4 preset`, () => {
    const jjj890OpGreen4Preset =
      jjj890OpGreen4().build<TStandalonePriceDraft>();
    expect(jjj890OpGreen4Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-green-4",
        "recurrencePolicy": undefined,
        "sku": "jjj890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9000000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a jjj890OpGreen4 preset when built for graphql`, () => {
    const jjj890OpGreen4PresetGraphql =
      jjj890OpGreen4().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpGreen4PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-green-4",
        "recurrencePolicy": undefined,
        "sku": "jjj890-op-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9000000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
