import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuQq567Yz2019EuWarehouse preset`, () => {
  it(`should return a skuQq567Yz2019EuWarehouse preset when built for rest`, () => {
    const skuQq567Yz2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuQq567Yz2019EuWarehouse()
      .build();
    expect(skuQq567Yz2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuQq567Yz2019EuWarehouse preset when built for graphql`, () => {
    const skuQq567Yz2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuQq567Yz2019EuWarehouse()
      .build();
    expect(skuQq567Yz2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuQq567Yz2019EuWarehouse preset when built for legacy rest`, () => {
    const skuQq567Yz2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuQq567Yz2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuQq567Yz2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuQq567Yz2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuQq567Yz2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuQq567Yz2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuQq567Yz2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
