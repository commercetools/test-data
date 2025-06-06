import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const ii789Uv20151 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('ii789-uv-2015-1')
    .sku('ii789-uv-2015')
    .value(MoneyDraft.random().currencyCode('GBP').centAmount(2750000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default ii789Uv20151;
