
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuBLPC09 from './sku-BLPC09';

describe('With skuBLPC09 preset', () => {
    it('should return skuBLPC09 preset', () => {
        const skuBLPC09Preset = skuBLPC09().build<TInventoryEntryDraft>();
        expect(skuBLPC09Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuBLPC09 preset when built for GraphQL', () => {
        const skuBLPC09PresetGraphql = skuBLPC09().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuBLPC09PresetGraphql).toMatchInlineSnapshot(``);
    });
});


