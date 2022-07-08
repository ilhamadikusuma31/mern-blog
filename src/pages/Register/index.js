import React from 'react';
import { registerBG } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';


const Register = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
      <div className='col-md-8'>
        <img src={registerBG} className="h-100 w-100 img-fluid" alt='bg'/>
      </div>
      <div className='col-md-4 my-auto'>
        <p className='display-4'>Register</p>
        <div>
          <Input label_nya='nama lengkap' type='text'/>
          <Input label_nya='username' type='text'/>
          <Input label_nya='password' type='password'/>
          <Gap classBootstrap='mt-3'/>
          <Button teks_nya="daftar" />
          <Gap classBootstrap='mt-4'/>
          <Link judul="kembali ke login"/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Register