
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuSCG09 from './sku-SCG09';

describe('With skuSCG09 preset', () => {
    it('should return skuSCG09 preset', () => {
        const skuSCG09Preset = skuSCG09().build<TInventoryEntryDraft>();
        expect(skuSCG09Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuSCG09 preset when built for GraphQL', () => {
        const skuSCG09PresetGraphql = skuSCG09().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuSCG09PresetGraphql).toMatchInlineSnapshot(``);
    });
});


