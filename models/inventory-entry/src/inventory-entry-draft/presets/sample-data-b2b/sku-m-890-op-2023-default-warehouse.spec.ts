import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuM890Op2023DefaultWarehouse preset`, () => {
  it(`should return a skuM890Op2023DefaultWarehouse preset when built for rest`, () => {
    const skuM890Op2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuM890Op2023DefaultWarehouse()
      .build();
    expect(skuM890Op2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2023DefaultWarehouse preset when built for graphql`, () => {
    const skuM890Op2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuM890Op2023DefaultWarehouse()
        .build();
    expect(skuM890Op2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuM890Op2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuM890Op2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuM890Op2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuM890Op2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuM890Op2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuM890Op2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
