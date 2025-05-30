import { KeyReferenceDraft, MoneyDraft } from '../../../../commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const p234Qw20152 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('p234-qw-2015-2')
    .sku('p234-qw-2015')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(841500))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default p234Qw20152;
