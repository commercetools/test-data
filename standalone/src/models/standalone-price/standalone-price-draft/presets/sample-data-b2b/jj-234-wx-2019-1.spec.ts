import type { TStandalonePriceDraft } from '../../../types';
import jj234Wx20191 from './jj-234-wx-2019-1';

describe(`with jj234Wx20191 preset`, () => {
  it(`should return a jj234Wx20191 preset`, () => {
    const jj234Wx20191Preset = jj234Wx20191().build<TStandalonePriceDraft>();
    expect(jj234Wx20191Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2019-1",
        "recurrencePolicy": undefined,
        "sku": "jj234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3025000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a jj234Wx20191 preset when built for graphql`, () => {
    const jj234Wx20191PresetGraphql =
      jj234Wx20191().buildGraphql<TStandalonePriceDraft>();
    expect(jj234Wx20191PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "jj234-wx-2019-1",
        "recurrencePolicy": undefined,
        "sku": "jj234-wx-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3025000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
