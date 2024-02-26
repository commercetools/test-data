import type { TInventoryEntryDraft } from '../../../types';
import skuU123Qr2015 from './sku-u-123-qr-2015';

describe(`with skuU123Qr2015 preset`, () => {
  it(`should return a skuU123Qr2015 preset`, () => {
    const skuU123Qr2015Preset = skuU123Qr2015().build<TInventoryEntryDraft>();
    expect(skuU123Qr2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuU123Qr2015 preset when built for graphql`, () => {
    const skuU123Qr2015PresetGraphql =
      skuU123Qr2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuU123Qr2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
