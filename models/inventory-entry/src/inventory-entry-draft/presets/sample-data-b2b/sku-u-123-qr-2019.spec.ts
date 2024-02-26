import type { TInventoryEntryDraft } from '../../../types';
import skuU123Qr2019 from './sku-u-123-qr-2019';

describe(`with skuU123Qr2019 preset`, () => {
  it(`should return a skuU123Qr2019 preset`, () => {
    const skuU123Qr2019Preset = skuU123Qr2019().build<TInventoryEntryDraft>();
    expect(skuU123Qr2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuU123Qr2019 preset when built for graphql`, () => {
    const skuU123Qr2019PresetGraphql =
      skuU123Qr2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuU123Qr2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
