import CustomerGroupDraft from '../../builder';

const vip = () => CustomerGroupDraft().key('vip').groupName('VIP');

export default vip;
