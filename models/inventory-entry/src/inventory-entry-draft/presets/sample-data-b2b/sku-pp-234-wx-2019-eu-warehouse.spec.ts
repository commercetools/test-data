import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuPp234Wx2019EuWarehouse preset`, () => {
  it(`should return a skuPp234Wx2019EuWarehouse preset when built for rest`, () => {
    const skuPp234Wx2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuPp234Wx2019EuWarehouse()
      .build();
    expect(skuPp234Wx2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2019EuWarehouse preset when built for graphql`, () => {
    const skuPp234Wx2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuPp234Wx2019EuWarehouse()
      .build();
    expect(skuPp234Wx2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2019EuWarehouse preset when built for legacy rest`, () => {
    const skuPp234Wx2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuPp234Wx2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPp234Wx2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuPp234Wx2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuPp234Wx2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuPp234Wx2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPp234Wx2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
