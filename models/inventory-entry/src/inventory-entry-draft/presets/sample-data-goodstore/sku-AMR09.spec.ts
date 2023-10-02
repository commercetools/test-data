
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuAMR09 from './sku-AMR09';

describe('With skuAMR09 preset', () => {
    it('should return skuAMR09 preset', () => {
        const skuAMR09Preset = skuAMR09().build<TInventoryEntryDraft>();
        expect(skuAMR09Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuAMR09 preset when built for GraphQL', () => {
        const skuAMR09PresetGraphql = skuAMR09().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuAMR09PresetGraphql).toMatchInlineSnapshot(``);
    });
});


