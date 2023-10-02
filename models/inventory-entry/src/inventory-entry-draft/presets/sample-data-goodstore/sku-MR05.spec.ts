
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuMR05 from './sku-MR05';

describe('With skuMR05 preset', () => {
    it('should return skuMR05 preset', () => {
        const skuMR05Preset = skuMR05().build<TInventoryEntryDraft>();
        expect(skuMR05Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuMR05 preset when built for GraphQL', () => {
        const skuMR05PresetGraphql = skuMR05().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuMR05PresetGraphql).toMatchInlineSnapshot(``);
    });
});


