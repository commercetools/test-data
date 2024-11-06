import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuPp234Wx2023UsWarehouse preset`, () => {
  it(`should return a skuPp234Wx2023UsWarehouse preset when built for rest`, () => {
    const skuPp234Wx2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuPp234Wx2023UsWarehouse()
      .build();
    expect(skuPp234Wx2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2023UsWarehouse preset when built for graphql`, () => {
    const skuPp234Wx2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuPp234Wx2023UsWarehouse()
      .build();
    expect(skuPp234Wx2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2023UsWarehouse preset when built for legacy rest`, () => {
    const skuPp234Wx2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuPp234Wx2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPp234Wx2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuPp234Wx2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuPp234Wx2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPp234Wx2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
