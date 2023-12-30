import { extendBaseTheme } from '@chakra-ui/react';
import { buttonTheme } from './buttonTheme';
import { fontVarient } from './fontVarient';
import { customeColor } from './customeColor';

export const customeTheme = extendBaseTheme( {

    fonts : {
        body : 'JetBrains Mono', 
        h5 : 'Knewave',
    },

    components: {
        Button : buttonTheme,    
        fontsSize : fontVarient ,
        background: customeColor
       
    }

} )