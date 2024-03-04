import type { TInventoryEntryDraft } from '../../../types';
import skuP234Qw2015Eu from './sku-p234-qw-2015-eu';

describe(`with skuP234Qw2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuP234Qw2015Eu preset`, () => {
    const skuP234Qw2015EuPreset =
      skuP234Qw2015Eu().build<TInventoryEntryDraft>();
    expect(skuP234Qw2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuP234Qw2015Eu preset when built for graphql`, () => {
    const skuP234Qw2015EuPresetGraphql =
      skuP234Qw2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuP234Qw2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
