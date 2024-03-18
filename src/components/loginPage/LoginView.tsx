'use client';
import {useRouter} from "next/navigation";
import {XIcon} from "@/components/common/Icons";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

export default function LoginView() {
  const router = useRouter()
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      email: value,
    }));
    console.log(formData)

  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      password: value,
    }));
    console.log(formData)

  };

  const handleSubmit = async ()=>{
    try{
      if (formData.email && formData.password ){
        const response = await axios.post('/user/login', formData);
        setIsSuccess(true)
        alert('로그인 성공!')
        console.log('성공',formData)
      }else {
        setIsSuccess(false)
        alert('다시 입력해주세요!')
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    if (isSuccess){
      router.push('/');
    }
  }, [isSuccess]);

  return (
    <div className={'px-[24px]'}>
      <div className={'pt-6 , pb-8'}>
        <button onClick={() => router.push('/')}>
          <XIcon />
        </button>
      </div>
      <div className={'mt-32 flex justify-center'}>
        <Image src={'/images/Logo.svg'} alt={'로그인 로고'} width={116} height={116}/>
      </div>
      <div className={'mt-16 mb-8'}>
        <input className='w-[100%] h-16 rounded-[12px] border-[1px] border-lightGray'
               type='text'
               id={'email'}
               placeholder={'  이메일을 입력해주세요.'}
               onChange={handleEmailChange}
        />
      </div>
      <div className={'mt-8 mb-8'}>
        <input className='w-[100%] h-16 rounded-[12px] border-[1px] border-lightGray'
               type='password'
               id={'password'}
               placeholder={'  비밀번호를 입력해주세요.'}
               onChange={handlePasswordChange}
        />
      </div>
      <div className={'mb-8'}>
        <button type={'submit'}
                onClick={handleSubmit}
                className={'w-[100%] text-white bg-mint rounded-[12px] h-16 hover:bg-lightGray'}>
          로그인
        </button>
      </div>
    </div>

  );
}
