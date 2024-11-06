import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHh456St2023UsWarehouse preset`, () => {
  it(`should return a skuHh456St2023UsWarehouse preset when built for rest`, () => {
    const skuHh456St2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuHh456St2023UsWarehouse()
      .build();
    expect(skuHh456St2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2023UsWarehouse preset when built for graphql`, () => {
    const skuHh456St2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuHh456St2023UsWarehouse()
      .build();
    expect(skuHh456St2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2023UsWarehouse preset when built for legacy rest`, () => {
    const skuHh456St2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuHh456St2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHh456St2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuHh456St2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuHh456St2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHh456St2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
