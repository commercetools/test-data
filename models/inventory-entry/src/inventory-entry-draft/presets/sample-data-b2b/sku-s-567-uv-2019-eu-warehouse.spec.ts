import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuS567Uv2019EuWarehouse preset`, () => {
  it(`should return a skuS567Uv2019EuWarehouse preset when built for rest`, () => {
    const skuS567Uv2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuS567Uv2019EuWarehouse()
      .build();
    expect(skuS567Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuS567Uv2019EuWarehouse preset when built for graphql`, () => {
    const skuS567Uv2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuS567Uv2019EuWarehouse()
      .build();
    expect(skuS567Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuS567Uv2019EuWarehouse preset when built for legacy rest`, () => {
    const skuS567Uv2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuS567Uv2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuS567Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuS567Uv2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuS567Uv2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuS567Uv2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuS567Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
