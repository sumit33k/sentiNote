import React, {Component} from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form'
const { DOM: { input, select, textarea } } = React

const renderField = ({ input, label, type, meta: {touched, error} }) => {

  return (
  <div className="content">
  {
    label==='name'&&(
      <div className="">
        <div><label>{label}</label></div>
          <input {...input} placeholder={label} type='textarea' className="form-control field" />
          {touched && error && <span>{error}</span>}
      </div>
    )
  }
 {
    label==='description'&&(
      <div className="">
        <div><label>{label}</label></div>
          <textarea {...input} placeholder={label} type='textarea' className="form-control field" />
          {touched && error && <span>{error}</span>}
      </div>
    )
  }
   {
    label==='photoURL'&&(
      <div className="">
        <div><label>{label}</label></div>
          <input {...input} placeholder={label} type='textarea' className="form-control field" />
          {touched && error && <span>{error}</span>}
      </div>
    )
  }
  </div>
)}

class ProfileForm extends Component {
  render() {
    const { handleSubmit, name, photoURL, description} = this.props;
    console.log("I got name on props: ", this.props)
    return (
      <div className='userInfo'>
        <h2 className="title">Edit Your Profile!</h2>
        <form onSubmit={handleSubmit} >
          <div>
            <Field
              name="name"
              value={name}
              component={renderField}
              label="name"
              placeholder={name}
              type="text"/>
          </div>
          <div>
            <Field
              name="photoURL"
              value={photoURL}
              component={renderField}
              label="photoURL"
              type="url" />
          </div>
          <div>
            <Field
              className='description'
              name="description"
              value={description}
              component={renderField}
              label="description"
              type="textarea"/>
          </div>

          <button className='btn-success' type="submit">Submit</button>
          <Link to="/user"><button className='btn-warning'>Cancel</button></Link>
        </form>
      </div>


    );
  }
}

// Decorate the form component
ProfileForm = reduxForm({
  form: 'profile' // a unique name for this form
})(ProfileForm);

export default ProfileForm;

