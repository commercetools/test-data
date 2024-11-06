import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuSpc06 preset`, () => {
  it(`should return a skuSpc06 preset when built for rest`, () => {
    const skuSpc06Preset = InventoryEntryDraftRest.presets.skuSpc06().build();
    expect(skuSpc06Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSpc06 preset when built for graphql`, () => {
    const skuSpc06Preset = InventoryEntryDraftGraphql.presets
      .skuSpc06()
      .build();
    expect(skuSpc06Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSpc06 preset when built for legacy rest`, () => {
    const skuSpc06Preset = InventoryEntryDraft.presets
      .skuSpc06()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSpc06Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuSpc06 preset when built for legacy graphql`, () => {
    const skuSpc06Preset = InventoryEntryDraft.presets
      .skuSpc06()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSpc06Preset).toMatchInlineSnapshot();
  });
});
