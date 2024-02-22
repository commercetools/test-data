import type { TInventoryEntryDraft } from '../../../types';
import skuN123Qr2023 from './sku-n-123-qr-2023';

describe(`with skuN123Qr2023 preset`, () => {
  it(`should return a skuN123Qr2023 preset`, () => {
    const skuN123Qr2023Preset = skuN123Qr2023().build<TInventoryEntryDraft>();
    expect(skuN123Qr2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuN123Qr2023 preset when built for graphql`, () => {
    const skuN123Qr2023PresetGraphql =
      skuN123Qr2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuN123Qr2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
