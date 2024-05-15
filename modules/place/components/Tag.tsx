import styles from './Tag.module.scss';

interface TagProps {
  name: string;
}

const Tag = (props: TagProps) => {
  const { name } = props;

  return (
    <div className={styles.tag}>{name}</div>
  )
}

export default Tag;
