import React, { useState, createContext } from 'react';

export const StoriesContext = createContext();

const StoriesProvider= ({children}) => {
  const [stories, setStories] = useState([
    { id: 1, 
      name: 'First', 
      photo: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      current: 0,
      list: [
      'https://images.pexels.com/photos/788200/pexels-photo-788200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      ]
    },
    { id: 2, 
      name: 'Second', 
      photo: 'https://images.pexels.com/photos/975437/pexels-photo-975437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      current: 0,
      list: [
      'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/3992446/pexels-photo-3992446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    ]},
    { id: 3, 
      name: 'Third',
      current: 0,
      photo: 'https://images.pexels.com/photos/1963578/pexels-photo-1963578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
      list: [
      'https://images.pexels.com/photos/3994840/pexels-photo-3994840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/3639542/pexels-photo-3639542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    ]},
    { id: 4, 
      name: 'Fourth', 
      photo: 'https://images.pexels.com/photos/2071555/pexels-photo-2071555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      current: 0,
      list: [
        'https://images.pexels.com/photos/2071555/pexels-photo-2071555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    ]},
  ]);


  const next = (id) => {
    
    let s = stories.map(story => {
                         
                        if(parseInt(story.id) === parseInt(id)){
                          
                          if(story.current < story.list.length){
                            story.current++;
                          }
                        }
                        return story;
                      });

    setStories(s);
  }

  const before = (id) => {
    
    let s = stories.map(story => {
                         
                        if(parseInt(story.id) === parseInt(id)){
                          
                          if(story.current > 0){
                            story.current--;
                          }
                        }
                        return story;
                      });

    setStories(s);
  }
  
  const reset = (id) => {
    
    let s = stories.map(story => {
                         
                        if(parseInt(story.id) === parseInt(id)){
                            story.current = 0;
                        }
                        return story;
                      });

    setStories(s);
  }

  const byId = id => {
    let s =  stories.filter(story => parseInt(story.id) === parseInt(id));
    return s[0];
  }




  return(
    <StoriesContext.Provider value={{stories, byId, next, before, reset}}>
      {children}
    </StoriesContext.Provider>
  );
}

export default StoriesProvider;
