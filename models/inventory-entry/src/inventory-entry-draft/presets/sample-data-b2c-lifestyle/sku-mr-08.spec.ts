import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMr08 preset`, () => {
  it(`should return a skuMr08 preset when built for rest`, () => {
    const skuMr08Preset = InventoryEntryDraftRest.presets.skuMr08().build();
    expect(skuMr08Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMr08 preset when built for graphql`, () => {
    const skuMr08Preset = InventoryEntryDraftGraphql.presets.skuMr08().build();
    expect(skuMr08Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMr08 preset when built for legacy rest`, () => {
    const skuMr08Preset = InventoryEntryDraft.presets
      .skuMr08()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMr08Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMr08 preset when built for legacy graphql`, () => {
    const skuMr08Preset = InventoryEntryDraft.presets
      .skuMr08()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMr08Preset).toMatchInlineSnapshot();
  });
});
