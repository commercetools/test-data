import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuV456St2015DefaultWarehouse preset`, () => {
  it(`should return a skuV456St2015DefaultWarehouse preset when built for rest`, () => {
    const skuV456St2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuV456St2015DefaultWarehouse()
      .build();
    expect(skuV456St2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuV456St2015DefaultWarehouse preset when built for graphql`, () => {
    const skuV456St2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuV456St2015DefaultWarehouse()
        .build();
    expect(skuV456St2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuV456St2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuV456St2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuV456St2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuV456St2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuV456St2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuV456St2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuV456St2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuV456St2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
