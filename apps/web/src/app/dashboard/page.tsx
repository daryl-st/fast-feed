import { ProfileHeader } from '@/components/dashboard/ProfileHeader'
import { StatsCards } from '@/components/dashboard/StatsCards'
import { AccountInfo } from '@/components/dashboard/AccountInfo'
import { SystemPrefs } from '@/components/dashboard/SystemPrefs'
import { Container } from '@/components/shared/Container'

export default function DashboardPage() {
  return (
    <Container>
      <div className="space-y-6">
        <ProfileHeader />
        <StatsCards />
        <div className="grid grid-cols-12 gap-16">
          {/* Left Column: Form (7/12) */}
          <div className="col-span-12 lg:col-span-7">
            <AccountInfo />
          </div>

          {/* Right Column: Preferences (5/12) */}
          <div className="col-span-12 lg:col-span-5">
            <SystemPrefs />
          </div>
        </div>
      </div>
    </Container>
  )
}
