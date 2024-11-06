import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuVv234WxGreenEuWarehouse preset`, () => {
  it(`should return a skuVv234WxGreenEuWarehouse preset when built for rest`, () => {
    const skuVv234WxGreenEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuVv234WxGreenEuWarehouse()
      .build();
    expect(skuVv234WxGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxGreenEuWarehouse preset when built for graphql`, () => {
    const skuVv234WxGreenEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuVv234WxGreenEuWarehouse()
      .build();
    expect(skuVv234WxGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuVv234WxGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuVv234WxGreenEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuVv234WxGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuVv234WxGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuVv234WxGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuVv234WxGreenEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuVv234WxGreenEuWarehousePreset).toMatchInlineSnapshot();
  });
});
