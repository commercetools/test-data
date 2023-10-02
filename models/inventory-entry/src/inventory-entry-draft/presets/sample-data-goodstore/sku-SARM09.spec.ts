
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuSARM09 from './sku-SARM09';

describe('With skuSARM09 preset', () => {
    it('should return skuSARM09 preset', () => {
        const skuSARM09Preset = skuSARM09().build<TInventoryEntryDraft>();
        expect(skuSARM09Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuSARM09 preset when built for GraphQL', () => {
        const skuSARM09PresetGraphql = skuSARM09().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuSARM09PresetGraphql).toMatchInlineSnapshot(``);
    });
});


