import type { TStandalonePriceDraft } from '../../../types';
import aaa789UvBlue2 from './aaa-789-uv-blue-2';

describe(`with aaa789UvBlue2 preset`, () => {
  it(`should return a aaa789UvBlue2 preset`, () => {
    const aaa789UvBlue2Preset = aaa789UvBlue2().build<TStandalonePriceDraft>();
    expect(aaa789UvBlue2Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-blue-2",
        "recurrencePolicy": undefined,
        "sku": "aaa789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 4950000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a aaa789UvBlue2 preset when built for graphql`, () => {
    const aaa789UvBlue2PresetGraphql =
      aaa789UvBlue2().buildGraphql<TStandalonePriceDraft>();
    expect(aaa789UvBlue2PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "aaa789-uv-blue-2",
        "recurrencePolicy": undefined,
        "sku": "aaa789-uv-blue",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 4950000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
