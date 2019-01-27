import React from 'react';
const Checkbox = (prop)=>{
return (
<div>
<input type="checkbox" onChange={prop.onChangeCall} checked={prop.value}/>
</div>

);
}
export default Checkbox;