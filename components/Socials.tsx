
import Link from 'next/link'
import {FaGithub, FaLinkedinIn, FaStackOverflow} from 'react-icons/fa'

interface SocialsProps {
    containerStyles: string;
    iconStyles: string;
}

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/tulshidas39'},
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/tulshi-das-29b9bb125'},
    // {icon: <FaMedium />, path: 'https://medium.com/@biswajitpanday'},
    {icon: <FaStackOverflow />, path: 'https://stackoverflow.com/users/9746445/tulshi-das'}
]

const Socials = ({containerStyles, iconStyles}: SocialsProps) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles} target='_blank'>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials;