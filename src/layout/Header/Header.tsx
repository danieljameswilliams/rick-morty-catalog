import { HeaderProps } from "./HeaderProps";
import S from "./Header.module.scss";

export const Header = (props: HeaderProps) => {
    return (
        <div className={S.header}>Header</div>
    );
};