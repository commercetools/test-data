
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuSBG09 from './sku-SBG09';

describe('With skuSBG09 preset', () => {
    it('should return skuSBG09 preset', () => {
        const skuSBG09Preset = skuSBG09().build<TInventoryEntryDraft>();
        expect(skuSBG09Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuSBG09 preset when built for GraphQL', () => {
        const skuSBG09PresetGraphql = skuSBG09().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuSBG09PresetGraphql).toMatchInlineSnapshot(``);
    });
});


