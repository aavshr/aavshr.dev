import styles from './profiles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Profiles() {
    return (
        <div className={styles.linksContainer}>
            <a 
            className={styles.profileLink}
            href="https://github.com/aavshr">
                <div className={styles.linkIcon}>
                <FontAwesomeIcon icon={faGithub}/>
                </div>
            </a>
            <a 
            className={styles.profileLink}
            href="https://www.linkedin.com/in/aavshr/">
                <div className={styles.linkIconLinkedIn}>
                <FontAwesomeIcon icon={faLinkedin}/>
                </div>
            </a> 
            <a 
            className={styles.profileLink}
            href="https://www.twitter.com/funkyQuacks">
                <div className={styles.linkIcon}>
                <FontAwesomeIcon icon={faTwitter}/>
                </div>
            </a> 
        </div>
    )
}