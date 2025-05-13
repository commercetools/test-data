import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const kk567Yz20152 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('kk567-yz-2015-2')
    .sku('kk567-yz-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2970000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default kk567Yz20152;
