import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuYy123QrGreenEuWarehouse preset`, () => {
  it(`should return a skuYy123QrGreenEuWarehouse preset when built for rest`, () => {
    const skuYy123QrGreenEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuYy123QrGreenEuWarehouse()
      .build();
    expect(skuYy123QrGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrGreenEuWarehouse preset when built for graphql`, () => {
    const skuYy123QrGreenEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuYy123QrGreenEuWarehouse()
      .build();
    expect(skuYy123QrGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuYy123QrGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuYy123QrGreenEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuYy123QrGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuYy123QrGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuYy123QrGreenEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuYy123QrGreenEuWarehousePreset).toMatchInlineSnapshot();
  });
});
