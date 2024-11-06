import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHh456St2023EuWarehouse preset`, () => {
  it(`should return a skuHh456St2023EuWarehouse preset when built for rest`, () => {
    const skuHh456St2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuHh456St2023EuWarehouse()
      .build();
    expect(skuHh456St2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2023EuWarehouse preset when built for graphql`, () => {
    const skuHh456St2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuHh456St2023EuWarehouse()
      .build();
    expect(skuHh456St2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2023EuWarehouse preset when built for legacy rest`, () => {
    const skuHh456St2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuHh456St2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHh456St2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuHh456St2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuHh456St2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuHh456St2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHh456St2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
