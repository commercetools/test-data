import type { TInventoryEntryDraft } from '../../../types';
import skuD234Wx2023Default from './sku-d234-wx-2023-default';

describe(`with skuD234Wx2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuD234Wx2023Default preset`, () => {
    const skuD234Wx2023DefaultPreset =
      skuD234Wx2023Default().build<TInventoryEntryDraft>();
    expect(skuD234Wx2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "d234-wx-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuD234Wx2023Default preset when built for graphql`, () => {
    const skuD234Wx2023DefaultPresetGraphql =
      skuD234Wx2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuD234Wx2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "d234-wx-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
