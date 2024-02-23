import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpRed6 from './jjj-890-op-red-6';

describe(`with jjj890OpRed6 preset`, () => {
  it(`should return a jjj890OpRed6 preset`, () => {
    const jjj890OpRed6Preset = jjj890OpRed6().build<TStandalonePriceDraft>();
    expect(jjj890OpRed6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-red-6",
        "sku": "jjj890-op-red",
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

  it(`should return a jjj890OpRed6 preset when built for graphql`, () => {
    const jjj890OpRed6PresetGraphql =
      jjj890OpRed6().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpRed6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-red-6",
        "sku": "jjj890-op-red",
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
