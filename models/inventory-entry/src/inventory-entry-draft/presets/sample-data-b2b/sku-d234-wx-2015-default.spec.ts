import type { TInventoryEntryDraft } from '../../../types';
import skuD234Wx2015Default from './sku-d234-wx-2015-default';

describe(`with skuD234Wx2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuD234Wx2015Default preset`, () => {
    const skuD234Wx2015DefaultPreset =
      skuD234Wx2015Default().build<TInventoryEntryDraft>();
    expect(skuD234Wx2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "d234-wx-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuD234Wx2015Default preset when built for graphql`, () => {
    const skuD234Wx2015DefaultPresetGraphql =
      skuD234Wx2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuD234Wx2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "d234-wx-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
