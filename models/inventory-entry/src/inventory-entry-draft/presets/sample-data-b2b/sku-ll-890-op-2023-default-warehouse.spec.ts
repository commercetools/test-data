import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuLl890Op2023DefaultWarehouse preset`, () => {
  it(`should return a skuLl890Op2023DefaultWarehouse preset when built for rest`, () => {
    const skuLl890Op2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuLl890Op2023DefaultWarehouse()
      .build();
    expect(skuLl890Op2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2023DefaultWarehouse preset when built for graphql`, () => {
    const skuLl890Op2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuLl890Op2023DefaultWarehouse()
        .build();
    expect(skuLl890Op2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuLl890Op2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuLl890Op2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLl890Op2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuLl890Op2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuLl890Op2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLl890Op2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
