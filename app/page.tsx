import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";
import {getAllCompanions, getUserSessions} from "@/lib/actions/companion.action";
import {getSubjectColor} from "@/lib/utils";
import {currentUser} from "@clerk/nextjs/server";

// Force dynamic rendering to prevent caching issues
export const dynamic = 'force-dynamic'

const Page = async () => {
    const user = await currentUser();
    const companions = await getAllCompanions({ limit: 3 });
    const recentSessionsCompanions = user ? await getUserSessions(user.id, 10) : [];

  return (
    <main>
      <h1>Popular Companions</h1>

        <section className="home-section">
            {companions.map((companion) => (
                <CompanionCard
                    key={companion.id}
                    {...companion}
                    color={getSubjectColor(companion.subject)}
                />
            ))}

        </section>

        <section className="home-section">
            <CompanionList
                title="Recently completed sessions"
                companions={recentSessionsCompanions}
                classNames="w-2/3 max-lg:w-full"
            />
            <CTA />
        </section>
    </main>
  )
}

export default Page