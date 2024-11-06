import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCcc567YzGreenUsWarehouse preset`, () => {
  it(`should return a skuCcc567YzGreenUsWarehouse preset when built for rest`, () => {
    const skuCcc567YzGreenUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuCcc567YzGreenUsWarehouse()
      .build();
    expect(skuCcc567YzGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzGreenUsWarehouse preset when built for graphql`, () => {
    const skuCcc567YzGreenUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuCcc567YzGreenUsWarehouse()
      .build();
    expect(skuCcc567YzGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuCcc567YzGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuCcc567YzGreenUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCcc567YzGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuCcc567YzGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuCcc567YzGreenUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCcc567YzGreenUsWarehousePreset).toMatchInlineSnapshot();
  });
});
