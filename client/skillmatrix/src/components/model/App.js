
import React from 'react'
import PopupAdd from './PopupAdd';
import PopupDelete from './PopupDelete';

function App()
{
  
return (
<div>
  <PopupAdd element = "sifana" header="Add skill" btnName="Add"/>
  <PopupAdd element = "Jomet" header="Update skill" btnName="Update"/>

  <PopupDelete element = "abhay" name="skill"/>
  <PopupDelete element = "Kavitha" name="certificate"/>

  </div>
);
}
export default App;
