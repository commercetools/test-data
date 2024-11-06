import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuF890Op2015DefaultWarehouse preset`, () => {
  it(`should return a skuF890Op2015DefaultWarehouse preset when built for rest`, () => {
    const skuF890Op2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuF890Op2015DefaultWarehouse()
      .build();
    expect(skuF890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuF890Op2015DefaultWarehouse preset when built for graphql`, () => {
    const skuF890Op2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuF890Op2015DefaultWarehouse()
        .build();
    expect(skuF890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuF890Op2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuF890Op2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuF890Op2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuF890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuF890Op2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuF890Op2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuF890Op2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuF890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
