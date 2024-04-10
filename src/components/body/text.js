import React from 'react'
import { getBp } from '../../utils/util'
import styled from 'styled-components'
import { tR } from '../../utils/t'

let bp = getBp()

export const Text = styled("p")`
    transition: .3s ease-in;
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

export default Text
