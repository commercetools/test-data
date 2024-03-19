import type { TInventoryEntryDraft } from '../../../types';
import skuP234Qw2023Us from './sku-p234-qw-2023-us';

describe(`with skuP234Qw2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuP234Qw2023Us preset`, () => {
    const skuP234Qw2023UsPreset =
      skuP234Qw2023Us().build<TInventoryEntryDraft>();
    expect(skuP234Qw2023UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuP234Qw2023Us preset when built for graphql`, () => {
    const skuP234Qw2023UsPresetGraphql =
      skuP234Qw2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuP234Qw2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
