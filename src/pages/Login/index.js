import React from 'react'
import { loginBG } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';


const Login = () => {
  return (
    <div className='container'>
      <div className='row'>
      <div className='col-md-9'>
        <img src={loginBG} className="w-100 my-auto" alt='bg'/>
      </div>
      <div className='col-md-3 my-auto'>
        <p className='display-4'>Login</p>
        <div>
          <Input label_nya='nama lengkap' type='text'/>
          <Input label_nya='username' type='text'/>
          <Input label_nya='password' type='password'/>
          <Gap classBootstrap='mt-3'/>
          <Button teks_nya="daftar" />
          <Gap classBootstrap='mt-4'/>
          <Link judul="belum punya akun"/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login