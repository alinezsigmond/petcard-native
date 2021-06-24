import React from 'react'
import { useState, useEffect } from 'react'
import api from '../../api'
import { View, Text } from 'react-native'

export default function Teste() {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   api.get('/especies').then(response => setPosts(response.data));
  // }, []);
  const token = ' '
  api.get('/especies', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then((res) => {
    console.log(res.data)
  })
  .catch((error) => {
    console.error(error)
  })

  return (
    <View >
      <Text>oi :)</Text>
      {/* {posts.map(post => (
        <Text key={post.id}>
          {post.nome}
        </Text>
      ))} */}
    </View>
  );
}