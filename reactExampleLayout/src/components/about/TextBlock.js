import React from 'react'
import styles from 'styles/About.module.css';

export default function TextBlock(props) {
    return (
        <div className={styles.aboutText} >
            <div className={styles.blocktext}>
                <span>{props.text}</span>
            </div>
        </div>
    )
}
