import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
`;

function MyLoader({ loading }) {
  return (
    <PuffLoader color="#0bb89b" loading={loading} css={override} size={75} />
  );
}

export default MyLoader;
