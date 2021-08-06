import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const  MEDIA = () =>{

    const defaultClass = "btn btn-social-icon";
    const mediaClass = " socialMediaButton";
    const MEDIA =
    [
        { 
        class: "btn btn-social-icon  socialMediaButton btn-twitter",
        link: "https://twitter.com/TelpochcalliRM",
        icon: faTwitter         
        },

        {
        class: "btn btn-social-icon btn-flickr socialMediaButton",
        link: "https://www.instagram.com/telpochcalli_robotics/",
        icon : faInstagram
        },

        {
        class: "btn btn-social-icon btn-github socialMediaButton",
        link: "https://github.com/Telpochcalli",
        icon:faGithub
        },

        {
        class: "btn btn-social-icon btn-reddit socialMediaButton",
        link: "mailto:telpochcalli.robotics@gmail.com",
        icon : faEnvelope
        }
        
    ];

    return MEDIA;

}

export default MEDIA;
