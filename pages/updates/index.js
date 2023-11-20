import React from 'react';
import styles from '../../styles/Updates.module.css';
import RootLayout from '../../components/Layout';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Fade from '@mui/material/Fade';
import Pagination from '@mui/material/Pagination';
import { Parallax } from 'react-parallax';
import XC3 from '../../shared/images/XC3.jpg';

// post: { title: string, previewImage, mainImages[], description (find way to truncate?), date: string}
const PostComponent = ({post}) => (
    <div className={styles.Post}>
        <Paper>
            <Typography variant='h5' fontFamily='Roboto Slab' margin='0 auto' mb='0.25rem' pt='0.5rem' width={'90%'}>{post.title}</Typography>
            <Typography variant='subtitle1' fontFamily='Roboto Slab' margin='0 auto' marginBottom={'0.5rem'} color='rgb(120,120,120)' width={'90%'}>{post.date}</Typography>
            <Parallax bgImage={post.previewImage} blur={{ min: -20, max: 20 }} strength={200} className={styles.postParallax}>
                <div/>
            </Parallax>
            <Typography variant='paragraph' fontFamily='Open Sans' margin='0 auto' mt={'0.5rem'} mb={'1rem'} pb={'0.5rem'} width={'90%'} display={'block'}>{post.description}</Typography>
        </Paper>
    </div>
)

export default function Updates() {
    const allPosts = [{title: 'Example Title 1', previewImage: XC3.src, mainImages: [], description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore.', date:'November 10th, 2023'},
    {title: 'Example Title 2', previewImage: XC3.src, mainImages: [], description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore.', date:'November 10th, 2023'},
    {title: 'Example Title 3', previewImage: XC3.src, mainImages: [], description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore.', date:'November 10th, 2023'},
    {title: 'Example Title 4', previewImage: XC3.src, mainImages: [], description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore.', date:'November 10th, 2023'},
    {title: 'Example Title 5', previewImage: XC3.src, mainImages: [], description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore.', date:'November 10th, 2023'},
    {title: 'Example Title 6', previewImage: XC3.src, mainImages: [], description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore.', date:'November 10th, 2023'},
    {title: 'Example Title 7', previewImage: XC3.src, mainImages: [], description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore.', date:'November 10th, 2023'},
    {title: 'Example Title 8', previewImage: XC3.src, mainImages: [], description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore.', date:'November 10th, 2023'}
,{title: 'Example Title 9', previewImage: XC3.src, mainImages: [], description: 'Lorem ipsum dolor sit amet, consectetur adipisci elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore.', date:'November 10th, 2023'}]
    const postsPerPage = 2;
    const pageCounter = Math.ceil(allPosts.length/postsPerPage);
    const fetchPagePosts = (pageNumber) => allPosts.slice((pageNumber-1)*postsPerPage, Math.min(pageNumber*postsPerPage, allPosts.length));
    const [pagePosts, setPagePosts] = React.useState(fetchPagePosts(1));

    return (
    <RootLayout>
        <Fade in={true}>
            <div className={styles.Updates}>
                <Typography variant="h4" textAlign='center' mb='1rem' fontFamily='Roboto Slab' fontWeight={600}>Recent Updates</Typography>
                <Divider sx={{width: '50%', margin: '0 auto'}}/>
                <div className={styles.PostsContainer}>
                    <Stack direction="column" spacing='1rem' maxHeight='100%'>
                        {pagePosts.map((post, i) => <PostComponent key={i} post={post} />)}
                    </Stack>
                </div>
                <div className={styles.PaginationContainer}>
                    <Pagination count={pageCounter} variant='outlined' shape='rounded' onChange={(e, pageNumber) => setPagePosts(fetchPagePosts(pageNumber))}/>
                </div>
            </div>
        </Fade>
    </RootLayout>
    )
}
