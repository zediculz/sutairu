import React from 'react'
import { getBp } from '../../utils/util'
import styled from 'styled-components'
import { aRes } from '../../utils/t'

let bp = getBp()

export const Box = styled("div")`
    transition: 1s ease-in;
    cursor: pointer;
    ${props => aRes(props, props)}

    &:hover {
      opacity: .9;
    }

    @media only screen and ${bp.ip}  {
        ${props => aRes(props, props.$ip)}
    };

    @media only screen and ${bp.mb}  {
        ${props => aRes(props, props.$mb)}
    };

    @media only screen and (max-width: 375px)  {
        ${props => aRes(props, props.$sm)}
    }
`

export default Box
