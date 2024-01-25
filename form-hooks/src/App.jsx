import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const [submission, setSubmission] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (values) => {
    console.log(values)
    setSubmission(true)
  }

  return (
    <div className='app'>
      <h1>Registration Form</h1>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        {submission && <p id='reg'>Registration Successful!!</p>}

        <label>First Name:</label>
        <input type="text" name='firstName' {...register('firstName',
          { required: 'First name is required!' })} />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <label>Last Name:</label>
        <input type="text" name='lastName' {...register("lastName",
          { required: 'Last name is required!' })} />
        {errors.lastName && <p>{errors.lastName.message}</p>}


        <label>Email:</label>
        <input type="text" name='email' {...register("email",
          {
            required: 'Email is required!', pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email"
            }
          })} />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Password:</label>
        <input type="password" name='password' {...register("password",
          {
            required: 'Password is required!',
            minLength: { value: 5, message: "Password must be more than 4 characters" },
            maxLength: { value: 20, message: "Password must be less than 20 characters" }
          })} />
        {errors.password && <p>{errors.password.message}</p>}

        {/* Submit Button */}
        <input type="submit" value={"Submit"} className='button' />
      </form>
    </div>
  )
}

export default App