import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20192 from './jj-234-wx-2019-2';

describe(`with jj234Wx20192 preset`, () => {
  it(`should return a jj234Wx20192 preset`, () => {
    const jj234Wx20192Preset = jj234Wx20192().build<TStandalonePriceDraft>();
    expect(jj234Wx20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2019-2",
        "recurrencePolicy": undefined,
        "sku": "jj234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a jj234Wx20192 preset when built for graphql`, () => {
    const jj234Wx20192PresetGraphql =
      jj234Wx20192().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2019-2",
        "recurrencePolicy": undefined,
        "sku": "jj234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
