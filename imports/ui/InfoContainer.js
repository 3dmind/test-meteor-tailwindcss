import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';
import { Info} from './Info';

export const InfoContainer = withTracker(() => {
  return {
    links: Links.find().fetch(),
  };
})(Info);
