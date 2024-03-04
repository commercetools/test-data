import type { TInventoryEntryDraft } from '../../../types';
import skuN123Qr2023Default from './sku-n123-qr-2023-default';

describe(`with skuN123Qr2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuN123Qr2023Default preset`, () => {
    const skuN123Qr2023DefaultPreset =
      skuN123Qr2023Default().build<TInventoryEntryDraft>();
    expect(skuN123Qr2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "n123-qr-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuN123Qr2023Default preset when built for graphql`, () => {
    const skuN123Qr2023DefaultPresetGraphql =
      skuN123Qr2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuN123Qr2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "n123-qr-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
