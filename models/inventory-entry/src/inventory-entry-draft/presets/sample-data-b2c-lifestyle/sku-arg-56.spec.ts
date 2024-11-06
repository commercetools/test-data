import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuArg56 preset`, () => {
  it(`should return a skuArg56 preset when built for rest`, () => {
    const skuArg56Preset = InventoryEntryDraftRest.presets.skuArg56().build();
    expect(skuArg56Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuArg56 preset when built for graphql`, () => {
    const skuArg56Preset = InventoryEntryDraftGraphql.presets
      .skuArg56()
      .build();
    expect(skuArg56Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuArg56 preset when built for legacy rest`, () => {
    const skuArg56Preset = InventoryEntryDraft.presets
      .skuArg56()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuArg56Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuArg56 preset when built for legacy graphql`, () => {
    const skuArg56Preset = InventoryEntryDraft.presets
      .skuArg56()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuArg56Preset).toMatchInlineSnapshot();
  });
});
