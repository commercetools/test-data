import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBcoas08 preset`, () => {
  it(`should return a skuBcoas08 preset when built for rest`, () => {
    const skuBcoas08Preset = InventoryEntryDraftRest.presets
      .skuBcoas08()
      .build();
    expect(skuBcoas08Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBcoas08 preset when built for graphql`, () => {
    const skuBcoas08Preset = InventoryEntryDraftGraphql.presets
      .skuBcoas08()
      .build();
    expect(skuBcoas08Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBcoas08 preset when built for legacy rest`, () => {
    const skuBcoas08Preset = InventoryEntryDraft.presets
      .skuBcoas08()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBcoas08Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBcoas08 preset when built for legacy graphql`, () => {
    const skuBcoas08Preset = InventoryEntryDraft.presets
      .skuBcoas08()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBcoas08Preset).toMatchInlineSnapshot();
  });
});
