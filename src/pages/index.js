import styles from './index.module.css';
import Hero from '../components/homepage/hero/Hero.js'
import Contributors from '../components/homepage/contributors/Contributors.js'
import Features from '../components/homepage/features/Features.js'
import Footer from '../components/homepage/footer/Footer.js'

export default function Home() {
  return (
    <div className={styles.homepage}>
      <main className={styles.main}>
        <Hero />
        <Features />
        <Contributors />
        <Footer />
      </main>
    </div>
  );
}
