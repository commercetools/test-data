import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuQq567Yz2023EuWarehouse preset`, () => {
  it(`should return a skuQq567Yz2023EuWarehouse preset when built for rest`, () => {
    const skuQq567Yz2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuQq567Yz2023EuWarehouse()
      .build();
    expect(skuQq567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuQq567Yz2023EuWarehouse preset when built for graphql`, () => {
    const skuQq567Yz2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuQq567Yz2023EuWarehouse()
      .build();
    expect(skuQq567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuQq567Yz2023EuWarehouse preset when built for legacy rest`, () => {
    const skuQq567Yz2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuQq567Yz2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuQq567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuQq567Yz2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuQq567Yz2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuQq567Yz2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuQq567Yz2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
