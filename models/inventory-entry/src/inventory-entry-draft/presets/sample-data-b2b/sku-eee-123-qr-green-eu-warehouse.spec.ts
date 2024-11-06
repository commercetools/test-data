import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuEee123QrGreenEuWarehouse preset`, () => {
  it(`should return a skuEee123QrGreenEuWarehouse preset when built for rest`, () => {
    const skuEee123QrGreenEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuEee123QrGreenEuWarehouse()
      .build();
    expect(skuEee123QrGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrGreenEuWarehouse preset when built for graphql`, () => {
    const skuEee123QrGreenEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuEee123QrGreenEuWarehouse()
      .build();
    expect(skuEee123QrGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuEee123QrGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuEee123QrGreenEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEee123QrGreenEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuEee123QrGreenEuWarehousePreset = InventoryEntryDraft.presets
      .skuEee123QrGreenEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEee123QrGreenEuWarehousePreset).toMatchInlineSnapshot();
  });
});
