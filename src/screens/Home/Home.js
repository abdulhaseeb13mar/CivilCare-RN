/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import WrapperScreen from '../../components/WrapperScreen/WrapperScreen';
import {colors, metrics, scaleFont} from '../../shared/Theme';
import Listing from '../../components/listing/listing';
import Data from '../../Dummydata/DummyData';
// import FastImage from 'react-native-fast-image';
import SearchBar from '../../components/searchBar/searchBar';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import NavigationRef from '../../shared/RefNavigation';
import Builder from '../../assets/images/builder1.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Pie from 'react-native-pie';

export default function Home(props) {
  const [searchText, setSearchText] = useState('');
  const [Progress, setProgress] = useState([
    {houseName: 'zain\nhouse', percentage: 45},
    {houseName: 'nias\nhouse', percentage: 76},
    {houseName: 'haris\nhouse', percentage: 10},
  ]);

  // const RenderSearchedResult = () => {
  //   var SearchedItems = Data.subcategory.filter((item) =>
  //     item.subcategoryname.toLowerCase().includes(searchText.toLowerCase()),
  //   );
  //   return RenderBanners(
  //     SearchedItems.length == 0 ? Data.banner : SearchedItems,
  //   );
  // };

  // const RenderBanners = (BannerArr) => {
  //   return BannerArr.map((item) => (
  //     <Banner
  //       key={item.categoryid}
  //       item={item}
  //       subCategory={Data.subcategory}
  //     />
  //   ));
  // };

  const changeSearchText = (t) => setSearchText(t);
  return (
    <WrapperScreen style={{backgroundColor: 'white'}}>
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.SearchBarWrapper}>
          <SearchBar changeSearchText={changeSearchText} />
        </View>
        <View style={styles.SubHeaderWrapper}>
          <View
            style={{
              ...styles.workCubeWrapper,
              backgroundColor: 'rgba(60,210,131,0.17)',
            }}>
            <Text style={{...styles.CuberFigure, color: '#3cd283'}}>27</Text>
            <Text style={styles.cubeText}>Completed</Text>
          </View>
          <View
            style={{
              ...styles.workCubeWrapper,
              backgroundColor: 'rgba(255,206,51,0.17)',
            }}>
            <Text style={{...styles.CuberFigure, color: '#ffce33'}}>5</Text>
            <Text style={styles.cubeText}>Inprogress</Text>
          </View>
          <View
            style={{
              ...styles.workCubeWrapper,
              backgroundColor: 'rgba(253,101,101,0.17)',
            }}>
            <Text style={{...styles.CuberFigure, color: '#fd6565'}}>2</Text>
            <Text style={styles.cubeText}>Hold</Text>
          </View>
        </View>
        <View style={styles.suggBuilderWrapper}>
          <Text style={styles.suggBuilderHeader}>Suggested Builders</Text>
        </View>
        <View style={styles.listingWrapper}>
          <Listing
            data={Data.builders}
            renderItem={({item}) => <BuilderTile item={item} />}
          />
        </View>
        <View style={styles.suggBuilderWrapper}>
          <Text style={styles.suggBuilderHeader}>Builder Progress</Text>
        </View>
        <View style={styles.listingWrapper}>
          <Listing
            data={Progress}
            renderItem={({item}) => <ProgressTile item={item} />}
          />
        </View>
      </KeyboardAwareScrollView>
    </WrapperScreen>
  );
}

const ProgressTile = ({item}) => {
  let tileColors = {
    tileColor: 'rgba(255,206,51,0.13)',
    filledPie: '#ffce33',
    unfilledPie: 'rgba(255,206,51,0.3)',
  };
  item.percentage >= 60
    ? (tileColors = {
        tileColor: 'rgba(60,210,131,0.13)',
        filledPie: '#3cd283',
        unfilledPie: 'rgba(60,210,131,0.3)',
      })
    : item.percentage <= 20
    ? (tileColors = {
        tileColor: 'rgba(253,101,101,0.13)',
        filledPie: '#fd6565',
        unfilledPie: 'rgba(253,101,101,0.3)',
      })
    : null;
  return (
    <View
      style={{
        ...styles.progressWrapper,
        backgroundColor: tileColors.tileColor,
      }}>
      <View style={styles.progressContainer}>
        <Pie
          radius={metrics.width * 0.17}
          innerRadius={metrics.width * 0.11}
          sections={[
            {
              percentage: item.percentage,
              color: tileColors.filledPie,
            },
          ]}
          backgroundColor={tileColors.unfilledPie}
        />
        <Text style={styles.gaugeText}>{item.percentage}%</Text>
      </View>
      <Text style={styles.progressBottomText}>{item.houseName}</Text>
    </View>
  );
};

const BuilderTile = ({item}) => {
  return (
    <View style={styles.BuilderTileWrapper}>
      <ImageBackground
        source={item.buiderImage}
        style={styles.builderTileImage}
        resizeMode="contain"
      />
      <Text style={styles.builderTileName}>{item.buildersName}</Text>
      <View style={styles.ratingView}>
        <AntDesign name="star" color="#ffce33" size={metrics.width * 0.04} />
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>
    </View>
  );
};

const border = {
  borderColor: 'red',
  borderWidth: 1,
};

const styles = StyleSheet.create({
  progressBottomText: {
    marginTop: metrics.height * 0.01,
    fontSize: scaleFont(14),
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
  progressContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressWrapper: {
    width: metrics.width * 0.42,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: metrics.width * 0.028,
    borderRadius: 15,
    marginHorizontal: metrics.width * 0.06,
  },
  gaugeText: {
    position: 'absolute',
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: scaleFont(18),
    fontWeight: 'bold',
  },
  listingWrapper: {
    marginVertical: metrics.height * 0.018,
  },
  ratingText: {marginLeft: metrics.width * 0.015},
  builderTileName: {
    marginTop: metrics.height * 0.01,
    fontSize: scaleFont(13),
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  builderTileImage: {
    width: '100%',
    height: metrics.width * 0.35,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  BuilderTileWrapper: {
    width: metrics.width * 0.42,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: metrics.width * 0.028,
    borderRadius: 15,
    backgroundColor: '#f7f7ff',
    elevation: 3,
    marginHorizontal: metrics.width * 0.06,
  },
  ratingView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: metrics.height * 0.003,
  },
  suggBuilderWrapper: {
    marginHorizontal: metrics.width * 0.035,
  },
  suggBuilderHeader: {
    fontSize: scaleFont(20),
    fontWeight: 'bold',
  },
  cubeText: {
    fontWeight: 'bold',
    fontSize: scaleFont(12),
    color: 'black',
  },
  CuberFigure: {
    fontSize: scaleFont(22),
    fontWeight: 'bold',
  },
  workCubeWrapper: {
    width: metrics.width * 0.24,
    height: metrics.width * 0.24,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {flex: 1},
  SearchBarWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: metrics.smallMargin,
  },
  SubHeaderWrapper: {
    marginVertical: metrics.height * 0.04,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
