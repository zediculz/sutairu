import React from 'react'

import styled from 'styled-components'
import { aRes, getBp } from '../../utils/resolve'

let bp = getBp()

export const Block = styled("section")`
    ${props => aRes(props, props)}

    &:hover {
      opacity: .9;
    }

    @media only screen and ${bp?.ip}  {
        ${props => aRes(props, props.$ip)}
    };

    @media only screen and ${bp?.mb}  {
        ${props => aRes(props, props.$mb)}
    };

    @media only screen and ${bp?.sm}  {
        ${props => aRes(props, props.$sm)}
    }
`

export default Block
