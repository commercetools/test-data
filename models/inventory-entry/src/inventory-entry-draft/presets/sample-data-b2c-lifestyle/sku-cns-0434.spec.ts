import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCns0434 preset`, () => {
  it(`should return a skuCns0434 preset when built for rest`, () => {
    const skuCns0434Preset = InventoryEntryDraftRest.presets
      .skuCns0434()
      .build();
    expect(skuCns0434Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCns0434 preset when built for graphql`, () => {
    const skuCns0434Preset = InventoryEntryDraftGraphql.presets
      .skuCns0434()
      .build();
    expect(skuCns0434Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCns0434 preset when built for legacy rest`, () => {
    const skuCns0434Preset = InventoryEntryDraft.presets
      .skuCns0434()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCns0434Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCns0434 preset when built for legacy graphql`, () => {
    const skuCns0434Preset = InventoryEntryDraft.presets
      .skuCns0434()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCns0434Preset).toMatchInlineSnapshot();
  });
});
