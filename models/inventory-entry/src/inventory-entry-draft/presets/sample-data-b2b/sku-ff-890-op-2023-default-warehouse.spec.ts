import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFf890Op2023DefaultWarehouse preset`, () => {
  it(`should return a skuFf890Op2023DefaultWarehouse preset when built for rest`, () => {
    const skuFf890Op2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuFf890Op2023DefaultWarehouse()
      .build();
    expect(skuFf890Op2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2023DefaultWarehouse preset when built for graphql`, () => {
    const skuFf890Op2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuFf890Op2023DefaultWarehouse()
        .build();
    expect(skuFf890Op2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuFf890Op2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuFf890Op2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFf890Op2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuFf890Op2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuFf890Op2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFf890Op2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
