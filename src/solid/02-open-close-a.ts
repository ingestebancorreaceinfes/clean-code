import { PhotosService, PostService, TodoService } from './02-open-close-b';
import { HtppClient } from './02-open-close-c';

(async () => {

    const httpCliente = new HtppClient;

    const todoService = new TodoService(httpCliente);
    const postService = new PostService(httpCliente);
    const photosService = new PhotosService(httpCliente);

    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photosService.getPhotos();
    
    
    console.log({ todos, posts, photos });
    

})();