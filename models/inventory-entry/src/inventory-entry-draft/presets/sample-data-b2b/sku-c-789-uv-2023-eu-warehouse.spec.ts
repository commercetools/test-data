import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuC789Uv2023EuWarehouse preset`, () => {
  it(`should return a skuC789Uv2023EuWarehouse preset when built for rest`, () => {
    const skuC789Uv2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuC789Uv2023EuWarehouse()
      .build();
    expect(skuC789Uv2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2023EuWarehouse preset when built for graphql`, () => {
    const skuC789Uv2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuC789Uv2023EuWarehouse()
      .build();
    expect(skuC789Uv2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2023EuWarehouse preset when built for legacy rest`, () => {
    const skuC789Uv2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuC789Uv2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuC789Uv2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuC789Uv2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuC789Uv2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuC789Uv2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
