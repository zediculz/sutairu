
import styled from 'styled-components'
import { aRes, getBp } from '../../utils/resolve'

let bp = getBp()

export const Box = styled("div")`
    ${props => aRes(props, props)}

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

export default Box
