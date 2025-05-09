import ProductTypeDraft from '../../builder';

const withNoAttributes = () => ProductTypeDraft().attributes(undefined);

export default withNoAttributes;
