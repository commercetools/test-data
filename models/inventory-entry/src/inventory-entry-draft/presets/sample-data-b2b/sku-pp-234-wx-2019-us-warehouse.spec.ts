import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuPp234Wx2019UsWarehouse preset`, () => {
  it(`should return a skuPp234Wx2019UsWarehouse preset when built for rest`, () => {
    const skuPp234Wx2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuPp234Wx2019UsWarehouse()
      .build();
    expect(skuPp234Wx2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2019UsWarehouse preset when built for graphql`, () => {
    const skuPp234Wx2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuPp234Wx2019UsWarehouse()
      .build();
    expect(skuPp234Wx2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2019UsWarehouse preset when built for legacy rest`, () => {
    const skuPp234Wx2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuPp234Wx2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPp234Wx2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuPp234Wx2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuPp234Wx2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPp234Wx2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
