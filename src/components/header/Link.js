

import styled from 'styled-components'
import { aRes, getBp } from '../../utils/resolve'

let bp = getBp()

export const NavItem = styled("nav")`
    transition: 1s ease-in;
    cursor: pointer;
    padding: 8px;
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

export default NavItem
