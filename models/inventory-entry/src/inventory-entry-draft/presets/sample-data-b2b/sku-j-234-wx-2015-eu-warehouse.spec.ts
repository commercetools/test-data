import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJ234Wx2015EuWarehouse preset`, () => {
  it(`should return a skuJ234Wx2015EuWarehouse preset when built for rest`, () => {
    const skuJ234Wx2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuJ234Wx2015EuWarehouse()
      .build();
    expect(skuJ234Wx2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2015EuWarehouse preset when built for graphql`, () => {
    const skuJ234Wx2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuJ234Wx2015EuWarehouse()
      .build();
    expect(skuJ234Wx2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2015EuWarehouse preset when built for legacy rest`, () => {
    const skuJ234Wx2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuJ234Wx2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJ234Wx2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJ234Wx2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuJ234Wx2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuJ234Wx2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJ234Wx2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
