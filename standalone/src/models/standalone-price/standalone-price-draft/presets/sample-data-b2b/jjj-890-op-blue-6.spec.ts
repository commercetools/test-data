import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpBlue6 from './jjj-890-op-blue-6';

describe(`with jjj890OpBlue6 preset`, () => {
  it(`should return a jjj890OpBlue6 preset`, () => {
    const jjj890OpBlue6Preset = jjj890OpBlue6().build<TStandalonePriceDraft>();
    expect(jjj890OpBlue6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-blue-6",
        "recurrencePolicy": undefined,
        "sku": "jjj890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 7200000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a jjj890OpBlue6 preset when built for graphql`, () => {
    const jjj890OpBlue6PresetGraphql =
      jjj890OpBlue6().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpBlue6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-blue-6",
        "recurrencePolicy": undefined,
        "sku": "jjj890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 7200000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
