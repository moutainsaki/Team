import { useState } from "react";
import style from "../styles/situation.module.css"

export default function add() {
  const [staffName,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [department,setDepartment] = useState('');

  const singup = (event) => {
    event.preventDefault();
    console.log('name:',staffName);
    console.log('email:',email);
    console.log('pass:',password);
    console.log('depa:',department);
  };
  
  return (
    <>
      <p className={style.title}>追加</p>
      <p className={style.text}>新社員の情報を教えてください。</p>

      <div className={style.inputform}>

      <form onSubmit={singup}>
      <div>
        <label htmlFor="staffName">社員の名前：</label>
        <input className={style.inputText} type="text" name="staffName" id="staffName" required 
        onChange={(event) => setName(event.target.value)}/>
      </div>

      <div>
        <label htmlFor="password">メール：</label>
        <input className={style.inputText} type="email" name="email" id="email" required
         onChange={(event) => setEmail(event.target.value)}/>
      </div>

      <div>
        <label htmlFor="password">パスワード：</label>
        <input className={style.inputText} type="password" name="password" id="password" required
         onChange={(event) => setPassword(event.target.value)}/>
      </div>
      
      <div>
        <label htmlFor="department">部門：</label>
        <input className={style.inputText} type="text" name="department" id="department" required 
         onChange={(event) => setDepartment(event.target.value)}/>
      </div>
      
      <div><button type="submit" className={style.LoginSub}>新社員登録</button></div>

      <div className={style.Cen}>
        <a href="./menu.html"><img src="Cen2.png" width={100} /></a>
      </div>
      </form>

      <div className={style.footerPart}>
        <h3 className="footerWord">システムの状況:X</h3>
      </div>

    </div>
    </>
  );
}