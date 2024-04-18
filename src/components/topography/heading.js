import React from 'react'

import styled from 'styled-components'
import { tR, getBp } from '../../utils/resolve'

let bp = getBp()

export const H = styled("h1")`
    ${props => tR(props, props)}

    @media only screen and ${bp.ip}  {
        ${props => tR(props, props.$ip)}
    };

    @media only screen and ${bp.mb}  {
        ${props => tR(props, props.$mb)}
    };

    @media only screen and (max-width: 375px)  {
        ${props => tR(props, props.$sm)}
    }
`

export default H
