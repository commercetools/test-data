import type { TInventoryEntryDraft } from '../../../types';
import skuMm123Qr2023 from './sku-mm-123-qr-2023';

describe(`with skuMm123Qr2023 preset`, () => {
  it(`should return a skuMm123Qr2023 preset`, () => {
    const skuMm123Qr2023Preset = skuMm123Qr2023().build<TInventoryEntryDraft>();
    expect(skuMm123Qr2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMm123Qr2023 preset when built for graphql`, () => {
    const skuMm123Qr2023PresetGraphql =
      skuMm123Qr2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuMm123Qr2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
