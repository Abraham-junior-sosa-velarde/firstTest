import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CrudContainer from "../containers";
import { initialRequestThunk } from "../containers/redux/thunk";

const IndexPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initialRequestThunk());
  }, []);

  return <CrudContainer />;
};

export default IndexPage;
