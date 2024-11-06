import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuF890Op2023UsWarehouse preset`, () => {
  it(`should return a skuF890Op2023UsWarehouse preset when built for rest`, () => {
    const skuF890Op2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuF890Op2023UsWarehouse()
      .build();
    expect(skuF890Op2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuF890Op2023UsWarehouse preset when built for graphql`, () => {
    const skuF890Op2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuF890Op2023UsWarehouse()
      .build();
    expect(skuF890Op2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuF890Op2023UsWarehouse preset when built for legacy rest`, () => {
    const skuF890Op2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuF890Op2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuF890Op2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuF890Op2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuF890Op2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuF890Op2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuF890Op2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
