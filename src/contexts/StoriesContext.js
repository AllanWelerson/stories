import React, { useState, createContext } from 'react';

export const StoriesContext = createContext();

const StoriesProvider= ({children}) => {
  const [stories, setStories] = useState([
    { id: 1, 
      name: 'Ford', 
      photo: 'https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      current: 0,
      list: [
      'https://images.pexels.com/photos/788200/pexels-photo-788200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      ]
    },
    { id: 2, 
      name: 'Stephen', 
      photo: 'https://images.pexels.com/photos/19872/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      current: 0,
      list: [
      'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/3992446/pexels-photo-3992446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    ]},
    { id: 3, 
      name: 'Trillian',
      current: 0,
      photo: 'https://images.pexels.com/photos/1963578/pexels-photo-1963578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
      list: [
      'https://images.pexels.com/photos/3994840/pexels-photo-3994840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/3639542/pexels-photo-3639542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    ]},
    { id: 4, 
      name: 'Wanda', 
      photo: 'https://images.pexels.com/photos/1643773/pexels-photo-1643773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      current: 0,
      list: [
        'https://images.pexels.com/photos/2071555/pexels-photo-2071555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    ]},
    { id: 5, 
      name: 'Zaphod', 
      photo: 'https://images.pexels.com/photos/23769/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      current: 0,
      list: [
      'https://images.pexels.com/photos/788200/pexels-photo-788200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      ]
    },
    { id: 6, 
      name: 'Marvin', 
      photo: 'https://images.pexels.com/photos/975437/pexels-photo-975437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      current: 0,
      list: [
      'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/3992446/pexels-photo-3992446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    ]},
    { id: 7, 
      name: 'Arthur',
      current: 0,
      photo: 'https://images.pexels.com/photos/1963578/pexels-photo-1963578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
      list: [
      'https://images.pexels.com/photos/3994840/pexels-photo-3994840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/3639542/pexels-photo-3639542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    ]},
    { id: 8, 
      name: 'Steve Rogers',
      current: 0,
      photo: 'https://images.pexels.com/photos/1963578/pexels-photo-1963578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
      list: [
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
