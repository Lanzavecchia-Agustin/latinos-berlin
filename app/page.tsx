import { CommonProblems } from "@/components/sections/common-problems"
import { Features } from "@/components/sections/features"
import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { OurStory } from "@/components/sections/our-story"
import { WaitlistForm } from "@/components/sections/waitlist-form"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="our-story">
          <OurStory />
        </div>
        <div id="common-problems">
          <CommonProblems />
        </div>
        <div id="waitlist">
          <WaitlistForm />
        </div>
        <Footer />
      </main>
    </>
  )
}