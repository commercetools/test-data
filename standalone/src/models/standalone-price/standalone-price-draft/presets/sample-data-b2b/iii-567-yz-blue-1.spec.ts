import type { TStandalonePriceDraft } from '../../../types';
import iii567YzBlue1 from './iii-567-yz-blue-1';

describe(`with iii567YzBlue1 preset`, () => {
  it(`should return a iii567YzBlue1 preset`, () => {
    const iii567YzBlue1Preset = iii567YzBlue1().build<TStandalonePriceDraft>();
    expect(iii567YzBlue1Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-blue-1",
        "recurrencePolicy": undefined,
        "sku": "iii567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 14520001,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a iii567YzBlue1 preset when built for graphql`, () => {
    const iii567YzBlue1PresetGraphql =
      iii567YzBlue1().buildGraphql<TStandalonePriceDraft>();
    expect(iii567YzBlue1PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "iii567-yz-blue-1",
        "recurrencePolicy": undefined,
        "sku": "iii567-yz-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 14520001,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
