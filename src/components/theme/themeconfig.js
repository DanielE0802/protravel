import {createMuiTheme} from '@material-ui/core/styles'
// import purple from '@material-ui/core/colors/purple'
import { blue } from '@material-ui/core/colors'

const theme = createMuiTheme (
    {
        palette:{
            primary:{
                main: blue[900]
            }
        }

    }
)

export default theme