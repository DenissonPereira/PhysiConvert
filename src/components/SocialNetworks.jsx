import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaFacebookSquare } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import '../styles/components/SocialNetworks.sass'


const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn />},
    {name: "github", icon: <FaGithub />},
    {name: "instagram", icon: <FaInstagram />},
    {name: "facebook", icon: <FaFacebookSquare />},
    {name: "twitter", icon: <FaXTwitter />},
]

const SocialNetworks = () => {
  return (
    <section id='social-netwoks'>
        <p>Redes: </p>
        {socialNetworks.map((network) => (
            <a href="#" className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks