import type { TStandalonePriceDraft } from '../../../types';
import k567Yz20153 from './k-567-yz-2015-3';

describe(`with k567Yz20153 preset`, () => {
  it(`should return a k567Yz20153 preset`, () => {
    const k567Yz20153Preset = k567Yz20153().build<TStandalonePriceDraft>();
    expect(k567Yz20153Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2015-3",
        "recurrencePolicy": undefined,
        "sku": "k567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1716000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a k567Yz20153 preset when built for graphql`, () => {
    const k567Yz20153PresetGraphql =
      k567Yz20153().buildGraphql<TStandalonePriceDraft>();
    expect(k567Yz20153PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "k567-yz-2015-3",
        "recurrencePolicy": undefined,
        "sku": "k567-yz-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1716000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
