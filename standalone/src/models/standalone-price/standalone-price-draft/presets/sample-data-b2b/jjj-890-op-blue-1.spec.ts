import type { TStandalonePriceDraft } from '../../../types';
import jjj890OpBlue1 from './jjj-890-op-blue-1';

describe(`with jjj890OpBlue1 preset`, () => {
  it(`should return a jjj890OpBlue1 preset`, () => {
    const jjj890OpBlue1Preset = jjj890OpBlue1().build<TStandalonePriceDraft>();
    expect(jjj890OpBlue1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-blue-1",
        "recurrencePolicy": undefined,
        "sku": "jjj890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 10890000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a jjj890OpBlue1 preset when built for graphql`, () => {
    const jjj890OpBlue1PresetGraphql =
      jjj890OpBlue1().buildGraphql<TStandalonePriceDraft>();
    expect(jjj890OpBlue1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jjj890-op-blue-1",
        "recurrencePolicy": undefined,
        "sku": "jjj890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 10890000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
