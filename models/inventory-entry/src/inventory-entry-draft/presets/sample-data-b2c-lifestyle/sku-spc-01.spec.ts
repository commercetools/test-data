import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuSpc01 preset`, () => {
  it(`should return a skuSpc01 preset when built for rest`, () => {
    const skuSpc01Preset = InventoryEntryDraftRest.presets.skuSpc01().build();
    expect(skuSpc01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSpc01 preset when built for graphql`, () => {
    const skuSpc01Preset = InventoryEntryDraftGraphql.presets
      .skuSpc01()
      .build();
    expect(skuSpc01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSpc01 preset when built for legacy rest`, () => {
    const skuSpc01Preset = InventoryEntryDraft.presets
      .skuSpc01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSpc01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSpc01 preset when built for legacy graphql`, () => {
    const skuSpc01Preset = InventoryEntryDraft.presets
      .skuSpc01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSpc01Preset).toMatchInlineSnapshot();
  });
});
