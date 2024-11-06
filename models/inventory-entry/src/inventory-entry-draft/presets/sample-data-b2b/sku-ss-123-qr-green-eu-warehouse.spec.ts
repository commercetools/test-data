import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuSs123QrGreenEuWarehouse preset`, () => {
  it(`should return a skuSs123QrGreenEuWarehouse preset when built for rest`, () => {
    const skuSs123QrGreenEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuSs123QrGreenEuWarehouse()
      .build();
    expect(skuSs123QrGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrGreenEuWarehouse preset when built for graphql`, () => {
    const skuSs123QrGreenEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuSs123QrGreenEuWarehouse()
      .build();
    expect(skuSs123QrGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuSs123QrGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuSs123QrGreenEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSs123QrGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuSs123QrGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuSs123QrGreenEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSs123QrGreenEuWarehousePreset).toMatchInlineSnapshot();
  });
});
