import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuRlc08 preset`, () => {
  it(`should return a skuRlc08 preset when built for rest`, () => {
    const skuRlc08Preset = InventoryEntryDraftRest.presets.skuRlc08().build();
    expect(skuRlc08Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRlc08 preset when built for graphql`, () => {
    const skuRlc08Preset = InventoryEntryDraftGraphql.presets
      .skuRlc08()
      .build();
    expect(skuRlc08Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRlc08 preset when built for legacy rest`, () => {
    const skuRlc08Preset = InventoryEntryDraft.presets
      .skuRlc08()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRlc08Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRlc08 preset when built for legacy graphql`, () => {
    const skuRlc08Preset = InventoryEntryDraft.presets
      .skuRlc08()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRlc08Preset).toMatchInlineSnapshot();
  });
});
