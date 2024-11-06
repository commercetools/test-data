import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuIi789Uv2019EuWarehouse preset`, () => {
  it(`should return a skuIi789Uv2019EuWarehouse preset when built for rest`, () => {
    const skuIi789Uv2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuIi789Uv2019EuWarehouse()
      .build();
    expect(skuIi789Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2019EuWarehouse preset when built for graphql`, () => {
    const skuIi789Uv2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuIi789Uv2019EuWarehouse()
      .build();
    expect(skuIi789Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2019EuWarehouse preset when built for legacy rest`, () => {
    const skuIi789Uv2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuIi789Uv2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIi789Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIi789Uv2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuIi789Uv2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuIi789Uv2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIi789Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
