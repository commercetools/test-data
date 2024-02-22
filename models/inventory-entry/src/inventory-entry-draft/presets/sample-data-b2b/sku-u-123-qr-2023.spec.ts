import type { TInventoryEntryDraft } from '../../../types';
import skuU123Qr2023 from './sku-u-123-qr-2023';

describe(`with skuU123Qr2023 preset`, () => {
  it(`should return a skuU123Qr2023 preset`, () => {
    const skuU123Qr2023Preset = skuU123Qr2023().build<TInventoryEntryDraft>();
    expect(skuU123Qr2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuU123Qr2023 preset when built for graphql`, () => {
    const skuU123Qr2023PresetGraphql =
      skuU123Qr2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuU123Qr2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
