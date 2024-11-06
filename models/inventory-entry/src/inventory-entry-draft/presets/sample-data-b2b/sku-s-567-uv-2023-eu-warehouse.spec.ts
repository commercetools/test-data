import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuS567Uv2023EuWarehouse preset`, () => {
  it(`should return a skuS567Uv2023EuWarehouse preset when built for rest`, () => {
    const skuS567Uv2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuS567Uv2023EuWarehouse()
      .build();
    expect(skuS567Uv2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuS567Uv2023EuWarehouse preset when built for graphql`, () => {
    const skuS567Uv2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuS567Uv2023EuWarehouse()
      .build();
    expect(skuS567Uv2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuS567Uv2023EuWarehouse preset when built for legacy rest`, () => {
    const skuS567Uv2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuS567Uv2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuS567Uv2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuS567Uv2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuS567Uv2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuS567Uv2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuS567Uv2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
