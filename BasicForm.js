import React,{useState} from 'react'



 


 const BasicForm = () => {

    const[ email,setEmail] = useState("");
    const[ password,setPassword] = useState("");

    const [AllEntry ,setAllEntry] = useState([0]);
  
    const sbmitForm = () => {
        const newEntry = {email:email,password:password };

        setAllEntry([...AllEntry, newEntry]);
        console.log(AllEntry)
    }
    

  return (
<>
<form action="" onSubmit={sbmitForm}>
    <div>

        <label htmlFor="email" >Email</label>
        <input type="text" name="email" id="email" autocamplete='off'  value={email}
         onChange={(e) => setEmail(e.target.value)} />

    </div>

    <div>

<label htmlFor="password" >Password</label>
<input type="password" name="password" id="password" autocamplete='off' value={password}  
onChange={(e) => setPassword(e.target.value)} /> 
</div>

<button type="submit">login</button>


</form>



</>
  )
}
export default BasicForm