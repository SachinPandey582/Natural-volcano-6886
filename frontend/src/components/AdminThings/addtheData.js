import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
} from '@chakra-ui/react'

import { useState } from 'react'
import SignupCard from './AdminForm'



const AddtheData = () => {
    const [done, setdone] = useState(false)
    if(!done){
        return (
            <div>
                <Button onClick={()=>setdone(!done)}>Add the data</Button>
            </div>
        )
    }
    else{
        return (
            <SignupCard/>
        )
    }
    
    
    


        

    
}

export default AddtheData