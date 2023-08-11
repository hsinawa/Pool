import React, { useState } from 'react'
import textData from "../Static/Text.json";
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


const ContactUs = () => {

    const [number,setnumber] = useState('')
    const [name,setname] = useState('')
    const [message,setmessage] = useState('')

    const SubmitContact = (e) =>{
        const data = {
            number:number,
            name:name,
            message:message
        }

        console.log('data is', data)
    }


    return(
        <div>
           
            <section  style={{
        marginTop: "7%",
        width: "85%",
        textAlign:'justify',
        marginLeft: "auto",
        marginRight: "auto",
      }} >
           <h3 style={{color: "#002D62"}} > {textData.contactPage.name} </h3>
           <h5
        style={{color: "#89CFF0" }}>
        {textData.contactPage.description}
      </h5>

<p className='companybox' >
    <form onSubmit={SubmitContact} >
<br/>

    <Box   >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
          <TextField id="outlined-basic" label="Enter Name" variant="outlined" autoComplete='off' type='text' required value={name} style={{width:'85%', marginLeft:'7%', marginRight:'auto'}}
          onChange={ (e)=>{setname(e.target.value)} }
          />
          </Grid>
          <Grid item xs={12} md={6}>
          <TextField id="outlined-basic" label="Enter Contact Details" variant="outlined" autoComplete='off' type='text' required value={number} style={{width:'85%', marginLeft:'7%', marginRight:'auto'}} onChange={ (e)=>{setnumber(e.target.value)} } />
          </Grid>
          <Grid item xs={12} md={12}>
          <TextField id="outlined-basic" label="Enter Message" variant="outlined" autoComplete='off' type='text' required value={message} style={{width:'91%' ,marginLeft:'3%', marginRight:'auto'}}  multiline onChange={ (e)=>{setmessage(e.target.value)} }
          rows={4} />
          </Grid>
        </Grid>
      </Box>

      <Button
                variant="contained"
                value='submit'
                type='submit'
                sx={{
                  marginTop: "1%",
                  borderRadius: "12px",
                  marginLeft:'auto',
                  marginRight:'auto',
                  backgroundColor: "#002D62",
                }}
              >
                Send
              </Button>
              <br/>
    </form>
    <br/>
</p>


       </section>
        </div>
    )
}

export default ContactUs