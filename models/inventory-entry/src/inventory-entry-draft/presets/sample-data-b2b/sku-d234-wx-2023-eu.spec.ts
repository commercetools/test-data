import type { TInventoryEntryDraft } from '../../../types';
import skuD234Wx2023Eu from './sku-d234-wx-2023-eu';

describe(`with skuD234Wx2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuD234Wx2023Eu preset`, () => {
    const skuD234Wx2023EuPreset =
      skuD234Wx2023Eu().build<TInventoryEntryDraft>();
    expect(skuD234Wx2023EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "d234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuD234Wx2023Eu preset when built for graphql`, () => {
    const skuD234Wx2023EuPresetGraphql =
      skuD234Wx2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuD234Wx2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "d234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "d234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
