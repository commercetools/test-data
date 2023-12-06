import State from '../../builder';

//`LineItemState` requires a role of `Return`
const withTypeLineItemState = () =>
  State().type('LineItemState').roles(['Return']);

export default withTypeLineItemState;
