import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuPp234Wx2015EuWarehouse preset`, () => {
  it(`should return a skuPp234Wx2015EuWarehouse preset when built for rest`, () => {
    const skuPp234Wx2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuPp234Wx2015EuWarehouse()
      .build();
    expect(skuPp234Wx2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2015EuWarehouse preset when built for graphql`, () => {
    const skuPp234Wx2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuPp234Wx2015EuWarehouse()
      .build();
    expect(skuPp234Wx2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2015EuWarehouse preset when built for legacy rest`, () => {
    const skuPp234Wx2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuPp234Wx2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPp234Wx2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuPp234Wx2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuPp234Wx2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPp234Wx2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
