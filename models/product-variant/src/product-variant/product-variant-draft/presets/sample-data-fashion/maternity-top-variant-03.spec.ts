import { TProductVariantDraft } from '../../../types';
import maternityTopVariant03 from './maternity-top-variant-03';

describe(`with maternityTopVariant03 preset`, () => {
  it(`should return a maternityTopVariant03 preset`, () => {
    const maternityTopVariant03Preset =
      maternityTopVariant03().build<TProductVariantDraft>();
    expect(maternityTopVariant03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "size",
            "value": {
              "key": "Large",
              "label": "Large",
            },
          },
          {
            "name": "color",
            "value": {
              "key": "Green",
              "label": "Green",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 300,
              "w": 262,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-lOB-DcqK.png",
          },
        ],
        "key": "118718",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 2695,
              "currencyCode": "EUR",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "118718",
      }
    `);
  });

  it(`should return a maternityTopVariant03 preset when built for graphql`, () => {
    const maternityTopVariant03PresetGraphql =
      maternityTopVariant03().buildGraphql<TProductVariantDraft>();
    expect(maternityTopVariant03PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "ProductVariantInput",
        "assets": undefined,
        "attributes": [
          {
            "__typename": "ProductAttributeInput",
            "name": "size",
            "value": {
              "key": "Large",
              "label": "Large",
            },
          },
          {
            "__typename": "ProductAttributeInput",
            "name": "color",
            "value": {
              "key": "Green",
              "label": "Green",
            },
          },
        ],
        "images": [
          {
            "__typename": "Image",
            "dimensions": {
              "h": 300,
              "w": 262,
            },
            "label": undefined,
            "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-lOB-DcqK.png",
          },
        ],
        "key": "118718",
        "prices": [
          {
            "__typename": "ProductPriceDataInput",
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "__typename": "MoneyInput",
              "centAmount": 2695,
              "currencyCode": "EUR",
              "fractionDigits": 2,
              "type": "centPrecision",
            },
          },
        ],
        "sku": "118718",
      }
    `);
  });
});
