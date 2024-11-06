import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGpc01 preset`, () => {
  it(`should return a skuGpc01 preset when built for rest`, () => {
    const skuGpc01Preset = InventoryEntryDraftRest.presets.skuGpc01().build();
    expect(skuGpc01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGpc01 preset when built for graphql`, () => {
    const skuGpc01Preset = InventoryEntryDraftGraphql.presets
      .skuGpc01()
      .build();
    expect(skuGpc01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGpc01 preset when built for legacy rest`, () => {
    const skuGpc01Preset = InventoryEntryDraft.presets
      .skuGpc01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGpc01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGpc01 preset when built for legacy graphql`, () => {
    const skuGpc01Preset = InventoryEntryDraft.presets
      .skuGpc01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGpc01Preset).toMatchInlineSnapshot();
  });
});
