
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuRLC08 from './sku-RLC08';

describe('With skuRLC08 preset', () => {
    it('should return skuRLC08 preset', () => {
        const skuRLC08Preset = skuRLC08().build<TInventoryEntryDraft>();
        expect(skuRLC08Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuRLC08 preset when built for GraphQL', () => {
        const skuRLC08PresetGraphql = skuRLC08().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuRLC08PresetGraphql).toMatchInlineSnapshot(``);
    });
});


