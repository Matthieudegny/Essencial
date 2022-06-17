import { useSelector, useDispatch } from 'react-redux';
import PostForm from '../PostForm';
import { actionChangeFormField, actionSubmitPost } from '../../actions/addpost';
import './style.scss';



function AppPostForm() {
  const dispatch = useDispatch();

  const title= useSelector((state) => state.addpost.title);
  const content = useSelector((state) => state.addpost.content);
  const path = useSelector((state) => state.addpost.path);

  return (
    <header className="header">
      
      <PostForm
        title={title}
        content={content}
        path={path}
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
            // on envoie mon action submitForm au middleware, pour qu'il declenche la requete pour ajouter le post
          );
        }}

      />
    </header>
  );
}

export default AppPostForm;
