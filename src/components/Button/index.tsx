import { styles } from "./styles";

type Props = {

}

const Button: React.FC<Props> = () => {
    return (
        <button css={styles.container}>ボタン</button>
    )
}

export default Button;
