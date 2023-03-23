import { DirectoryItemContainer, BackgroundImage, Body } from './directory-item.styles';
import { useNavigate } from 'react-router-dom';

function DirectoryItem({ category }) {

    const {imageUrl, title} = category

    const navigate = useNavigate();

    const onNavigateHandler = () => {
      navigate("shop/" + title);
    }

    return (
        <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body onClick={onNavigateHandler} >
      <h2> {title} </h2>
      <p>Shop Now</p>
      </Body>
      </DirectoryItemContainer>
    )
}

export default DirectoryItem;