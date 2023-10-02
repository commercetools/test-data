
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuCDG09 from './sku-CDG09';

describe('With skuCDG09 preset', () => {
    it('should return skuCDG09 preset', () => {
        const skuCDG09Preset = skuCDG09().build<TInventoryEntryDraft>();
        expect(skuCDG09Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuCDG09 preset when built for GraphQL', () => {
        const skuCDG09PresetGraphql = skuCDG09().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuCDG09PresetGraphql).toMatchInlineSnapshot(``);
    });
});


