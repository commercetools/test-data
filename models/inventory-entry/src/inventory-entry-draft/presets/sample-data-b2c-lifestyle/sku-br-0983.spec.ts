import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBr0983 preset`, () => {
  it(`should return a skuBr0983 preset when built for rest`, () => {
    const skuBr0983Preset = InventoryEntryDraftRest.presets.skuBr0983().build();
    expect(skuBr0983Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBr0983 preset when built for graphql`, () => {
    const skuBr0983Preset = InventoryEntryDraftGraphql.presets
      .skuBr0983()
      .build();
    expect(skuBr0983Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBr0983 preset when built for legacy rest`, () => {
    const skuBr0983Preset = InventoryEntryDraft.presets
      .skuBr0983()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBr0983Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBr0983 preset when built for legacy graphql`, () => {
    const skuBr0983Preset = InventoryEntryDraft.presets
      .skuBr0983()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBr0983Preset).toMatchInlineSnapshot();
  });
});
