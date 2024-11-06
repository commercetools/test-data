import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuV456St2023UsWarehouse preset`, () => {
  it(`should return a skuV456St2023UsWarehouse preset when built for rest`, () => {
    const skuV456St2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuV456St2023UsWarehouse()
      .build();
    expect(skuV456St2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuV456St2023UsWarehouse preset when built for graphql`, () => {
    const skuV456St2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuV456St2023UsWarehouse()
      .build();
    expect(skuV456St2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuV456St2023UsWarehouse preset when built for legacy rest`, () => {
    const skuV456St2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuV456St2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuV456St2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuV456St2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuV456St2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuV456St2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuV456St2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
