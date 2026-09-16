import { useNavigate } from 'react-router-dom';
import styles from './BackBtn.module.scss';
import backIcon from '/icons/back-icon.png';

type Props = {
  to?: string;
};

export const BackBtn: React.FC<Props> = ({ to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <button className={styles.backBtn} onClick={handleClick}>
      <img src={backIcon} alt="backIcon" />
      Back
    </button>
  );
};
