import type { TStandalonePriceDraft } from '../../../types';
import ddd890OpBlue1 from './ddd-890-op-blue-1';

describe(`with ddd890OpBlue1 preset`, () => {
  it(`should return a ddd890OpBlue1 preset`, () => {
    const ddd890OpBlue1Preset = ddd890OpBlue1().build<TStandalonePriceDraft>();
    expect(ddd890OpBlue1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-blue-1",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9075001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a ddd890OpBlue1 preset when built for graphql`, () => {
    const ddd890OpBlue1PresetGraphql =
      ddd890OpBlue1().buildGraphql<TStandalonePriceDraft>();
    expect(ddd890OpBlue1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "ddd890-op-blue-1",
        "recurrencePolicy": undefined,
        "sku": "ddd890-op-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9075001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
