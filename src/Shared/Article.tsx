import * as React from 'react';
// import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Linking,
  Button
} from 'react-native';
import Contacts from './Shared/Contacts';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id:5, 
          avatar: "https://pbs.twimg.com/profile_images/1138851434471067649/Vh-uXyIM_400x400.jpg",
          title: "yoo check out this fire track about cricket",
          link: "https://soundcloud.com/acornavi/jim-wilson-crickets-audio",
          time: "5 days ago",   
          image:"https://lorempixel.com/400/200/sports/1/"
          
        }, 
        {
          id:6, 
          avatar: "https://pbs.twimg.com/profile_images/1138851434471067649/Vh-uXyIM_400x400.jpg",
          title: "Found this cool new artist who goes by a dumb name",
          link: "https://open.spotify.com/artist/2q8NnayQRRAtiiHgaHfkqc",
          time: "2 weeks ago",   
          image:"https://lorempixel.com/400/200/nature/3/"
          
        },
        {
          id:7, 
          avatar: "https://pbs.twimg.com/profile_images/1138851434471067649/Vh-uXyIM_400x400.jpg",
          title: "peaceful new beat by AVerma. Really enjoyed it.",
          link: "https://soundcloud.com/averma2/segovia",
          time: "7 days ago",   
          image:"https://lorempixel.com/400/200/nature/1/"
          
        },  
        {id:8, title: "Ridiculus mus. Donec quam",          time:"8 days a go",    image:"https://lorempixel.com/400/200/nature/3/"},
        {id:9, title: "Felis, ultricies nec, pellentesque", time:"9 minutes a go", image:"https://lorempixel.com/400/200/nature/4/"},
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            const link = item.link
            return (
              <View style={styles.card}>
               
               <View style={styles.cardHeader}>
                  <Image style={styles.avatar} source={{uri:item.avatar}}/>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>

                <Text style={styles.link} onPress={() => Linking.openURL(String(item.link))}>
                    {item.link}
                </Text>

                

                <Image style={styles.cardImage} source={{uri:item.image}}/>

                <View>
                    <Text style={styles.time}>{item.time}</Text>
                </View>
                


                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/android/75/e74c3c/hearts.png'}}/>
                        <Text style={styles.socialBarLabel}>78</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/ios-glyphs/75/2ecc71/comments.png'}}/>
                        <Text style={styles.socialBarLabel}>25</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/metro/75/3498db/administrator-male.png'}}/>
                        <Text rkType='primary4 hintColor' style={styles.socialBarLabel}>13</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
    marginTop: 10,
    marginHorizontal: 20,

  },
  /******** card components **************/
  title:{
    fontSize:16,
    flex:1,
    flexWrap: 'wrap',
    marginLeft: 3,
    marginRight: 30,
  },
  time:{
    fontSize:12,
    color: "#808080",
    marginTop: 5,
    marginHorizontal: 20,
  },
  icon: {
    width:25,
    height:25,
  },
  link: {
    color: 'purple',
    fontSize:16,
    flex:1,
    flexWrap: 'wrap',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  avatar: {
    height: 42,
    width: 42,
    borderRadius: 16,
    marginRight: 4,
    backgroundColor: '#009e98',
  },
  letter: {
    color: '#fffbf8',
    fontWeight: 'bold',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#3c4245',
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
      // <ScrollView
      //   style={styles.container}
      //   contentContainerStyle={styles.content}
      // >
      //   <View style={styles.author}>
      //     <Image
      //       style={styles.avatar}
      //       source={require('../../assets/avatar-1.png')}
      //     />
      //     <View style={styles.meta}>
      //       <Text style={styles.name}>Knowledge Bot</Text>
      //       <Text style={styles.timestamp}>1st Jan 2025</Text>
      //     </View>
      //   </View>
      //   <Text style={styles.title}>Lorem Ipsum</Text>
      //   <Text style={styles.paragraph}>
      //     Contrary to popular belief, Lorem Ipsum is not simply random text. It
      //     has roots in a piece of classical Latin literature from 45 BC, making
      //     it over 2000 years old.
      //   </Text>
      //   <Image style={styles.image} source={require('../../assets/book.jpg')} />
      //   <Text style={styles.paragraph}>
      //     Richard McClintock, a Latin professor at Hampden-Sydney College in
      //     Virginia, looked up one of the more obscure Latin words, consectetur,
      //     from a Lorem Ipsum passage, and going through the cites of the word in
      //     classical literature, discovered the undoubtable source.
      //   </Text>
      //   <Text style={styles.paragraph}>
      //     Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de
      //     Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by
      //     Cicero, written in 45 BC. This book is a treatise on the theory of
      //     ethics, very popular during the Renaissance. The first line of Lorem
      //     Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in
      //     section 1.10.32.
      //   </Text>
      // </ScrollView>
//     );
//   }
// }




// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff5f0',
//   },
//   content: {
//     paddingVertical: 16,
//   },
//   author: {
//     flexDirection: 'row',
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   meta: {
//     marginHorizontal: 8,
//     justifyContent: 'center',
//   },
//   name: {
//     color: '#000',
//     fontWeight: 'bold',
//     fontSize: 16,
//     lineHeight: 24,
//   },
//   timestamp: {
//     color: '#999',
//     fontSize: 14,
//     lineHeight: 21,
//   },
//   avatar: {
//     height: 48,
//     width: 48,
//     borderRadius: 24,
//   },
//   title: {
//     color: '#000',
//     fontWeight: 'bold',
//     fontSize: 36,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   paragraph: {
//     color: '#000',
//     fontSize: 16,
//     lineHeight: 24,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//     marginVertical: 8,
//   },
// });
