
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuEARM04 from './sku-EARM04';

describe('With skuEARM04 preset', () => {
    it('should return skuEARM04 preset', () => {
        const skuEARM04Preset = skuEARM04().build<TInventoryEntryDraft>();
        expect(skuEARM04Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuEARM04 preset when built for GraphQL', () => {
        const skuEARM04PresetGraphql = skuEARM04().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuEARM04PresetGraphql).toMatchInlineSnapshot(``);
    });
});


