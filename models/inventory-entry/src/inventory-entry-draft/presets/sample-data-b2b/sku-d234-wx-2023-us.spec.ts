import type { TInventoryEntryDraft } from '../../../types';
import skuD234Wx2023Us from './sku-d234-wx-2023-us';

describe(`with skuD234Wx2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuD234Wx2023Us preset`, () => {
    const skuD234Wx2023UsPreset =
      skuD234Wx2023Us().build<TInventoryEntryDraft>();
    expect(skuD234Wx2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "d234-wx-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuD234Wx2023Us preset when built for graphql`, () => {
    const skuD234Wx2023UsPresetGraphql =
      skuD234Wx2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuD234Wx2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "d234-wx-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
