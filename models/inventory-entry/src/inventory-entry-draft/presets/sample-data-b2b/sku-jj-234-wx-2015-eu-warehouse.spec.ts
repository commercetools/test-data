import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJj234Wx2015EuWarehouse preset`, () => {
  it(`should return a skuJj234Wx2015EuWarehouse preset when built for rest`, () => {
    const skuJj234Wx2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuJj234Wx2015EuWarehouse()
      .build();
    expect(skuJj234Wx2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2015EuWarehouse preset when built for graphql`, () => {
    const skuJj234Wx2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuJj234Wx2015EuWarehouse()
      .build();
    expect(skuJj234Wx2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2015EuWarehouse preset when built for legacy rest`, () => {
    const skuJj234Wx2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuJj234Wx2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJj234Wx2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJj234Wx2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuJj234Wx2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuJj234Wx2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJj234Wx2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
