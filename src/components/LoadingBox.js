import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
const override = css`
    margin: 0 auto;
`;
export const LoadingBox = ({ loading }) => {
    return (
        <ClipLoader color="#2AC1BC" css={override} loading={loading} size={35} />
    )
}
