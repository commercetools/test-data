import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCch093 preset`, () => {
  it(`should return a skuCch093 preset when built for rest`, () => {
    const skuCch093Preset = InventoryEntryDraftRest.presets.skuCch093().build();
    expect(skuCch093Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCch093 preset when built for graphql`, () => {
    const skuCch093Preset = InventoryEntryDraftGraphql.presets
      .skuCch093()
      .build();
    expect(skuCch093Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCch093 preset when built for legacy rest`, () => {
    const skuCch093Preset = InventoryEntryDraft.presets
      .skuCch093()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCch093Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCch093 preset when built for legacy graphql`, () => {
    const skuCch093Preset = InventoryEntryDraft.presets
      .skuCch093()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCch093Preset).toMatchInlineSnapshot();
  });
});
