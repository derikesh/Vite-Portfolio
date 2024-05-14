import { Box } from "@chakra-ui/react"

interface languageProps {
    langauge:string,
}

const Languages = ( {langauge }:languageProps )=>{

    return(
        <>
        
        <Box className="single_language">
            {langauge}
        </Box>  
            
        </>
    )

}


export default Languages;



