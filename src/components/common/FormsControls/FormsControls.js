import React from 'react';
import s from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
      <textarea {...input} {...props}></textarea>
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  )
}
export const Input = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
      <input {...input} {...props}></input>
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  )
}
