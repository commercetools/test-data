import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuNn456St2023DefaultWarehouse preset`, () => {
  it(`should return a skuNn456St2023DefaultWarehouse preset when built for rest`, () => {
    const skuNn456St2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuNn456St2023DefaultWarehouse()
      .build();
    expect(skuNn456St2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuNn456St2023DefaultWarehouse preset when built for graphql`, () => {
    const skuNn456St2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuNn456St2023DefaultWarehouse()
        .build();
    expect(skuNn456St2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuNn456St2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuNn456St2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuNn456St2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNn456St2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuNn456St2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuNn456St2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuNn456St2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNn456St2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
