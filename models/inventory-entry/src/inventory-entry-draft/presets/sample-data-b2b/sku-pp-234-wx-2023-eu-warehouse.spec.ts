import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuPp234Wx2023EuWarehouse preset`, () => {
  it(`should return a skuPp234Wx2023EuWarehouse preset when built for rest`, () => {
    const skuPp234Wx2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuPp234Wx2023EuWarehouse()
      .build();
    expect(skuPp234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2023EuWarehouse preset when built for graphql`, () => {
    const skuPp234Wx2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuPp234Wx2023EuWarehouse()
      .build();
    expect(skuPp234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2023EuWarehouse preset when built for legacy rest`, () => {
    const skuPp234Wx2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuPp234Wx2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPp234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuPp234Wx2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuPp234Wx2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPp234Wx2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
