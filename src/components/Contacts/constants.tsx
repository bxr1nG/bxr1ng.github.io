import ContactIcon from "../ContactIcon/ContactIcon";
import {ReactComponent as LinkedinIcon} from "../../assets/images/contactIcons/linkedin.svg";
import {ReactComponent as GithubIcon} from "../../assets/images/contactIcons/github.svg";
import {ReactComponent as GmailIcon} from "../../assets/images/contactIcons/gmail.svg";
import {ReactComponent as ResumeIcon} from "../../assets/images/contactIcons/resume.svg";
import {ReactComponent as TelegramIcon} from "../../assets/images/contactIcons/telegram.svg";
import LinkedinImage from "../../assets/images/contactImages/linkedin.jpg";
import GithubImage from "../../assets/images/contactImages/github.jpg";
import GmailImage from "../../assets/images/contactImages/gmail.jpg";
import ResumeImage from "../../assets/images/contactImages/resume.jpg";
import TelegramImage from "../../assets/images/contactImages/telegram.jpg";

export const contacts = [
    {
        id: 1,
        image: LinkedinImage,
        icon: <ContactIcon icon={LinkedinIcon}/>,
        color: '#0a66c2',
        link: 'https://www.linkedin.com/in/daniilvoshchuk/',
    },
    {
        id: 2,
        image: GithubImage,
        icon: <ContactIcon icon={GithubIcon}/>,
        color: '#202020',
        link: 'https://github.com/bxr1nG',
    },
    {
        id: 3,
        image: GmailImage,
        icon: <ContactIcon icon={GmailIcon}/>,
        color: '#e54033',
        link: 'mailto: voshchukdaniil@gmail.com',
    },
    {
        id: 4,
        image: ResumeImage,
        icon: <ContactIcon icon={ResumeIcon}/>,
        color: '#ced7df',
        link: 'https://drive.google.com/file/d/1zNXnggXMbF8CkqTXFJQyAgnHcbn4WulU/view?usp=sharing',
    },
    {
        id: 5,
        image: TelegramImage,
        icon: <ContactIcon icon={TelegramIcon}/>,
        color: '#26a1df',
        link: 'https://t.me/bxr1ng',
    },
]