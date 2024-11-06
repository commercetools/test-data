import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuV456St2023DefaultWarehouse preset`, () => {
  it(`should return a skuV456St2023DefaultWarehouse preset when built for rest`, () => {
    const skuV456St2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuV456St2023DefaultWarehouse()
      .build();
    expect(skuV456St2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuV456St2023DefaultWarehouse preset when built for graphql`, () => {
    const skuV456St2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuV456St2023DefaultWarehouse()
        .build();
    expect(skuV456St2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuV456St2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuV456St2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuV456St2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuV456St2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuV456St2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuV456St2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuV456St2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuV456St2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
