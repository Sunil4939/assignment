import React from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import { connect } from 'react-redux';
import Login from '../screens/login';
import home from '../screens/home';
import addPost from '../screens/addPost';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icons from '../component/Icons';
import { COLORS, SIZES } from '../constants';
import { LogoutApi } from '../redux/actions/authActions';


const Stack = createStackNavigator();

const Root = ({ token, LogoutApi }) => {

    // token = "null"

    return (
        <>

            <Stack.Navigator
                screenOptions={() => ({
                    // headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                })}
            >
                {token === null ?
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                    />
                    :
                    <>
                        <Stack.Screen
                            name="Home"
                            component={home}
                            options={{
                                headerTitleAlign: 'center',
                                headerRight: () => (
                                    <TouchableOpacity onPress={LogoutApi} style={styles.btn}>
                                        <Icons name={'logout'} size={SIZES.width * .065} color={COLORS.black} />
                                    </TouchableOpacity>
                                )
                            }}
                        />
                        <Stack.Screen
                            name="AddPost"
                            component={addPost}
                        // options={{ headerShown: false }}
                        />
                    </>
                }

            </Stack.Navigator>


        </>
    );
};

const mapStateToProps = state => ({
    token: state.auth.token,
});

const mapDispatchToProps = {
    LogoutApi
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);


const styles = StyleSheet.create({
    btn: {
        width: SIZES.width * .1,
        height: SIZES.width * .1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.width * .02,
    },

})