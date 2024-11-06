import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMpc07 preset`, () => {
  it(`should return a skuMpc07 preset when built for rest`, () => {
    const skuMpc07Preset = InventoryEntryDraftRest.presets.skuMpc07().build();
    expect(skuMpc07Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMpc07 preset when built for graphql`, () => {
    const skuMpc07Preset = InventoryEntryDraftGraphql.presets
      .skuMpc07()
      .build();
    expect(skuMpc07Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMpc07 preset when built for legacy rest`, () => {
    const skuMpc07Preset = InventoryEntryDraft.presets
      .skuMpc07()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMpc07Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMpc07 preset when built for legacy graphql`, () => {
    const skuMpc07Preset = InventoryEntryDraft.presets
      .skuMpc07()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMpc07Preset).toMatchInlineSnapshot();
  });
});
