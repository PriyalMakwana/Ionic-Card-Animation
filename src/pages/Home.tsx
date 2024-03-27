import { IonCard, IonCardContent, IonContent, IonHeader, IonImg, IonItem, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'

interface Post {
  id:string,
  image:string,
  name:string
}

const Home: React.FC = () => {

  const posts: Post[] = [
    {
      id:'1',
      image:'https://via.placeholder.com/500',
      name:'achive your dreams'
    },
    {
      id:'2',
      image:'https://via.placeholder.com/500',
      name:'achive your dreams'
    },
    {
      id:'3',
      image:'https://via.placeholder.com/500',
      name:'achive your dreams'
    }
  ]

  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined)
  return (
    <IonPage>
      <IonHeader mode='ios'>
        <IonToolbar mode='ios'>
          <IonTitle>Blog posts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
         <div className='content-container'>
            <IonList mode='ios' className='ion-no-padding'>
                {
                  posts.map((post)=>
                    <IonItem key={post.id} mode='ios' lines='none' className='ion-no-padding'>
                       <IonCard className='ion-no-padding' onClick={()=>setSelectedPost(post)}>
                         <motion.div className='card-content' layoutId={'card-'+post.id}>
                            <motion.div layoutId={'image-container'+post.id}>
                               <IonImg className='card-image' src={post.image}></IonImg>
                            </motion.div>
                          <IonCardContent>
                             <motion.div
                              variants={{
                                show:{
                                  opacity:1,
                                  transition:{
                                    duration:0.5, 
                                    delay:0.3
                                    }},
                                    hidden:{
                                      opacity:0,
                                      transition: {
                                        duration:0.1
                                        }
                                      }
                                    }} 
                                    initial="show"
                                    animate={selectedPost?.id === post.id ? 'hidden' : 'show'}
                                    className='title-container'>
                                <IonText>{post.name}</IonText>
                             </motion.div>
                          </IonCardContent>
                         </motion.div>
                       </IonCard>
                    </IonItem>
                  )
                }
            </IonList>
              <AnimatePresence>
             {
              selectedPost &&
             <motion.div className='popup-container' layoutId={'card-'+selectedPost.id} initial={{opacity: 0}} animate={{opacity: 1}} onClick={()=>setSelectedPost(undefined)}>
                 <motion.div layoutId={'image-container'+selectedPost.id}>
                  <IonImg src={selectedPost.image}/>
                 </motion.div>
                 <motion.div
                    initial={{opacity:0, transform: 'translateY(20px)'}}
                    animate={{opacity:1, transform: 'translateY(0)', transitionDuration: '0.5s', transitionDelay:'0.2s' }}>
                  <h1>{selectedPost.name}</h1>
                 </motion.div>
                 <motion.div
                 initial={{opacity:0, transform: 'translateY(20px)'}}
                 animate={{opacity:1, transform: 'translateY(0)', transitionDuration: '0.5s', transitionDelay:'0.25s' }}>
                 <IonText>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aut perspiciatis nobis exercitationem, repellat dolorem inventore voluptate iste eligendi. Et maxime illum earum eaque tenetur voluptatum harum aliquam molestiae expedita.</p>
                  </IonText>
                 </motion.div>
                  
             </motion.div>
              } 
              </AnimatePresence>

            </div>  
      </IonContent>
    </IonPage>
  );
};

export default Home;
