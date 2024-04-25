import React, { useLayoutEffect, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { COLORS, data, images, SIZES, FONTS, icons, } from '../../constants';
import styles from './styles';
import { connect } from 'react-redux';
import ProductInfo from '../../component/cards/ProductInfo';
import MainView from '../../component/mainView/MainView';
import { GetAllPostApi } from '../../redux/actions/postAction';


const Home = ({ navigation, GetAllPostApi, getAllPost }) => {
  const [loading, setLoading] = useState(false)
  const [modalLoading, setModalLoading] = useState(false)


  useEffect(() => {
    if(!getAllPost?.[0]){
      GetAllPostApi(data => setLoading(data), navigation)
    }
  }, [])


  // console.log('homeData?.new_arrival_dress?.[0] : ', homeData?.new_arrival_dress?.[0]);


  return (
    <MainView modalLoading={modalLoading} loading={loading}>
      <TouchableOpacity activeOpacity={0.7} style={styles.btn} onPress={() => navigation.navigate('AddPost')}>
        <Text style={styles.btnText}>Add Post</Text>
      </TouchableOpacity>
      {getAllPost?.[0] &&
        <FlatList
          data={getAllPost?.[0] ? getAllPost : []}
          numColumns={2}
          contentContainerStyle={{ width: SIZES.width * .92, justifyContent: 'space-evenly', alignSelf: 'center' }}
          renderItem={({ item, index }) => (
            <ProductInfo
              key={index}
              title={item?.title}
              description={item?.body}
              id={item?.id}
              mr={index % 2 === 0 ? SIZES.width * .03 : 0}
            />
          )}

        />
      }


    </MainView>

  );
};

const mapStateToProps = state => ({
  getAllPost: state.post.getAllPost
});

const mapDispatchToProps = {
  GetAllPostApi,

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
