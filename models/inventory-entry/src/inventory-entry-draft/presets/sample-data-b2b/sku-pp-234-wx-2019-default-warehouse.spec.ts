import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuPp234Wx2019DefaultWarehouse preset`, () => {
  it(`should return a skuPp234Wx2019DefaultWarehouse preset when built for rest`, () => {
    const skuPp234Wx2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuPp234Wx2019DefaultWarehouse()
      .build();
    expect(skuPp234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2019DefaultWarehouse preset when built for graphql`, () => {
    const skuPp234Wx2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuPp234Wx2019DefaultWarehouse()
        .build();
    expect(skuPp234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuPp234Wx2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuPp234Wx2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPp234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuPp234Wx2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuPp234Wx2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPp234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
