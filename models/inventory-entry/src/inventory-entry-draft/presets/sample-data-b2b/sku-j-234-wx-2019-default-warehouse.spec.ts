import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJ234Wx2019DefaultWarehouse preset`, () => {
  it(`should return a skuJ234Wx2019DefaultWarehouse preset when built for rest`, () => {
    const skuJ234Wx2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuJ234Wx2019DefaultWarehouse()
      .build();
    expect(skuJ234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2019DefaultWarehouse preset when built for graphql`, () => {
    const skuJ234Wx2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuJ234Wx2019DefaultWarehouse()
        .build();
    expect(skuJ234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuJ234Wx2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuJ234Wx2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJ234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuJ234Wx2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuJ234Wx2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJ234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
