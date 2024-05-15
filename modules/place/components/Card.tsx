import styles from './Card.module.scss';
import Tag from './Tag';

interface Tag {
  id: number;
  name: string;
  type: string;
}

export interface CardProps {
  name: string;
  body: string;
  imgUrl: string;
  tags: Tag[];
}

const Card = (props: CardProps) => {
  const { name, body, imgUrl, tags } = props;

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardHeadear}>
          <img src={imgUrl} />
          <p>{name}</p>
        </div>
        <div className={styles.cardBody}>{body}</div>
      </div>
      <div className={styles.cardTag}>
        {tags.map(tag => {
          return <Tag name={tag.name} />
        })}
      </div>
    </div>
  )
}

export default Card;
