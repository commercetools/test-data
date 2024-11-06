import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCc789Uv2019EuWarehouse preset`, () => {
  it(`should return a skuCc789Uv2019EuWarehouse preset when built for rest`, () => {
    const skuCc789Uv2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuCc789Uv2019EuWarehouse()
      .build();
    expect(skuCc789Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCc789Uv2019EuWarehouse preset when built for graphql`, () => {
    const skuCc789Uv2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuCc789Uv2019EuWarehouse()
      .build();
    expect(skuCc789Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCc789Uv2019EuWarehouse preset when built for legacy rest`, () => {
    const skuCc789Uv2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuCc789Uv2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCc789Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCc789Uv2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuCc789Uv2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuCc789Uv2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCc789Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
