import styles from './index.module.css';

export default function Footer() {
    return (
        <section className={[styles.section].join(' ')}>
            <p className={styles.footer}>Beatblock Plus and Beatblock Tools are not associated with BubbleTabby in any way.</p>
            <p className={styles.footer}>For any issues, <a href="/contact">contact</a> us.</p>
        </section>
    );
}
