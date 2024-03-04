import type { TInventoryEntryDraft } from '../../../types';
import skuD234Wx2015Us from './sku-d234-wx-2015-us';

describe(`with skuD234Wx2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuD234Wx2015Us preset`, () => {
    const skuD234Wx2015UsPreset =
      skuD234Wx2015Us().build<TInventoryEntryDraft>();
    expect(skuD234Wx2015UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "d234-wx-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuD234Wx2015Us preset when built for graphql`, () => {
    const skuD234Wx2015UsPresetGraphql =
      skuD234Wx2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuD234Wx2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "d234-wx-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
