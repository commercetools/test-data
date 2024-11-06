import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuIi789Uv2023EuWarehouse preset`, () => {
  it(`should return a skuIi789Uv2023EuWarehouse preset when built for rest`, () => {
    const skuIi789Uv2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuIi789Uv2023EuWarehouse()
      .build();
    expect(skuIi789Uv2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2023EuWarehouse preset when built for graphql`, () => {
    const skuIi789Uv2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuIi789Uv2023EuWarehouse()
      .build();
    expect(skuIi789Uv2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2023EuWarehouse preset when built for legacy rest`, () => {
    const skuIi789Uv2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuIi789Uv2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIi789Uv2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuIi789Uv2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuIi789Uv2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIi789Uv2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
