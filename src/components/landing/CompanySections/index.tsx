import Translate from '@docusaurus/Translate'
import { cn } from '@site/src/lib/utils'
import { BentoGrid, BentoGridItem } from '../../magicui/bento-grid'
import { Section } from '../Section'

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
];

export default function Companies() {
  return (
    <Section title={<Translate id="homepage.feature.title">个人特点</Translate>} icon={'ri:map-pin-user-line'}>
     <BentoGrid className="mx-auto w-full">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-500">
            TRUSTED BY LEADING TEAMS
          </h3>
          <div className="relative mt-6">
            <div className="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4 xl:grid-cols-8 xl:gap-4">
              {companies.map((logo, idx) => (
                <img
                  key={idx}
                  src={`https://cdn.magicui.design/companies/${logo}.svg`}
                  className="h-10 w-40 px-2 dark:brightness-0 dark:invert"
                  alt={logo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}