import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCtss0983 preset`, () => {
  it(`should return a skuCtss0983 preset when built for rest`, () => {
    const skuCtss0983Preset = InventoryEntryDraftRest.presets
      .skuCtss0983()
      .build();
    expect(skuCtss0983Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCtss0983 preset when built for graphql`, () => {
    const skuCtss0983Preset = InventoryEntryDraftGraphql.presets
      .skuCtss0983()
      .build();
    expect(skuCtss0983Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCtss0983 preset when built for legacy rest`, () => {
    const skuCtss0983Preset = InventoryEntryDraft.presets
      .skuCtss0983()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCtss0983Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCtss0983 preset when built for legacy graphql`, () => {
    const skuCtss0983Preset = InventoryEntryDraft.presets
      .skuCtss0983()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCtss0983Preset).toMatchInlineSnapshot();
  });
});
