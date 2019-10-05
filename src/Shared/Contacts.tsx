import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

type Item = { name: string; username: username };

const CONTACTS: Item[] = [
  { name: 'Kanye West', username: '@yeezus' },
  { name: 'Denzel Curry', username: '@zeltron' },
  { name: 'Lil B', username: '@thankyouBasedGod' },
  { name: 'Wiz Khalifa', username: '@420blazeit' },
  { name: 'Wayne Day', username: '@therealweezy2' },
  { name: 'Bud Peterson', username: '@budgottheJams42' },
  { name: 'Joey Badass', username: '@BadmonNY' },
  { name: 'Kirthi Velekumar', username: '@kvdaboi' },
  { name: 'Lil B', username: '@thankyouBasedGod' },
  { name: 'Funk Flex', username: '@971radio' },
  { name: 'Gucci Mane', username: '@ATLhoe' },
  { name: 'Aubrey Graham', username: '@drizzydrake' },
  { name: 'Buzz Buzz', username: '@campusDJ' },
];

class ContactItem extends React.PureComponent<{
  item: { name: string; username: string };
}> {
  render() {
    const { item } = this.props;

    return (
      <View style={styles.item}>
        <View style={styles.avatar}>
          <Text style={styles.letter}>
            {item.name.slice(0, 1).toUpperCase()}
          </Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.username}>{item.username}</Text>
        </View>
      </View>
    );
  }
}

export default class Contacts extends React.Component {
  private renderItem = ({ item }: { item: Item }) => (
    <ContactItem item={item} />
  );

  private ItemSeparator = () => <View style={styles.separator} />;

  render() {
    return (
      <FlatList
        data={CONTACTS}
        keyExtractor={(_, i) => String(i)}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.ItemSeparator}
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff5f0',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: '#009e98',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  letter: {
    color: '#fffbf8',
    fontWeight: 'bold',
  },
  details: {
    margin: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#3c4245',
  },
  username: {
    fontSize: 12,
    color: '#999',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ffddcc',
  },
});
