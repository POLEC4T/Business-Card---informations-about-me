import InstaIcon from '../images/InstaIcon.svg';
import GithubIcon from '../images/githubIcon.svg';

export default function Footer(){
    return (
        <footer>
            <a href="https://www.instagram.com/miloniemaz38/">
                <img src={InstaIcon}></img>
            </a>
            <a href="https://github.com/POLEC4T">
                <img src={GithubIcon}></img>
            </a>
        </footer>
    );
}
