import { useSelector, useDispatch } from 'react-redux';
import PostForm from '../PostForm';
import { actionChangeFormField, actionSubmitPost } from '../../actions/addpost';
import './style.scss';



function AppPostForm() {
  const dispatch = useDispatch();

  const title= useSelector((state) => state.addpost.title);
  const content = useSelector((state) => state.addpost.content);
  const path = useSelector((state) => state.addpost.path);
  const category_1 = useSelector((state) => state.addpost.category_1);
  const category_2 = useSelector((state) => state.addpost.category_2);

  return (
    <header className="header">
      
      <PostForm
        title={title}
        content={content}
        path={path}
        category_1={category_1}
        category_2={category_2}
        changeField={(value, inputName) => {
          //console.log('changeField', { value, inputName });
          dispatch(
            actionChangeFormField(value, inputName),
          );
        }}
        handleForm={() => {
          console.log('handleForm');
          dispatch(
            actionSubmitPost(),
            // on envoie mon action submitPos au middleware, pour qu'il declenche la requete pour ajouter le post
          );
        }}

      />
    </header>
  );
}

export default AppPostForm;
