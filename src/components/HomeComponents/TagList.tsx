import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import Tag from './Tag';
import {getTags} from '../../api/api';

const TagList = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tagsData = await getTags();
        setTags(tagsData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={tags}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <Tag icon={item?.IconUrl} title={item?.Name} />;
          }}
          ItemSeparatorComponent={() => <View style={{margin: 5}} />}
          contentContainerStyle={{paddingVertical: 20}}
          ListHeaderComponent={() => <View style={{margin: 7}} />}
        />
      )}
    </View>
  );
};

export default TagList;
