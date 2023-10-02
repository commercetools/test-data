
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuGARM093 from './sku-GARM093';

describe('With skuGARM093 preset', () => {
    it('should return skuGARM093 preset', () => {
        const skuGARM093Preset = skuGARM093().build<TInventoryEntryDraft>();
        expect(skuGARM093Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuGARM093 preset when built for GraphQL', () => {
        const skuGARM093PresetGraphql = skuGARM093().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuGARM093PresetGraphql).toMatchInlineSnapshot(``);
    });
});


