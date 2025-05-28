import type { TStandalonePriceDraft } from '../../../types';
import iii567YzRed6 from './iii-567-yz-red-6';

describe(`with iii567YzRed6 preset`, () => {
  it(`should return a iii567YzRed6 preset`, () => {
    const iii567YzRed6Preset = iii567YzRed6().build<TStandalonePriceDraft>();
    expect(iii567YzRed6Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-red-6",
        "recurrencePolicy": undefined,
        "sku": "iii567-yz-red",
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

  it(`should return a iii567YzRed6 preset when built for graphql`, () => {
    const iii567YzRed6PresetGraphql =
      iii567YzRed6().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzRed6PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-red-6",
        "recurrencePolicy": undefined,
        "sku": "iii567-yz-red",
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
