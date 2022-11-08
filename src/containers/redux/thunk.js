import { hideLoader, showLoader } from "../../redux/globalRedux";
import request, {
  getRequestWhitoutToken,
  postWithoutToken,
} from "../../utils/request";
import { initialRequestCrud } from "./redux";

export const initialRequestThunk = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoader());
      let url = process.env.REACT_APP_URL_API;
      let options = getRequestWhitoutToken();
      let requestAnimalsLocation = await request(url, options);
      dispatch(initialRequestCrud(requestAnimalsLocation));
    } catch (error) {
    } finally {
      dispatch(hideLoader());
    }
  };
};
export const createNewData = (data) => {
  return async (dispatch, getState) => {
    try {
      dispatch(showLoader());
      let url = process.env.REACT_APP_URL_API;
      let options = postWithoutToken(data);
      let addNewAnimal = await request(url, options);
      dispatch(initialRequestThunk());
    } catch (error) {
    } finally {
      dispatch(hideLoader());
    }
  };
};
