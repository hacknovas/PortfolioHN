import Image from "next/image";
import styles from "@/app/CSS/header.module.css"
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className={styles.navSection}>
        <h3 className={styles.navName}>Prathamesh Doni</h3>
        <ul className={styles.navSectionList}>
          <li className={styles.navSectionListItems}>About</li>
          <li className={styles.navSectionListItems}>Skills</li>
          <li className={styles.navSectionListItems}>Projects</li>
          <li className={styles.navSectionListItems}>Qualification</li>
        </ul>
      </div>
      <div className={styles.headSection}>
        <ul className={styles.headSectionItems}>
          <Link href="https://www.linkedin.com/in/prathamesh-doni-15aab8209/">
            <Image className={styles.headSectionEachItem} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARZJREFUSEvt1U8rhUEUx/HPpZQV2VjZoCxEycqfsvAy5CWwt7K35C3Iy5CFFFlbyJ+yslI2LBTu1BlN9z5JnvuwYOqpmXk6v++c3znTtDQ8Wg3rqwJMBPS6F/BOwC42QngPm3UhJSCd/KpDcBK1MvlRQDp8oxZldxot8iIGgvSM05jPYSjmTzhrZzuCZcygHwcVNexq03uMhtANcjbHWIr9S2yHYFnDV2xhp2yUzjb9CuABg/FVdfEqDvOP7wBybALdYRZ9BSlZtVYXsN++H+shsoKjAnCB6bqAKaRa5JEyGYvFI4brAlKnvRSAc8wX6w/rP6vBLcYjqOyitJU8fysET7DwD8gX7Y9bVPcB64r/lUe/p1m8A9mnURl6/sH5AAAAAElFTkSuQmCC" alt="NA" width={24} height={24} />
          </Link>
          <Link href="https://github.com/hacknovas">
            <Image className={styles.headSectionEachItem} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjBJREFUSEu11UnIjlEUB/DfJ7IhCyRZosxFslCKKGFjKEOKEjKlJGOJZAglkiHsCCXDhh0LC5SIjEWysDAkC1KIPOfrvnW/53uHx+I7m/e99/7P/Z9z7jn/p00XW1sX368VQQ/MxgyMxlDafd7hCW4W+1fwu1GgzQim4SSGtMjyLVbiVj1cI4It2J+irVLFv9iKQ2VwPYLNOFDl1jqYDTiS75cJpqRUYz/quwyrsQPd8CbVezgi6n04gWOYl/Ym4W6NJCfoiecYnA53Y2f6H+/wEd/SuhcG4nVab8fe9P8FxhRB/Yl1TrAAl7L0ItVIuYodxKYMOCtVoAPB+SKixRloIu5VuT1F/DgL+DjWlTOI8ozI0hxZ8fIa7CHGpcWDIoMJZYJP6J8A14tBmvOfBBewKPl8Qb8ywYdisAYkwG1M/U+CG5iZfL6jd5ngEcYmQHRL32YSUCIPSfmMPmn/FaKVOzzyGSzPHFfgbMUsAns6w57DkjJB1PwqviJSjD6P8Q89+tGAKOZhbRq4GMSazcflMkHMRHTSoKI9p2MVluJX6umF+JluiJJcS7juJfKXGJWmupNcz03y+x7j0+BNTlmsKV10EUFatqhEdGG71RO7o1if9GdPkzfYlUlJDXa4kJONuU8juQ5xCy26U4jYUzzDqRJZnAeuZqHCleS65hCqGHoU0xnyHQ+eWyjpNtxPmhW/nazVJzPO45MZMh2Z5DYs9Xo8dkNrRdDMt9JZlxP8A6W4YxlKv0WFAAAAAElFTkSuQmCC" alt="NA" width={24} height={24} />
          </Link>
          <Link href="">
            <Image className={styles.headSectionEachItem} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAdtJREFUSEvF1T2oj2EYBvDf8RFSIoMyWJCEImyUxUgGDGIxCSUGGaRkMCgZyGD1OUhMskgWsSBJyaBMLAol3+91ev+nx9P75pz079zbe39d98d1P++IIcvIkPObNIDFOIKNWElvIb/xAg9xDq/riXR1sL91nj7B8X3HAVwq42qAtXiMKRNMPnD/gXV4NlDUALewbQLJ32MVduB8G3ezGdv2PoC3WNQB8A6n8RLzsQzHEP8ApOonbdwbLOkD+IzZFcC9tqJPmIcs9iNW4C6+NDubiwVtXPzmdAFk7j+r5B+wtGXSLmxoAR40XVzDtJZBZVj2MEaQcgdRfqsAzuBoU91F7KtsF3AQd7ClsKXIAI9KCRBlqFbKXmTx4XnuoZTwP/M/0eQ5WRh+YWoXQMBiLCW8vor7WF3ZnmINjjcJT1W2scJrmmaBpVzGnvbwDlW2XO7hBuQ2tha23h3EpwZIR6l8JnZjU9tllnyloe6MjiV/xayuEUXXRdNwPceXkZSSd+o6Flb6UDh0HpV6RHmsxo6kWlwutDy0zVXiwecrLO8DuNEk2dkTOF51RpdxdnawHo/+87HLg/m8DyD6oT7XA+Dyh5Nj6pPyh3O2oXQeur9k0n6Z413oP/2G3sEfpZVaGY83euAAAAAASUVORK5CYII=" alt="NA" width={24} height={24} />
          </Link>
        </ul>

        <div className={styles.headSectionIntro}>
          <h1>Hello..!</h1>
          <h3>Capable of shaping concepts into execution.</h3>
        </div>
      </div>

      {/* <div className={styles.scrollDown}>
        <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANZJREFUSEvt081pAlEUhuFHsIcEVBJMmggi9mEDggXYRlZu3KWUECRN+I+C6SGIHBhBYmbmuhBczF0O33zvOe/Mrbnxqd24XwUoNVwpun9FI3zgJ2fUB/TxnrdK0UceYow5etj9KWngEy8YYPIfpAjwiC+8Yo3OGSTKp3jCDF3srwVEPiDfeD6DxPNT+QpveeURTLkHzUxFG0vU0cIiU7ct+pVSAPF+QEJXbBInJg8theWpG5wGDEjo+k0tvxYQ+djggE3pDcsCqYpS+y5yFaBUXaWoVNERTkIfGckggW4AAAAASUVORK5CYII=" width={24} alt="NA" height={24} />
      </div> */}
    </div>
  )
}
