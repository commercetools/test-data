import type { TInventoryEntryDraft } from '../../../types';
import skuG123Qr2023 from './sku-g-123-qr-2023';

describe(`with skuG123Qr2023 preset`, () => {
  it(`should return a skuG123Qr2023 preset`, () => {
    const skuG123Qr2023Preset = skuG123Qr2023().build<TInventoryEntryDraft>();
    expect(skuG123Qr2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuG123Qr2023 preset when built for graphql`, () => {
    const skuG123Qr2023PresetGraphql =
      skuG123Qr2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuG123Qr2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
