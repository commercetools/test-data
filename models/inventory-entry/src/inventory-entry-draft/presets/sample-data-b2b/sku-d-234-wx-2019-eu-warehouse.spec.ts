import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuD234Wx2019EuWarehouse preset`, () => {
  it(`should return a skuD234Wx2019EuWarehouse preset when built for rest`, () => {
    const skuD234Wx2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuD234Wx2019EuWarehouse()
      .build();
    expect(skuD234Wx2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2019EuWarehouse preset when built for graphql`, () => {
    const skuD234Wx2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuD234Wx2019EuWarehouse()
      .build();
    expect(skuD234Wx2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2019EuWarehouse preset when built for legacy rest`, () => {
    const skuD234Wx2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuD234Wx2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuD234Wx2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuD234Wx2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuD234Wx2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuD234Wx2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
