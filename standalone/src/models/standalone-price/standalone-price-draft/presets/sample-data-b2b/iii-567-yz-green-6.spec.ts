import type { TStandalonePriceDraft } from '../../../types';
import iii567YzGreen6 from './iii-567-yz-green-6';

describe(`with iii567YzGreen6 preset`, () => {
  it(`should return a iii567YzGreen6 preset`, () => {
    const iii567YzGreen6Preset =
      iii567YzGreen6().build<TStandalonePriceDraft>();
    expect(iii567YzGreen6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-green-6",
        "recurrencePolicy": undefined,
        "sku": "iii567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 9600000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a iii567YzGreen6 preset when built for graphql`, () => {
    const iii567YzGreen6PresetGraphql =
      iii567YzGreen6().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzGreen6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-green-6",
        "recurrencePolicy": undefined,
        "sku": "iii567-yz-green",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 9600000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
