"use client"

import "./styles.css"
import { useState } from "react"
import { Formik , Form , Field , ErrorMessage } from 'formik'
import Image from "next/image"
import * as Yup from 'yup'
import arrow from '../../../public/calculator/icon-arrow.svg'
import moment from "moment/moment"

const validationSchema = Yup.object({
  day : Yup.number().min(1 , 'Invalid Date').max(31 , 'Invalid Date').required('Date Required'),
  month : Yup.number().min(1 , 'Invalid Month').max(12 , 'Invalid Month').required('Month Required'),
  year : Yup.number().min(1 , 'Invalid Year').required('Year Required'),
})

const initialValue = {
  day: 0,
  month: 0,
  year: 0,
}

const AgeCalculator = () => {

  const [data , setData] = useState({})

  const handleSubmit = (val) => {
    console.log(val)

    const str = `${val.year}-${val.month}-${val.day}`

    const diffYears = moment().diff(moment(str), 'years');
const diffMonths = moment().diff(moment(str), 'months') % 12;
const diffDays = moment().diff(moment(str), 'days') % 30;


    console.log(diffYears , diffMonths ,diffDays)

    setData({
      year: diffYears,
      month: diffMonths,
      day: diffDays
    })
  }

  return (
    <div className='flex justify-center items-center min-h-screen h-screen container'>
        <div className=' h-auto lg:min-h-2/3 lg:w-1/2 card rounded-[2rem]  rounded-br-[6rem] p-8'>
           <div>
              {/* --form for input fields---- */}
              <Formik
              initialValues={initialValue}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              >
                {
                  ({errors})=>(
                    <Form>
                      {/* --input div--- */}
                      <div className="flex items-center gap-[2rem]">
                        <div className='age-form-input'>
                          <label className={`label ${errors?.day ? 'label-error' : 'label-valid'}`}>DAY</label>
                          <Field type='number' name='day' placeholder='Day' className={`age-input ${errors?.day ? 'age-input-error' : 'age-input-valid'}`} />
                          <ErrorMessage component='div' name='day' className="error-text" />
                        </div>
                        <div className='age-form-input'>
                          <label className={`label ${errors?.month ? 'label-error' : 'label-valid'}`}>MONTH</label>
                          <Field type='number' name='month' placeholder='Month' className={`age-input ${errors?.month ? 'age-input-error' : 'age-input-valid'}`}  />
                          <ErrorMessage component='div' name='month' className="error-text" />
                        </div>
                        <div className='age-form-input'>
                          <label className={`label ${errors?.year ? 'label-error' : 'label-valid'}`}>YEAR</label>
                          <Field type='number' name='year' placeholder='Year' className={`age-input ${errors?.year ? 'age-input-error' : 'age-input-valid'}`} />
                          <ErrorMessage component='div' name='year' className="error-text" />
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <hr className="flex-1"/>
                        <button type='submit' title='submit' className="age-btn">
                          <Image src={arrow} alt='Arrow' />
                        </button>
                      </div>
                    </Form>
                  )
                }
              </Formik>
           </div>
           <div className="text-[5rem] font-black italic leading-tight">
            <div>
              <span className="hero-text">{data?.year || '--'}</span> years
            </div>
            <div>
              <span className="hero-text">{data?.month || '--'}</span> months
            </div>
            <div>
              <span className="hero-text">{data?.day || '--'}</span> days
            </div>
           </div>
        </div>
    </div>
  )
}

export default AgeCalculator