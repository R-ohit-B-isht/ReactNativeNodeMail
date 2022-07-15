import React from 'react';
import { Text, View } from 'react-native';

import TextInput from './components/TextInput';
import MessageInput from './components/Message';
import Button from './components/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';

import mail from './mail'
const Login=({ navigation }) => {



const  onSubmit= (values) => {

 navigation.navigate('Profile', { name: values.name ,number:values.number,email:values.address,message:values.message});
mail({ name: values.name ,number:values.number,email:values.address,message:values.message});
  };



  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const LoginSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short').required('Required'),

    number: Yup.string()
      .required('required')
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, 'Too Short!')
      .max(10, 'Too Long!'),

    address: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    message: Yup.string()
      .required('required')
  });


  return (
<Formik
      initialValues={{name: '',
        number: '',
        address: '',
        message:'',
      }}
       validationSchema={LoginSchema}

      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values);
        resetForm();
      }}

    >
     {({  handleChange, handleSubmit, handleBlur, values, errors, touched  }) => (
      
    <View

      style={{
        flex: 1,
        backgroundColor: '#fff',
       
        alignItems: 'center',
        justifyContent: 'center',
      }}>

      <Text style={{ 

color: '#223e4b', 
marginBottom: 16 ,
fontWeight: 'bold',
fontFamily: undefined,
fontSize:50,
paddingBottom:50

}}>
        Form
      </Text>
      
      <View
        style={{
          paddingHorizontal: 32,
          marginBottom: 16,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={{ height: 30 }}
          icon="man"
          placeholder="Name"
          autoCapitalize="none"
          keyboardType="default"
          selectedValue={values.name}

          error={errors.name}
          touched={touched.name}
       
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"

          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 32,
          marginBottom: 16,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={{ height: 30 }}
          icon="mobile"
          placeholder="Phone number"
          autoCompleteType="tel"
          autoCapitalize="none"
          keyboardType="numeric"
          selectedValue={values.number}

          
          error={errors.number}
          touched={touched.number}
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"

          onChangeText={handleChange('number')}
          onBlur={handleBlur('number')}
          value={values.number}
        />
      </View>

      <View
        style={{
          paddingHorizontal: 32,
          marginBottom: 16,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={{ height: 30 }}
          icon="address"
          placeholder="email-address"
          autoCompleteType="street-address"
          autoCapitalize="none"
          keyboardAppearance="dark"
          selectedValue={values.address}
          
          error={errors.address}
          touched={touched.address}
          returnKeyType="next"
          returnKeyLabel="next"

          onChangeText={handleChange('address')}
          onBlur={handleBlur('address')}
          value={values.address}
        />
      </View>
       <View
        style={{
          paddingHorizontal: 32,
          marginBottom: 16,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MessageInput
          style={{ height: "100%",alignItems: 'top',
        justifyContent: 'top',}}
          icon="message"
          placeholder="Your message"
          autoCapitalize="none"
          keyboardAppearance="dark"
          selectedValue={values.message}
          
          error={errors.message}
          touched={touched.message}
          multiline={true}


          onChangeText={handleChange('message')}
          onBlur={handleBlur('message')}
          value={values.message}
        />
      </View>
      
 <View
        style={{
          paddingHorizontal: 32,
          marginBottom: 16,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
      <Button label="Submit" onPress={handleSubmit} />
        </View>
</View>

      )}
</Formik>
  );
}
export default Login;
