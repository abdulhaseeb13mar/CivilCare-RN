import React from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import WrapperScreen from '../../components/WrapperScreen/WrapperScreen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {metrics, scaleFont, colors} from '../../shared/Theme';
import StarRating from '../../components/starRating/starRating';
import NavigationRef from '../../shared/RefNavigation';

export const Worker = (props) => {
  const builder = props.builderInfo;

  const goBack = () => NavigationRef.GoBack();

  const GotoContactDetails = () => NavigationRef.Navigate('ContactDetails');

  return (
    <WrapperScreen style={{backgroundColor: colors.blueGray}}>
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={goBack}>
            <AntDesign
              name="arrowleft"
              color={colors.darkGray}
              size={metrics.width * 0.08}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.suggBuilderWrapper}>
          <Text style={styles.suggBuilderHeader}>Professional Builder</Text>
        </View>
        <View style={styles.BuilderTileWrapper}>
          <ImageBackground
            source={builder.buiderImage}
            style={styles.builderTileImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.BuilderDesCentreWrapper}>
          <View style={styles.BuilderDesWrapper}>
            <Text style={styles.builderName}>{builder.buildersName}</Text>
            <Text style={styles.builderDes}>{builder.dis}</Text>
            <View style={styles.RatingWrapper}>
              <StarRating
                rating={parseFloat(builder.rating)}
                size={metrics.width * 0.22}
              />
              <Text style={styles.RatingText}>{builder.rating}</Text>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <TouchableOpacity onPress={GotoContactDetails} style={styles.Fab}>
        <AntDesign name="plus" size={metrics.width * 0.08} color="white" />
      </TouchableOpacity>
    </WrapperScreen>
  );
};

const mapStateToProps = (state) => {
  return {
    builderInfo: state.CurrentBuilderReducer,
  };
};

export default connect(mapStateToProps, {})(Worker);

const styles = StyleSheet.create({
  Fab: {
    borderRadius: 11,
    width: metrics.width * 0.18,
    height: metrics.width * 0.18,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    position: 'absolute',
    bottom: metrics.width * 0.07,
    right: metrics.width * 0.08,
    elevation: 2,
  },
  builderDes: {
    fontWeight: 'bold',
    color: '#b8b8b8',
    marginTop: metrics.height * 0.01,
    width: metrics.width * 0.79,
  },
  builderName: {
    fontSize: scaleFont(23),
    width: metrics.width * 0.79,
    fontWeight: 'bold',
  },
  RatingText: {
    marginHorizontal: metrics.width * 0.05,
    fontWeight: 'bold',
    opacity: 0.7,
    fontSize: metrics.width * 0.04,
  },
  RatingWrapper: {
    marginTop: metrics.width * 0.01,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  BuilderDesCentreWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BuilderDesWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: metrics.width * 0.028,
    marginVertical: metrics.width * 0.018,
    backgroundColor: 'white',
    width: metrics.width * 0.87,
    borderRadius: 10,
    elevation: 3,
  },
  BuilderTileWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: metrics.width * 0.028,
    backgroundColor: '#f7f7ff',
    marginVertical: metrics.width * 0.018,
  },
  builderTileName: {
    marginTop: metrics.height * 0.01,
    fontSize: scaleFont(13),
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  builderTileImage: {
    height: metrics.width * 0.95,
    width: metrics.width * 0.7,
    borderRadius: 15,
    backgroundColor: 'white',
    elevation: 2,
  },
  suggBuilderWrapper: {
    marginHorizontal: metrics.width * 0.035,
  },
  suggBuilderHeader: {
    fontSize: scaleFont(21),
    fontWeight: 'bold',
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: metrics.width * 0.03,
    paddingVertical: metrics.height * 0.018,
  },
});
