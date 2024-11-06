import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuRb093 preset`, () => {
  it(`should return a skuRb093 preset when built for rest`, () => {
    const skuRb093Preset = InventoryEntryDraftRest.presets.skuRb093().build();
    expect(skuRb093Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRb093 preset when built for graphql`, () => {
    const skuRb093Preset = InventoryEntryDraftGraphql.presets
      .skuRb093()
      .build();
    expect(skuRb093Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRb093 preset when built for legacy rest`, () => {
    const skuRb093Preset = InventoryEntryDraft.presets
      .skuRb093()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRb093Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRb093 preset when built for legacy graphql`, () => {
    const skuRb093Preset = InventoryEntryDraft.presets
      .skuRb093()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRb093Preset).toMatchInlineSnapshot();
  });
});
