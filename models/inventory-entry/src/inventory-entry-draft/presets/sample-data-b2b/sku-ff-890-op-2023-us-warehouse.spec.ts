import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFf890Op2023UsWarehouse preset`, () => {
  it(`should return a skuFf890Op2023UsWarehouse preset when built for rest`, () => {
    const skuFf890Op2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuFf890Op2023UsWarehouse()
      .build();
    expect(skuFf890Op2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2023UsWarehouse preset when built for graphql`, () => {
    const skuFf890Op2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuFf890Op2023UsWarehouse()
      .build();
    expect(skuFf890Op2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2023UsWarehouse preset when built for legacy rest`, () => {
    const skuFf890Op2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuFf890Op2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFf890Op2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuFf890Op2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuFf890Op2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFf890Op2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
