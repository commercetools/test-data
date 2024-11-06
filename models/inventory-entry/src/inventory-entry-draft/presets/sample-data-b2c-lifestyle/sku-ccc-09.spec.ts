import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCcc09 preset`, () => {
  it(`should return a skuCcc09 preset when built for rest`, () => {
    const skuCcc09Preset = InventoryEntryDraftRest.presets.skuCcc09().build();
    expect(skuCcc09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc09 preset when built for graphql`, () => {
    const skuCcc09Preset = InventoryEntryDraftGraphql.presets
      .skuCcc09()
      .build();
    expect(skuCcc09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc09 preset when built for legacy rest`, () => {
    const skuCcc09Preset = InventoryEntryDraft.presets
      .skuCcc09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCcc09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc09 preset when built for legacy graphql`, () => {
    const skuCcc09Preset = InventoryEntryDraft.presets
      .skuCcc09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCcc09Preset).toMatchInlineSnapshot();
  });
});
