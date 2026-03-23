import { ProfileHeader } from '@/components/dashboard/ProfileHeader'
import { StatsCards } from '@/components/dashboard/StatsCards'
import { AccountInfo } from '@/components/dashboard/AccountInfo'
import { SystemPrefs } from '@/components/dashboard/SystemPrefs'
import { SecurityTier } from '@/components/dashboard/SecurityTier'
import { Container } from '@/components/shared/Container'

export default function DashboardPage() {
  return (
    <Container>
      <div className="space-y-6">
        <ProfileHeader />
        <StatsCards />
        <AccountInfo />
        <SystemPrefs />
        <SecurityTier />
      </div>
    </Container>
  )
}