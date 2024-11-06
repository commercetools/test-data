import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHh456St2023DefaultWarehouse preset`, () => {
  it(`should return a skuHh456St2023DefaultWarehouse preset when built for rest`, () => {
    const skuHh456St2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuHh456St2023DefaultWarehouse()
      .build();
    expect(skuHh456St2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2023DefaultWarehouse preset when built for graphql`, () => {
    const skuHh456St2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuHh456St2023DefaultWarehouse()
        .build();
    expect(skuHh456St2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuHh456St2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuHh456St2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHh456St2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuHh456St2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuHh456St2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHh456St2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
