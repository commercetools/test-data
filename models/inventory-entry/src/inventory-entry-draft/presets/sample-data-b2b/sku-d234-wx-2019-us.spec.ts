import type { TInventoryEntryDraft } from '../../../types';
import skuD234Wx2019Us from './sku-d234-wx-2019-us';

describe(`with skuD234Wx2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuD234Wx2019Us preset`, () => {
    const skuD234Wx2019UsPreset =
      skuD234Wx2019Us().build<TInventoryEntryDraft>();
    expect(skuD234Wx2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "d234-wx-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuD234Wx2019Us preset when built for graphql`, () => {
    const skuD234Wx2019UsPresetGraphql =
      skuD234Wx2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuD234Wx2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "d234-wx-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
