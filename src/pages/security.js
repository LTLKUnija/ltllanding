import styles from "@/styles/security.module.scss"
import Accordion from "@/components/Accordion"
import IndexLayout from "@/Layouts/IndexLayout"
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'

export default function Security() {
  const router = useRouter();
  const t = router.locale === 'lt' ? lt : en

  return (
    <>
      <IndexLayout>
        <main className={styles.securityPage}>
          <div className={styles.securityPageWrapper}>
            <h1>{t.security.title}</h1>
            <p>{t.security.description}</p>
            <Accordion accId="1" singleLevel="true"/>
          </div>
        </main>
      </IndexLayout>
    </>
  )
}