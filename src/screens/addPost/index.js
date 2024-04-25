import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import MainView from '../../component/mainView/MainView';
import Button1 from '../../component/button/Button1';
import InputWithIcon from '../../component/input/InputWithIcon';
import { Formik } from 'formik';
import * as yup from 'yup';
import { CreatePostApi } from '../../redux/actions/postAction';


const AddPost = ({ navigation, CreatePostApi }) => {
  const [loading, setLoading] = useState(false)

  const validationSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    body: yup
      .string()
      .required('Description is required'),
  })

  return (
    <MainView scroll={true}>
      <View style={styles.innnerContainer}>
       
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            title: null,
            body: null,
          }}
          onSubmit={(values) => { 
            // console.log("value : ", values)
            CreatePostApi(values, navigation, (data) => setLoading(data))
           }}
        >
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
            <>
              <InputWithIcon
                placeholder="Enter post title"
                onChangeText={handleChange('title')}
                value={values.title}
                onBlur={handleBlur("title")}
                error={touched.title && errors.title}
                
              />
              <InputWithIcon
                placeholder="Enter post description"
                onChangeText={handleChange('body')}
                value={values.body}
                onBlur={handleBlur("body")}
                error={touched.body && errors.body}
                numberOfLines={10}
                multiline={true}
              />

              <Button1 loading={loading} buttonStyle={styles.btn} onPress={handleSubmit} >Submit</Button1>

            </>
          )}
        </Formik>

      </View>
    </MainView>
  );
};
const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  CreatePostApi
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
