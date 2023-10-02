
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuMR08 from './sku-MR08';

describe('With skuMR08 preset', () => {
    it('should return skuMR08 preset', () => {
        const skuMR08Preset = skuMR08().build<TInventoryEntryDraft>();
        expect(skuMR08Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuMR08 preset when built for GraphQL', () => {
        const skuMR08PresetGraphql = skuMR08().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuMR08PresetGraphql).toMatchInlineSnapshot(``);
    });
});


